/**
 * Plynity Tournament Configuration
 * 
 * Replace each PLACEHOLDER_URL with your actual Google Apps Script Web App URL.
 * Each sheet corresponds to one tournament registration sheet.
 * 
 * Format: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
 */

export const GOOGLE_SHEET_URLS = {
  BGMI_SOLO_FRIDAY:     'https://script.google.com/macros/s/AKfycbzAUh7VmjxFz8IWHSB0dQRty0CxYBg113QEMaEQtIMCj22D3vCpMGWO6SgB6BB2gqGu/exec',
  BGMI_DUO_FRIDAY:      'https://script.google.com/macros/s/AKfycbycrLHDWlIy3u2RBpLFmv8v6Bm0RVo5SS7Toffy8ezGpXxQJPi5Cdlga9kVSbfoi-KOnA/exec',
  BGMI_SOLO_SATURDAY:   'https://script.google.com/macros/s/AKfycbwpSVJDZAv9DkErCjBb0yvgf4CQ4-uJEDz5-myauPmK9GXLZFSfjGpHXyEd8TBOP49HVg/exec',
  BGMI_SQUAD_SATURDAY:  'https://script.google.com/macros/s/AKfycbyKY2w8ikuVIS6m66fsd_iTx_dAGYgjsu6HhU3vkr5ai_5QDSzaBWSmCImzkGga4e8n/exec',
  BGMI_SOLO_SUNDAY:     'https://script.google.com/macros/s/AKfycbxHLK3YsDlk8GR-51NmUgHK0dtgBozDd5MfR8jPjb5E1-oTctCOhX-bRkj70pZA_YLN/exec',
  BGMI_SQUAD_SUNDAY:    'https://script.google.com/macros/s/AKfycbyb0WiCUS3R1U4_vfuG0gIvKjeo_gszpo6HKQ5PLioFDQB3kN7-wvOQHzDQT5wUTLjZ/exec',
  FF_SOLO_FRIDAY:       'https://script.google.com/macros/s/AKfycbwBJbvulYKbsbnO2HUlhXhayt1FklZC3IRLcsm2s9Jp1i0MOMUSVjTbNwKsnMhufLQ/exec',
  FF_DUO_FRIDAY:        'https://script.google.com/macros/s/AKfycbwW2EGzKKXkSFtPQ8q9MgiGNuPY9mrELC-AMVJgQ_vLrhyCOSCxdRsAnkXxLzMzyMU4/exec',
  FF_SOLO_SATURDAY:     'https://script.google.com/macros/s/AKfycbwn3qVsUj-imC2uasWBAaOmsrh6sJEQCZ8LPoIhzvd2Ai9UW9EiWqkS8-pnfOqEHdhB/exec',
  FF_SQUAD_SATURDAY:    'https://script.google.com/macros/s/AKfycbw2bNQjZQiN14gSDTYa8EFnZ4W1Xx33FwcO5Fv99RCszOKBbF9SLug424pTuXzBKRdkkQ/exec',
  FF_SOLO_SUNDAY:       'https://script.google.com/macros/s/AKfycbys_WWYwS4PZdwatigzBcLHg1_1D-gd1od_UeqJKEaKwsQVjMyqPhlfR415Ea8UoGYU/exec',
  FF_SQUAD_SUNDAY:      'https://script.google.com/macros/s/AKfycbwWxvGB4rn9JltzAA9eJVCdUC937DGCn9kl2pHaeo1d8XVmolKLdaoextr5S-OO4LeeJg/exec',
};

/**
 * Razorpay Configuration
 * Replace with your actual Razorpay Key ID from https://dashboard.razorpay.com
 */
export const RAZORPAY_KEY_ID = 'PLACEHOLDER_RAZORPAY_KEY_ID';

/**
 * Tournament data — matches the Flutter app exactly
 */
export const TOURNAMENTS = {
  BGMI: {
    id: 'bgmi',
    name: 'BGMI',
    fullName: 'Battlegrounds Mobile India',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
    headerGradient: 'linear-gradient(135deg, #ea6a00, #f97316, #fb923c)',
    days: [
      {
        day: 'Friday',
        matches: [
          {
            id: 'bgmi_solo_friday',
            sheetKey: 'BGMI_SOLO_FRIDAY',
            type: 'SOLO',
            time: '9:30 PM',
            entryFee: 10,
            maxSlots: 100,
            prizePool: 800,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
              { place: '6th Place', amount: 100, medal: 'trophy' },
              { place: '7th Place', amount: 100, medal: 'trophy' },
            ],
          },
          {
            id: 'bgmi_duo_friday',
            sheetKey: 'BGMI_DUO_FRIDAY',
            type: 'DUO',
            time: '10:30 PM',
            entryFee: 20,
            maxSlots: 50,
            prizePool: 800,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
              { place: '6th Place', amount: 100, medal: 'trophy' },
              { place: '7th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
      {
        day: 'Saturday',
        matches: [
          {
            id: 'bgmi_solo_saturday',
            sheetKey: 'BGMI_SOLO_SATURDAY',
            type: 'SOLO',
            time: '9:30 PM',
            entryFee: 20,
            maxSlots: 100,
            prizePool: 1650,
            prizes: [
              { place: '1st Place', amount: 300, medal: 'gold' },
              { place: '2nd Place', amount: 150, medal: 'silver' },
              { place: '3rd Place', amount: 150, medal: 'bronze' },
              { place: '4th Place', amount: 150, medal: 'trophy' },
              { place: '5th Place', amount: 150, medal: 'trophy' },
              { place: '6th Place', amount: 150, medal: 'trophy' },
              { place: '7th Place', amount: 150, medal: 'trophy' },
              { place: '8th Place', amount: 150, medal: 'trophy' },
              { place: '9th Place', amount: 150, medal: 'trophy' },
              { place: '10th Place', amount: 150, medal: 'trophy' },
            ],
          },
          {
            id: 'bgmi_squad_saturday',
            sheetKey: 'BGMI_SQUAD_SATURDAY',
            type: 'SQUAD',
            time: '10:30 PM',
            entryFee: 50,
            maxSlots: 25,
            prizePool: 1000,
            prizes: [
              { place: '1st Place', amount: 300, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
              { place: '6th Place', amount: 100, medal: 'trophy' },
              { place: '7th Place', amount: 100, medal: 'trophy' },
              { place: '8th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
      {
        day: 'Sunday',
        matches: [
          {
            id: 'bgmi_solo_sunday',
            sheetKey: 'BGMI_SOLO_SUNDAY',
            type: 'SOLO',
            time: '2:30 PM',
            entryFee: 10,
            maxSlots: 100,
            prizePool: 800,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
              { place: '6th Place', amount: 100, medal: 'trophy' },
              { place: '7th Place', amount: 100, medal: 'trophy' },
            ],
          },
          {
            id: 'bgmi_squad_sunday',
            sheetKey: 'BGMI_SQUAD_SUNDAY',
            type: 'SQUAD',
            time: '3:30 PM',
            entryFee: 50,
            maxSlots: 25,
            prizePool: 1000,
            prizes: [
              { place: '1st Place', amount: 300, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
              { place: '6th Place', amount: 100, medal: 'trophy' },
              { place: '7th Place', amount: 100, medal: 'trophy' },
              { place: '8th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
    ],
  },

  FF: {
    id: 'ff',
    name: 'FF MAX',
    fullName: 'Free Fire Max',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    headerGradient: 'linear-gradient(135deg, #e11d48, #f43f5e, #fb7185)',
    days: [
      {
        day: 'Friday',
        matches: [
          {
            id: 'ff_solo_friday',
            sheetKey: 'FF_SOLO_FRIDAY',
            type: 'SOLO',
            time: '8:00 PM',
            entryFee: 10,
            maxSlots: 50,
            prizePool: 400,
            prizes: [
              { place: '1st Place', amount: 100, medal: 'gold' },
              { place: '2nd Place', amount: 50, medal: 'silver' },
              { place: '3rd Place', amount: 50, medal: 'bronze' },
              { place: '4th Place', amount: 50, medal: 'trophy' },
              { place: '5th Place', amount: 50, medal: 'trophy' },
              { place: '6th Place', amount: 50, medal: 'trophy' },
              { place: '7th Place', amount: 50, medal: 'trophy' },
            ],
          },
          {
            id: 'ff_duo_friday',
            sheetKey: 'FF_DUO_FRIDAY',
            type: 'DUO',
            time: '8:30 PM',
            entryFee: 30,
            maxSlots: 25,
            prizePool: 550,
            prizes: [
              { place: '1st Place', amount: 150, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
              { place: '5th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
      {
        day: 'Saturday',
        matches: [
          {
            id: 'ff_solo_saturday',
            sheetKey: 'FF_SOLO_SATURDAY',
            type: 'SOLO',
            time: '8:00 PM',
            entryFee: 20,
            maxSlots: 50,
            prizePool: 750,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 50, medal: 'silver' },
              { place: '3rd Place', amount: 50, medal: 'bronze' },
              { place: '4th Place', amount: 50, medal: 'trophy' },
              { place: '5th Place', amount: 50, medal: 'trophy' },
              { place: '6th Place', amount: 50, medal: 'trophy' },
              { place: '7th Place', amount: 50, medal: 'trophy' },
              { place: '8th Place', amount: 50, medal: 'trophy' },
              { place: '9th Place', amount: 50, medal: 'trophy' },
              { place: '10th Place', amount: 50, medal: 'trophy' },
              { place: '11th Place', amount: 50, medal: 'trophy' },
              { place: '12th Place', amount: 50, medal: 'trophy' },
            ],
          },
          {
            id: 'ff_squad_saturday',
            sheetKey: 'FF_SQUAD_SATURDAY',
            type: 'SQUAD',
            time: '8:30 PM',
            entryFee: 50,
            maxSlots: 12,
            prizePool: 500,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
      {
        day: 'Sunday',
        matches: [
          {
            id: 'ff_solo_sunday',
            sheetKey: 'FF_SOLO_SUNDAY',
            type: 'SOLO',
            time: '1:00 PM',
            entryFee: 10,
            maxSlots: 50,
            prizePool: 400,
            prizes: [
              { place: '1st Place', amount: 100, medal: 'gold' },
              { place: '2nd Place', amount: 50, medal: 'silver' },
              { place: '3rd Place', amount: 50, medal: 'bronze' },
              { place: '4th Place', amount: 50, medal: 'trophy' },
              { place: '5th Place', amount: 50, medal: 'trophy' },
              { place: '6th Place', amount: 50, medal: 'trophy' },
              { place: '7th Place', amount: 50, medal: 'trophy' },
            ],
          },
          {
            id: 'ff_squad_sunday',
            sheetKey: 'FF_SQUAD_SUNDAY',
            type: 'SQUAD',
            time: '1:30 PM',
            entryFee: 50,
            maxSlots: 12,
            prizePool: 500,
            prizes: [
              { place: '1st Place', amount: 200, medal: 'gold' },
              { place: '2nd Place', amount: 100, medal: 'silver' },
              { place: '3rd Place', amount: 100, medal: 'bronze' },
              { place: '4th Place', amount: 100, medal: 'trophy' },
            ],
          },
        ],
      },
    ],
  },
};

/** Helper to get sheet URL by key */
export const getSheetUrl = (key) => GOOGLE_SHEET_URLS[key] || null;

/** Helper to get all matches flat */
export const getAllMatches = () => {
  const matches = [];
  Object.values(TOURNAMENTS).forEach((game) => {
    game.days.forEach((dayData) => {
      dayData.matches.forEach((match) => {
        matches.push({ ...match, game: game.id, gameName: game.name, day: dayData.day, gameColor: game.color });
      });
    });
  });
  return matches;
};