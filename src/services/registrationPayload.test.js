import test from 'node:test';
import assert from 'node:assert/strict';
import { buildRegistrationPayload } from './registrationPayload.js';

test('builds a solo payload using the new sheet column names', () => {
  const payload = buildRegistrationPayload({
    form: {
      playerName: 'Test Player',
      mobile: '9876543210',
      email: 'player@example.com',
      instagramId: '  ',
    },
    matchType: 'SOLO',
    paymentId: 'pay_123',
    timestamp: '2026-07-02T00:00:00.000Z',
  });

  assert.deepEqual(payload, {
    slot: '',
    game: '',
    matchId: '',
    matchType: 'SOLO',
    day: '',
    time: '',
    entryFee: '',
    name: 'Test Player',
    insta: '',
    mobileNo: '9876543210',
    email: 'player@example.com',
    paymentId: 'pay_123',
    timestamp: '2026-07-02T00:00:00.000Z',
  });
});

test('builds a squad payload with teammate fields for the new sheet structure', () => {
  const payload = buildRegistrationPayload({
    form: {
      playerName: 'Player 1',
      player2Name: 'Player 2',
      player3Name: 'Player 3',
      player4Name: 'Player 4',
      mobile: '9000000000',
      email: 'squad@example.com',
      instagramId: '@squad',
    },
    matchType: 'SQUAD',
    paymentId: 'pay_456',
    timestamp: '2026-07-02T01:00:00.000Z',
  });

  assert.deepEqual(payload, {
    slot: '',
    game: '',
    matchId: '',
    matchType: 'SQUAD',
    day: '',
    time: '',
    entryFee: '',
    name: 'Player 1',
    player2Name: 'Player 2',
    player3Name: 'Player 3',
    player4Name: 'Player 4',
    insta: '@squad',
    mobileNo: '9000000000',
    email: 'squad@example.com',
    paymentId: 'pay_456',
    timestamp: '2026-07-02T01:00:00.000Z',
  });
});
