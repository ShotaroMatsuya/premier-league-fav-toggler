import { rest } from 'msw';
import { mockStats } from '../mocks/mockStats';

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
              lastUpdated: '2022-03-20T08:58:54Z'
            },
            season: {
              id: 1490,
              startDate: '2022-08-05',
              endDate: '2023-05-28',
              currentMatchday: 25,
              winner: null
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
                      crest: 'https://crests.football-data.org/57.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 18,
                    draw: 3,
                    lost: 3,
                    points: 57,
                    goalsFor: 52,
                    goalsAgainst: 23,
                    goalDifference: 29
                  },
                  {
                    position: 2,
                    team: {
                      id: 65,
                      name: 'Manchester City FC',
                      crest: 'https://crests.football-data.org/65.png'
                    },
                    playedGames: 25,
                    form: null,
                    won: 17,
                    draw: 4,
                    lost: 4,
                    points: 55,
                    goalsFor: 64,
                    goalsAgainst: 25,
                    goalDifference: 39
                  },
                  {
                    position: 3,
                    team: {
                      id: 66,
                      name: 'Manchester United FC',
                      crest: 'https://crests.football-data.org/66.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 15,
                    draw: 4,
                    lost: 5,
                    points: 49,
                    goalsFor: 41,
                    goalsAgainst: 28,
                    goalDifference: 13
                  },
                  {
                    position: 4,
                    team: {
                      id: 73,
                      name: 'Tottenham Hotspur FC',
                      crest: 'https://crests.football-data.org/73.svg'
                    },
                    playedGames: 25,
                    form: null,
                    won: 14,
                    draw: 3,
                    lost: 8,
                    points: 45,
                    goalsFor: 45,
                    goalsAgainst: 35,
                    goalDifference: 10
                  },
                  {
                    position: 5,
                    team: {
                      id: 67,
                      name: 'Newcastle United FC',
                      crest: 'https://crests.football-data.org/67.png'
                    },
                    playedGames: 23,
                    form: null,
                    won: 10,
                    draw: 11,
                    lost: 2,
                    points: 41,
                    goalsFor: 35,
                    goalsAgainst: 15,
                    goalDifference: 20
                  },
                  {
                    position: 6,
                    team: {
                      id: 63,
                      name: 'Fulham FC',
                      crest: 'https://crests.football-data.org/63.svg'
                    },
                    playedGames: 25,
                    form: null,
                    won: 11,
                    draw: 6,
                    lost: 8,
                    points: 39,
                    goalsFor: 36,
                    goalsAgainst: 31,
                    goalDifference: 5
                  },
                  {
                    position: 7,
                    team: {
                      id: 64,
                      name: 'Liverpool FC',
                      crest: 'https://crests.football-data.org/64.png'
                    },
                    playedGames: 23,
                    form: null,
                    won: 10,
                    draw: 6,
                    lost: 7,
                    points: 36,
                    goalsFor: 38,
                    goalsAgainst: 28,
                    goalDifference: 10
                  },
                  {
                    position: 8,
                    team: {
                      id: 397,
                      name: 'Brighton & Hove Albion FC',
                      crest: 'https://crests.football-data.org/397.svg'
                    },
                    playedGames: 22,
                    form: null,
                    won: 10,
                    draw: 5,
                    lost: 7,
                    points: 35,
                    goalsFor: 39,
                    goalsAgainst: 29,
                    goalDifference: 10
                  },
                  {
                    position: 9,
                    team: {
                      id: 402,
                      name: 'Brentford FC',
                      crest: 'https://crests.football-data.org/402.png'
                    },
                    playedGames: 23,
                    form: null,
                    won: 8,
                    draw: 11,
                    lost: 4,
                    points: 35,
                    goalsFor: 37,
                    goalsAgainst: 30,
                    goalDifference: 7
                  },
                  {
                    position: 10,
                    team: {
                      id: 61,
                      name: 'Chelsea FC',
                      crest: 'https://crests.football-data.org/61.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 8,
                    draw: 7,
                    lost: 9,
                    points: 31,
                    goalsFor: 23,
                    goalsAgainst: 24,
                    goalDifference: -1
                  },
                  {
                    position: 11,
                    team: {
                      id: 58,
                      name: 'Aston Villa FC',
                      crest: 'https://crests.football-data.org/58.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 9,
                    draw: 4,
                    lost: 11,
                    points: 31,
                    goalsFor: 30,
                    goalsAgainst: 38,
                    goalDifference: -8
                  },
                  {
                    position: 12,
                    team: {
                      id: 354,
                      name: 'Crystal Palace FC',
                      crest: 'https://crests.football-data.org/354.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 9,
                    lost: 9,
                    points: 27,
                    goalsFor: 21,
                    goalsAgainst: 31,
                    goalDifference: -10
                  },
                  {
                    position: 13,
                    team: {
                      id: 351,
                      name: 'Nottingham Forest FC',
                      crest: 'https://crests.football-data.org/351.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 7,
                    lost: 11,
                    points: 25,
                    goalsFor: 18,
                    goalsAgainst: 42,
                    goalDifference: -24
                  },
                  {
                    position: 14,
                    team: {
                      id: 338,
                      name: 'Leicester City FC',
                      crest: 'https://crests.football-data.org/338.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 7,
                    draw: 3,
                    lost: 14,
                    points: 24,
                    goalsFor: 36,
                    goalsAgainst: 42,
                    goalDifference: -6
                  },
                  {
                    position: 15,
                    team: {
                      id: 76,
                      name: 'Wolverhampton Wanderers FC',
                      crest: 'https://crests.football-data.org/76.svg'
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 6,
                    lost: 12,
                    points: 24,
                    goalsFor: 18,
                    goalsAgainst: 33,
                    goalDifference: -15
                  },
                  {
                    position: 16,
                    team: {
                      id: 563,
                      name: 'West Ham United FC',
                      crest: 'https://crests.football-data.org/563.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 6,
                    draw: 5,
                    lost: 13,
                    points: 23,
                    goalsFor: 23,
                    goalsAgainst: 29,
                    goalDifference: -6
                  },
                  {
                    position: 17,
                    team: {
                      id: 341,
                      name: 'Leeds United FC',
                      crest: 'https://crests.football-data.org/341.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 7,
                    lost: 12,
                    points: 22,
                    goalsFor: 29,
                    goalsAgainst: 39,
                    goalDifference: -10
                  },
                  {
                    position: 18,
                    team: {
                      id: 62,
                      name: 'Everton FC',
                      crest: 'https://crests.football-data.org/62.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 6,
                    lost: 13,
                    points: 21,
                    goalsFor: 17,
                    goalsAgainst: 32,
                    goalDifference: -15
                  },
                  {
                    position: 19,
                    team: {
                      id: 1044,
                      name: 'AFC Bournemouth',
                      crest: 'https://crests.football-data.org/1044.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 6,
                    lost: 13,
                    points: 21,
                    goalsFor: 22,
                    goalsAgainst: 48,
                    goalDifference: -26
                  },
                  {
                    position: 20,
                    team: {
                      id: 340,
                      name: 'Southampton FC',
                      crest: 'https://crests.football-data.org/340.png'
                    },
                    playedGames: 24,
                    form: null,
                    won: 5,
                    draw: 3,
                    lost: 16,
                    points: 18,
                    goalsFor: 19,
                    goalsAgainst: 41,
                    goalDifference: -22
                  }
                ]
              }
            ]
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
        dateFrom === '2023-08-27' &&
        dateTo === '2023-09-03'
      ) {
        return res(
          ctx.json({
            filters: {
              season: '2023',
              status: ['SCHEDULED']
            },
            resultSet: {
              count: 13,
              first: '2023-08-27',
              last: '2023-09-03',
              played: 0
            },
            competition: {
              id: 2021,
              name: 'Premier League',
              code: 'PL',
              type: 'LEAGUE',
              emblem: 'https://crests.football-data.org/PL.png'
            },
            matches: [
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435972,
                utcDate: '2023-08-27T13:00:00Z',
                status: 'TIMED',
                matchday: 3,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 356,
                  name: 'Sheffield United FC',
                  shortName: 'Sheffield Utd',
                  tla: 'SHE',
                  crest: 'https://crests.football-data.org/356.svg'
                },
                awayTeam: {
                  id: 65,
                  name: 'Manchester City FC',
                  shortName: 'Man City',
                  tla: 'MCI',
                  crest: 'https://crests.football-data.org/65.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435967,
                utcDate: '2023-08-27T13:00:00Z',
                status: 'TIMED',
                matchday: 3,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 328,
                  name: 'Burnley FC',
                  shortName: 'Burnley',
                  tla: 'BUR',
                  crest: 'https://crests.football-data.org/328.png'
                },
                awayTeam: {
                  id: 58,
                  name: 'Aston Villa FC',
                  shortName: 'Aston Villa',
                  tla: 'AVL',
                  crest: 'https://crests.football-data.org/58.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435971,
                utcDate: '2023-08-27T15:30:00Z',
                status: 'TIMED',
                matchday: 3,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 67,
                  name: 'Newcastle United FC',
                  shortName: 'Newcastle',
                  tla: 'NEW',
                  crest: 'https://crests.football-data.org/67.png'
                },
                awayTeam: {
                  id: 64,
                  name: 'Liverpool FC',
                  shortName: 'Liverpool',
                  tla: 'LIV',
                  crest: 'https://crests.football-data.org/64.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435980,
                utcDate: '2023-09-01T19:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 389,
                  name: 'Luton Town FC',
                  shortName: 'Luton Town',
                  tla: 'LUT',
                  crest: 'https://crests.football-data.org/389.png'
                },
                awayTeam: {
                  id: 563,
                  name: 'West Ham United FC',
                  shortName: 'West Ham',
                  tla: 'WHU',
                  crest: 'https://crests.football-data.org/563.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435982,
                utcDate: '2023-09-02T11:30:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 356,
                  name: 'Sheffield United FC',
                  shortName: 'Sheffield Utd',
                  tla: 'SHE',
                  crest: 'https://crests.football-data.org/356.svg'
                },
                awayTeam: {
                  id: 62,
                  name: 'Everton FC',
                  shortName: 'Everton',
                  tla: 'EVE',
                  crest: 'https://crests.football-data.org/62.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435974,
                utcDate: '2023-09-02T14:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 402,
                  name: 'Brentford FC',
                  shortName: 'Brentford',
                  tla: 'BRE',
                  crest: 'https://crests.football-data.org/402.png'
                },
                awayTeam: {
                  id: 1044,
                  name: 'AFC Bournemouth',
                  shortName: 'Bournemouth',
                  tla: 'BOU',
                  crest: 'https://crests.football-data.org/1044.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435976,
                utcDate: '2023-09-02T14:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 328,
                  name: 'Burnley FC',
                  shortName: 'Burnley',
                  tla: 'BUR',
                  crest: 'https://crests.football-data.org/328.png'
                },
                awayTeam: {
                  id: 73,
                  name: 'Tottenham Hotspur FC',
                  shortName: 'Tottenham',
                  tla: 'TOT',
                  crest: 'https://crests.football-data.org/73.svg'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435977,
                utcDate: '2023-09-02T14:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:20Z',
                homeTeam: {
                  id: 61,
                  name: 'Chelsea FC',
                  shortName: 'Chelsea',
                  tla: 'CHE',
                  crest: 'https://crests.football-data.org/61.png'
                },
                awayTeam: {
                  id: 351,
                  name: 'Nottingham Forest FC',
                  shortName: 'Nottingham',
                  tla: 'NOT',
                  crest: 'https://crests.football-data.org/351.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435981,
                utcDate: '2023-09-02T14:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:21Z',
                homeTeam: {
                  id: 65,
                  name: 'Manchester City FC',
                  shortName: 'Man City',
                  tla: 'MCI',
                  crest: 'https://crests.football-data.org/65.png'
                },
                awayTeam: {
                  id: 63,
                  name: 'Fulham FC',
                  shortName: 'Fulham',
                  tla: 'FUL',
                  crest: 'https://crests.football-data.org/63.svg'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435975,
                utcDate: '2023-09-02T16:30:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:21Z',
                homeTeam: {
                  id: 397,
                  name: 'Brighton & Hove Albion FC',
                  shortName: 'Brighton Hove',
                  tla: 'BHA',
                  crest: 'https://crests.football-data.org/397.svg'
                },
                awayTeam: {
                  id: 67,
                  name: 'Newcastle United FC',
                  shortName: 'Newcastle',
                  tla: 'NEW',
                  crest: 'https://crests.football-data.org/67.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435978,
                utcDate: '2023-09-03T13:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:21Z',
                homeTeam: {
                  id: 354,
                  name: 'Crystal Palace FC',
                  shortName: 'Crystal Palace',
                  tla: 'CRY',
                  crest: 'https://crests.football-data.org/354.png'
                },
                awayTeam: {
                  id: 76,
                  name: 'Wolverhampton Wanderers FC',
                  shortName: 'Wolverhampton',
                  tla: 'WOL',
                  crest: 'https://crests.football-data.org/76.svg'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435979,
                utcDate: '2023-09-03T13:00:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:21Z',
                homeTeam: {
                  id: 64,
                  name: 'Liverpool FC',
                  shortName: 'Liverpool',
                  tla: 'LIV',
                  crest: 'https://crests.football-data.org/64.png'
                },
                awayTeam: {
                  id: 58,
                  name: 'Aston Villa FC',
                  shortName: 'Aston Villa',
                  tla: 'AVL',
                  crest: 'https://crests.football-data.org/58.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              },
              {
                area: {
                  id: 2072,
                  name: 'England',
                  code: 'ENG',
                  flag: 'https://crests.football-data.org/770.svg'
                },
                competition: {
                  id: 2021,
                  name: 'Premier League',
                  code: 'PL',
                  type: 'LEAGUE',
                  emblem: 'https://crests.football-data.org/PL.png'
                },
                season: {
                  id: 1564,
                  startDate: '2023-08-11',
                  endDate: '2024-05-19',
                  currentMatchday: 1,
                  winner: null
                },
                id: 435973,
                utcDate: '2023-09-03T15:30:00Z',
                status: 'TIMED',
                matchday: 4,
                stage: 'REGULAR_SEASON',
                group: null,
                lastUpdated: '2023-07-14T16:20:21Z',
                homeTeam: {
                  id: 57,
                  name: 'Arsenal FC',
                  shortName: 'Arsenal',
                  tla: 'ARS',
                  crest: 'https://crests.football-data.org/57.png'
                },
                awayTeam: {
                  id: 66,
                  name: 'Manchester United FC',
                  shortName: 'Man United',
                  tla: 'MUN',
                  crest: 'https://crests.football-data.org/66.png'
                },
                score: {
                  winner: null,
                  duration: 'REGULAR',
                  fullTime: {
                    home: null,
                    away: null
                  },
                  halfTime: {
                    home: null,
                    away: null
                  }
                },
                odds: {
                  msg: 'Activate Odds-Package in User-Panel to retrieve odds.'
                },
                referees: []
              }
            ]
          })
        );
      } else {
        return res(
          ctx.json({
            resultSet: {
              count: 0
            }
          })
        );
      }
    }
  ),
  rest.get(
    `https://${process.env.REACT_APP_RAPID_API_HOST}/players`,
    (req, res, ctx) => {
      const query = req.url.searchParams;
      const id = query.get('id');
      if (id === '882') {
        // GK(score: 6.88)
        return res(ctx.json(mockStats[1]));
      } else if (id === '2597') {
        // DF
        return res(ctx.json(mockStats[2]));
      } else if (id === '567') {
        return res(ctx.status(429), ctx.json({ message: 'Too many requests' }));
      } else {
        // Field Player()
        return res(ctx.json(mockStats[0]));
      }
    }
  )
  // rest.post('http://localhost:3030/order', (req, res, ctx) => {
  //   return res(ctx.json({ orderNumber: 123455676 }));
  // }),
];
