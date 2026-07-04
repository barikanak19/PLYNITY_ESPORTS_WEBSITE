// Google Apps Script template for Plynity registrations
// Deploy this as a web app and use the generated URL in the Vite env vars.

function doPost(e) {
  try {
    const payload = parsePayload(e);
    console.log('Received registration payload', payload);

    const sheetName = payload.sheetName || payload.sheet || getSheetName(payload.matchType);
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    if (!sheet) {
      const fallbackSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
      if (!fallbackSheet) {
        throw new Error('No sheets are available in the spreadsheet.');
      }
      sheet = fallbackSheet;
    }

    const row = buildRegistrationRow(payload);
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, rowCount: row.length, sheetName: sheet.getName() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parsePayload(e) {
  const contents = e?.postData?.contents;
  if (!contents) {
    return {};
  }

  try {
    return JSON.parse(contents);
  } catch {
    return e?.parameter || {};
  }
}

function getSheetName(matchType) {
  switch ((matchType || '').toUpperCase()) {
    case 'DUO':
      return 'DUO';
    case 'SQUAD':
      return 'SQUAD';
    case 'SOLO':
    default:
      return 'SOLO';
  }
}

function buildRegistrationRow(payload) {
  const matchType = (payload.matchType || '').toUpperCase();
  const timestamp = payload.timestamp || new Date().toISOString();

  if (matchType === 'DUO') {
    return [
      '',
      payload.name || '',
      payload.player2Name || '',
      payload.insta || '',
      payload.mobileNo || '',
      payload.email || '',
      payload.paymentId || '',
      timestamp,
    ];
  }

  if (matchType === 'SQUAD') {
    return [
      '',
      payload.name || '',
      payload.player2Name || '',
      payload.player3Name || '',
      payload.player4Name || '',
      payload.insta || '',
      payload.mobileNo || '',
      payload.email || '',
      payload.paymentId || '',
      timestamp,
    ];
  }

  return [
    '',
    payload.name || '',
    payload.insta || '',
    payload.mobileNo || '',
    payload.email || '',
    payload.paymentId || '',
    timestamp,
  ];
}
