import { rest } from 'msw';

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_PL_DATA_BASE_URL}/competitions/PL/standings`,
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const standingType = query.get('standingType');
      if (standingType === 'TOTAL') {
        return res(
          ctx.json({
            filters: {},
            competition: {
              id: 2021,
              area: { id: 2072, name: 'England' },
              name: 'Premier League',
              code: 'PL',
              plan: 'TIER_ONE',
              lastUpdated: '2022-03-20T08:58:54Z',
            },
            season: {
              id: 1490,
              startDate: '2022-08-05',
              endDate: '2023-05-28',
              currentMatchday: 25,
              winner: null,
            },
            standings: [
              {
                stage: 'REGULAR_SEASON',
                type: 'TOTAL',
                group: null,
                table: [
                  {
                    position: 1,
                    team: {
                      id: 57,
                      name: 'Arsenal FC',
                      crestUrl: 'https://crests.football-data.org/57.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 18,
                    draw: 3,
                    lost: 3,
                    points: 57,
                    goalsFor: 52,
                    goalsAgainst: 23,
                    goalDifference: 29,
                  },
                  {
                    position: 2,
                    team: {
                      id: 65,
                      name: 'Manchester City FC',
                      crestUrl: 'https://crests.football-data.org/65.png',
                    },
                    playedGames: 25,
                    form: null,
                    won: 17,
                    draw: 4,
                    lost: 4,
                    points: 55,
                    goalsFor: 64,
                    goalsAgainst: 25,
                    goalDifference: 39,
                  },
                  {
                    position: 3,
                    team: {
                      id: 66,
                      name: 'Manchester United FC',
                      crestUrl: 'https://crests.football-data.org/66.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 15,
                    draw: 4,
                    lost: 5,
                    points: 49,
                    goalsFor: 41,
                    goalsAgainst: 28,
                    goalDifference: 13,
                  },
                  {
                    position: 4,
                    team: {
                      id: 73,
                      name: 'Tottenham Hotspur FC',
                      crestUrl: 'https://crests.football-data.org/73.svg',
                    },
                    playedGames: 25,
                    form: null,
                    won: 14,
                    draw: 3,
                    lost: 8,
                    points: 45,
                    goalsFor: 45,
                    goalsAgainst: 35,
                    goalDifference: 10,
                  },
                  {
                    position: 5,
                    team: {
                      id: 67,
                      name: 'Newcastle United FC',
                      crestUrl: 'https://crests.football-data.org/67.png',
                    },
                    playedGames: 23,
                    form: null,
                    won: 10,
                    draw: 11,
                    lost: 2,
                    points: 41,
                    goalsFor: 35,
                    goalsAgainst: 15,
                    goalDifference: 20,
                  },
                  {
                    position: 6,
                    team: {
                      id: 63,
                      name: 'Fulham FC',
                      crestUrl: 'https://crests.football-data.org/63.svg',
                    },
                    playedGames: 25,
                    form: null,
                    won: 11,
                    draw: 6,
                    lost: 8,
                    points: 39,
                    goalsFor: 36,
                    goalsAgainst: 31,
                    goalDifference: 5,
                  },
                  {
                    position: 7,
                    team: {
                      id: 64,
                      name: 'Liverpool FC',
                      crestUrl: 'https://crests.football-data.org/64.png',
                    },
                    playedGames: 23,
                    form: null,
                    won: 10,
                    draw: 6,
                    lost: 7,
                    points: 36,
                    goalsFor: 38,
                    goalsAgainst: 28,
                    goalDifference: 10,
                  },
                  {
                    position: 8,
                    team: {
                      id: 397,
                      name: 'Brighton & Hove Albion FC',
                      crestUrl: 'https://crests.football-data.org/397.svg',
                    },
                    playedGames: 22,
                    form: null,
                    won: 10,
                    draw: 5,
                    lost: 7,
                    points: 35,
                    goalsFor: 39,
                    goalsAgainst: 29,
                    goalDifference: 10,
                  },
                  {
                    position: 9,
                    team: {
                      id: 402,
                      name: 'Brentford FC',
                      crestUrl: 'https://crests.football-data.org/402.png',
                    },
                    playedGames: 23,
                    form: null,
                    won: 8,
                    draw: 11,
                    lost: 4,
                    points: 35,
                    goalsFor: 37,
                    goalsAgainst: 30,
                    goalDifference: 7,
                  },
                  {
                    position: 10,
                    team: {
                      id: 61,
                      name: 'Chelsea FC',
                      crestUrl: 'https://crests.football-data.org/61.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 8,
                    draw: 7,
                    lost: 9,
                    points: 31,
                    goalsFor: 23,
                    goalsAgainst: 24,
                    goalDifference: -1,
                  },
                  {
                    position: 11,
                    team: {
                      id: 58,
                      name: 'Aston Villa FC',
                      crestUrl: 'https://crests.football-data.org/58.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 9,
                    draw: 4,
                    lost: 11,
                    points: 31,
                    goalsFor: 30,
                    goalsAgainst: 38,
                    goalDifference: -8,
                  },
                  {
                    position: 12,
                    team: {
                      id: 354,
                      name: 'Crystal Palace FC',
                      crestUrl: 'https://crests.football-data.org/354.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 9,
                    lost: 9,
                    points: 27,
                    goalsFor: 21,
                    goalsAgainst: 31,
                    goalDifference: -10,
                  },
                  {
                    position: 13,
                    team: {
                      id: 351,
                      name: 'Nottingham Forest FC',
                      crestUrl: 'https://crests.football-data.org/351.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 7,
                    lost: 11,
                    points: 25,
                    goalsFor: 18,
                    goalsAgainst: 42,
                    goalDifference: -24,
                  },
                  {
                    position: 14,
                    team: {
                      id: 338,
                      name: 'Leicester City FC',
                      crestUrl: 'https://crests.football-data.org/338.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 7,
                    draw: 3,
                    lost: 14,
                    points: 24,
                    goalsFor: 36,
                    goalsAgainst: 42,
                    goalDifference: -6,
                  },
                  {
                    position: 15,
                    team: {
                      id: 76,
                      name: 'Wolverhampton Wanderers FC',
                      crestUrl: 'https://crests.football-data.org/76.svg',
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 6,
                    lost: 12,
                    points: 24,
                    goalsFor: 18,
                    goalsAgainst: 33,
                    goalDifference: -15,
                  },
                  {
                    position: 16,
                    team: {
                      id: 563,
                      name: 'West Ham United FC',
                      crestUrl: 'https://crests.football-data.org/563.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 5,
                    lost: 13,
                    points: 23,
                    goalsFor: 23,
                    goalsAgainst: 29,
                    goalDifference: -6,
                  },
                  {
                    position: 17,
                    team: {
                      id: 341,
                      name: 'Leeds United FC',
                      crestUrl: 'https://crests.football-data.org/341.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 7,
                    lost: 12,
                    points: 22,
                    goalsFor: 29,
                    goalsAgainst: 39,
                    goalDifference: -10,
                  },
                  {
                    position: 18,
                    team: {
                      id: 62,
                      name: 'Everton FC',
                      crestUrl: 'https://crests.football-data.org/62.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 6,
                    lost: 13,
                    points: 21,
                    goalsFor: 17,
                    goalsAgainst: 32,
                    goalDifference: -15,
                  },
                  {
                    position: 19,
                    team: {
                      id: 1044,
                      name: 'AFC Bournemouth',
                      crestUrl: 'https://crests.football-data.org/1044.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 6,
                    lost: 13,
                    points: 21,
                    goalsFor: 22,
                    goalsAgainst: 48,
                    goalDifference: -26,
                  },
                  {
                    position: 20,
                    team: {
                      id: 340,
                      name: 'Southampton FC',
                      crestUrl: 'https://crests.football-data.org/340.png',
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 3,
                    lost: 16,
                    points: 18,
                    goalsFor: 19,
                    goalsAgainst: 41,
                    goalDifference: -22,
                  },
                ],
              },
            ],
          })
        );
      }
    }
  ),
  rest.get(
    `${process.env.REACT_APP_PL_DATA_BASE_URL}/competitions/PL/matches`,
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const status = query.get('status');
      const dateFrom = query.get('dateFrom');
      const dateTo = query.get('dateTo');
      if (
        status === 'SCHEDULED' &&
        dateFrom === '2023-02-27' &&
        dateTo === '2023-03-06'
      ) {
        return res(
          ctx.json({
            count: 12,
            filters: { status: ['SCHEDULED'] },
            competition: {
              id: 2021,
              area: { id: 2072, name: 'England' },
              name: 'Premier League',
              code: 'PL',
              plan: 'TIER_ONE',
              lastUpdated: '2022-03-20T08:58:54Z',
            },
            matches: [
              {
                id: 416324,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-01T19:45:00Z',
                status: 'SCHEDULED',
                matchday: 7,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:01Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 57, name: 'Arsenal FC' },
                awayTeam: { id: 62, name: 'Everton FC' },
                referees: [
                  {
                    id: 11430,
                    name: 'Simon Hooper',
                    role: 'REFEREE',
                    nationality: 'England',
                  },
                  {
                    id: 11605,
                    name: 'Michael Oliver',
                    role: 'REFEREE',
                    nationality: 'England',
                  },
                ],
              },
              {
                id: 416318,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-01T20:00:00Z',
                status: 'SCHEDULED',
                matchday: 7,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:01Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 64, name: 'Liverpool FC' },
                awayTeam: { id: 76, name: 'Wolverhampton Wanderers FC' },
                referees: [
                  {
                    id: 11423,
                    name: 'Andy Madley',
                    role: 'REFEREE',
                    nationality: 'England',
                  },
                  {
                    id: 11520,
                    name: 'Paul Tierney',
                    role: 'REFEREE',
                    nationality: 'England',
                  },
                ],
              },
              {
                id: 416128,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T12:30:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 65, name: 'Manchester City FC' },
                awayTeam: { id: 67, name: 'Newcastle United FC' },
                referees: [],
              },
              {
                id: 416125,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T15:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 76, name: 'Wolverhampton Wanderers FC' },
                awayTeam: { id: 73, name: 'Tottenham Hotspur FC' },
                referees: [],
              },
              {
                id: 416130,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T15:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 61, name: 'Chelsea FC' },
                awayTeam: { id: 341, name: 'Leeds United FC' },
                referees: [],
              },
              {
                id: 416131,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T15:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 397, name: 'Brighton & Hove Albion FC' },
                awayTeam: { id: 563, name: 'West Ham United FC' },
                referees: [],
              },
              {
                id: 416133,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T15:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 58, name: 'Aston Villa FC' },
                awayTeam: { id: 354, name: 'Crystal Palace FC' },
                referees: [],
              },
              {
                id: 416134,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T15:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 57, name: 'Arsenal FC' },
                awayTeam: { id: 1044, name: 'AFC Bournemouth' },
                referees: [],
              },
              {
                id: 416126,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-04T17:30:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-02-26T01:32:02Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 340, name: 'Southampton FC' },
                awayTeam: { id: 338, name: 'Leicester City FC' },
                referees: [],
              },
              {
                id: 416127,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-05T14:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-01-25T16:20:19Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 351, name: 'Nottingham Forest FC' },
                awayTeam: { id: 62, name: 'Everton FC' },
                referees: [],
              },
              {
                id: 416129,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-05T16:30:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-01-25T16:20:19Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 64, name: 'Liverpool FC' },
                awayTeam: { id: 66, name: 'Manchester United FC' },
                referees: [],
              },
              {
                id: 416132,
                season: {
                  id: 1490,
                  startDate: '2022-08-05',
                  endDate: '2023-05-28',
                  currentMatchday: 25,
                },
                utcDate: '2023-03-06T20:00:00Z',
                status: 'SCHEDULED',
                matchday: 26,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-01-25T16:20:19Z',
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.',
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: { homeTeam: null, awayTeam: null },
                  halfTime: { homeTeam: null, awayTeam: null },
                  extraTime: { homeTeam: null, awayTeam: null },
                  penalties: { homeTeam: null, awayTeam: null },
                },
                homeTeam: { id: 402, name: 'Brentford FC' },
                awayTeam: { id: 63, name: 'Fulham FC' },
                referees: [],
              },
            ],
          })
        );
      }
    }
  ),
  // rest.post('http://localhost:3030/order', (req, res, ctx) => {
  //   return res(ctx.json({ orderNumber: 123455676 }));
  // }),
];
