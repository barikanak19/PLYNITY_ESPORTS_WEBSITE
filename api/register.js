import { readJsonBody, sendJson, setCorsHeaders } from './_lib/http.js';

function getAppsScriptUrl(sheetKey, requestBody) {
  const candidates = [];

  if (requestBody?.sheetUrl) {
    candidates.push(requestBody.sheetUrl);
  }

  if (sheetKey) {
    const normalizedKey = String(sheetKey).trim().toUpperCase();
    candidates.push(process.env[`GOOGLE_APPS_SCRIPT_URL_${normalizedKey}`]);
    candidates.push(process.env[`${normalizedKey}_GOOGLE_APPS_SCRIPT_URL`]);
    candidates.push(process.env[`VITE_${normalizedKey}`]);
  }

  candidates.push(process.env.GOOGLE_APPS_SCRIPT_URL);
  candidates.push(process.env.GOOGLE_SCRIPT_URL);

  for (const candidate of candidates) {
    if (typeof candidate === 'string' && candidate.trim()) {
      return candidate.trim();
    }
  }

  return '';
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, { success: false, error: 'Method not allowed' });
  }

  try {
    const body = await readJsonBody(req);
    const sheetKey = body?.sheetKey || body?.sheet || '';
    const payload = body?.payload || body?.data || body;

    console.log('[Register API] Registration submission request received.', { sheetKey });

    const appsScriptUrl = getAppsScriptUrl(sheetKey, body);
    if (!appsScriptUrl) {
      console.error('[Register API] Google Apps Script URL is not configured.');
      return sendJson(res, 500, {
        success: false,
        error: 'Google Apps Script endpoint is not configured on the server.',
      });
    }
console.log('[Register API] APP SCRIPT URL:', appsScriptUrl);
console.log('[Register API] Payload:', payload);
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    let responseData = {};

    try {
      responseData = responseText ? JSON.parse(responseText) : {};
    } catch {
      responseData = { message: responseText }; 
    }

    console.log('[Register API] Google Apps Script response.', {
      status: response.status,
      responseData,
    });

    if (!response.ok || responseData?.success === false) {
      const message = responseData?.error || responseData?.message || 'Google Sheets submission failed.';
      return sendJson(res, response.ok ? 502 : response.status, {
        success: false,
        error: message,
        details: responseData,
      });
    }

    return sendJson(res, 200, {
      success: true,
      ...responseData,
    });
  } catch (error) {
    console.error('[Register API] Registration submission failed.', error);
    return sendJson(res, 500, {
      success: false,
      error: error.message || 'Registration could not be saved.',
    });
  }
}
