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

  if (!url || url.startsWith('PLACEHOLDER')) {
    console.warn(`[Plynity] Sheet URL not configured for: ${sheetKey}`);
    // In dev/placeholder mode, simulate success after 1s
    return new Promise((resolve) => setTimeout(() => resolve({ success: true, simulated: true }), 1000));
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json().catch(() => ({ success: true }));
  } catch (error) {
    throw new Error('Failed to save registration. Please contact support.');
  }
}