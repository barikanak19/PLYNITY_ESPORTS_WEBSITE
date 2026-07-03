// Google Apps Script template for Plynity registrations
// Deploy this as a web app and use the generated URL in the Vite env vars.

function doPost(e) {
  try {
    const payload = typeof e.postData?.contents === 'string'
      ? JSON.parse(e.postData.contents)
      : {};

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(getSheetName(payload.matchType));
    if (!sheet) {
      throw new Error(`Sheet not found for match type: ${payload.matchType || 'UNKNOWN'}`);
    }

    const row = buildRegistrationRow(payload);
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, rowCount: row.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
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
