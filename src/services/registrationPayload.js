export function buildRegistrationPayload({ form, matchType, paymentId, timestamp, matchInfo } = {}) {
  const base = {
    slot: '',
    // match metadata (if available) — helps Google Sheets record context
    game: matchInfo?.game || matchInfo?.gameName || '',
    matchId: matchInfo?.id || '',
    matchType: matchType || matchInfo?.type || '',
    day: matchInfo?.day || '',
    time: matchInfo?.time || '',
    entryFee: typeof matchInfo?.entryFee !== 'undefined' ? matchInfo.entryFee : '',
    name: form.playerName?.trim() || '',
    insta: (form.instagramId || '').trim(),
    mobileNo: form.mobile?.trim() || '',
    email: form.email?.trim() || '',
    paymentId: paymentId || '',
    timestamp: timestamp || new Date().toISOString(),
  };

  if (matchType === 'DUO' || matchType === 'SQUAD') {
    base.player2Name = form.player2Name?.trim() || '';
  }

  if (matchType === 'SQUAD') {
    base.player3Name = form.player3Name?.trim() || '';
    base.player4Name = form.player4Name?.trim() || '';
  }

  return base;
}
