/**
 * sheetsService — submits registration data to the Vercel API, which then forwards it to Google Apps Script.
 */
const REGISTER_ENDPOINT = '/api/register';

/**
 * Submit registration to the correct Google Sheet through the Vercel API.
 * @param {string} sheetKey - key from GOOGLE_SHEET_URLS
 * @param {Object} data - registration payload
 */
export async function submitRegistration(sheetKey, data) {
  console.log('[Sheets] Submitting registration payload to Vercel API...', {
    sheetKey,
  });

  try {
    const response = await fetch(REGISTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ sheetKey, payload: data }),
    });

    const responseText = await response.text();
    let responseData = {};

    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch {
      responseData = { message: responseText };
    }

    console.log('[Sheets] Vercel API response.', { status: response.status, responseData });

    if (!response.ok || responseData?.success === false) {
      const message = responseData?.error || responseData?.message || 'Google Sheets submission failed.';
      throw new Error(message);
    }

    return responseData;
  } catch (error) {
    console.error('[Sheets] Registration submission failed.', error);
    throw new Error(error.message || 'Failed to save registration. Please contact support.');
  }
}