/**
 * sheetsService — submits registration data to Google Apps Script
 */
import { GOOGLE_SHEET_URLS } from '../config/tournaments';

/**
 * Submit registration to the correct Google Sheet
 * @param {string} sheetKey - key from GOOGLE_SHEET_URLS
 * @param {Object} data - registration payload
 */
export async function submitRegistration(sheetKey, data) {
  const url = GOOGLE_SHEET_URLS[sheetKey];

  console.log('[Sheets] Submitting registration payload to Google Apps Script...', {
    sheetKey,
    url: url ? `${url.slice(0, 80)}...` : '(not configured)',
  });

  if (!url || url.startsWith('PLACEHOLDER')) {
    if (import.meta.env.DEV) {
      console.warn(`[Sheets] Sheet URL not configured for: ${sheetKey}. Using local simulation.`);
      return new Promise((resolve) => setTimeout(() => resolve({ success: true, simulated: true }), 1000));
    }

    throw new Error('Google Sheets endpoint is not configured.');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    let responseData = {};

    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch {
      responseData = { message: responseText };
    }

    console.log('[Sheets] Google Apps Script response.', { status: response.status, responseData });

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