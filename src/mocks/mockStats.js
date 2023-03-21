export const mockStats = [
  // FW (score: high)
  {
    get: 'players',
    parameters: {
      id: '1100',
      season: '2022'
    },
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1
    },
    response: [
      {
        player: {
          id: 1100,
          name: 'E. Haaland',
          firstname: 'Erling',
          lastname: 'Braut Haaland',
          age: 23,
          birth: {
            date: '2000-07-21',
            place: 'Leeds',
            country: 'England'
          },
          nationality: 'Norway',
          height: '194 cm',
          weight: '88 kg',
          injured: false,
          photo: 'https://media-3.api-sports.io/football/players/1100.png'
        },
        statistics: [
          {
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-3.api-sports.io/football/teams/50.png'
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-1.api-sports.io/football/leagues/39.png',
              flag: 'https://media-2.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 26,
              lineups: 25,
              minutes: 2120,
              number: null,
              position: 'Attacker',
              rating: '7.376923',
              captain: false
            },
            substitutes: {
              in: 1,
              out: 9,
              bench: 1
            },
            shots: {
              total: 74,
              on: 44
            },
            goals: {
              total: 28,
              conceded: 0,
              assists: 5,
              saves: null
            },
            passes: {
              total: 357,
              key: 20,
              accuracy: 10
            },
            tackles: {
              total: 3,
              blocks: 3,
              interceptions: 2
            },
            duels: {
              total: 162,
              won: 59
            },
            dribbles: {
              attempts: 20,
              success: 6,
              past: null
            },
            fouls: {
              drawn: 17,
              committed: 27
            },
            cards: {
              yellow: 4,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 5,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-1.api-sports.io/football/teams/50.png'
            },
            league: {
              id: 48,
              name: 'League Cup',
              country: 'England',
              logo: 'https://media-2.api-sports.io/football/leagues/48.png',
              flag: 'https://media-1.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 2,
              lineups: 1,
              minutes: 107,
              number: null,
              position: 'Attacker',
              rating: '6.600000',
              captain: false
            },
            substitutes: {
              in: 1,
              out: 1,
              bench: 2
            },
            shots: {
              total: 3,
              on: 1
            },
            goals: {
              total: 1,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 12,
              key: 1,
              accuracy: 5
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 7,
              won: 2
            },
            dribbles: {
              attempts: 1,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: 1
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-3.api-sports.io/football/teams/50.png'
            },
            league: {
              id: 45,
              name: 'FA Cup',
              country: 'England',
              logo: 'https://media-3.api-sports.io/football/leagues/45.png',
              flag: 'https://media-1.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 90,
              number: null,
              position: 'Attacker',
              rating: '6.900000',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 2
            },
            shots: {
              total: 2,
              on: 1
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 28,
              key: 1,
              accuracy: 16
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 15,
              won: 8
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: 2
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-3.api-sports.io/football/teams/50.png'
            },
            league: {
              id: 2,
              name: 'UEFA Champions League',
              country: 'World',
              logo: 'https://media-2.api-sports.io/football/leagues/2.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 6,
              lineups: 6,
              minutes: 405,
              number: null,
              position: 'Attacker',
              rating: '7.833333',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 5,
              bench: 1
            },
            shots: {
              total: 21,
              on: 16
            },
            goals: {
              total: 10,
              conceded: 0,
              assists: null,
              saves: null
            },
            passes: {
              total: 64,
              key: 5,
              accuracy: 8
            },
            tackles: {
              total: 1,
              blocks: null,
              interceptions: 1
            },
            duels: {
              total: 29,
              won: 15
            },
            dribbles: {
              attempts: 7,
              success: 5,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: 1
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 1,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 50,
              name: 'Manchester City',
              logo: 'https://media-3.api-sports.io/football/teams/50.png'
            },
            league: {
              id: null,
              name: 'Club Friendlies',
              country: null,
              logo: null,
              flag: null,
              season: '2022'
            },
            games: {
              appearences: 3,
              lineups: 2,
              minutes: 117,
              number: null,
              position: 'Attacker',
              rating: null,
              captain: false
            },
            substitutes: {
              in: 1,
              out: 2,
              bench: 2
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 2,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 165,
              name: 'Borussia Dortmund',
              logo: 'https://media-2.api-sports.io/football/teams/165.png'
            },
            league: {
              id: null,
              name: 'Club Friendlies',
              country: null,
              logo: null,
              flag: null,
              season: '2022'
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 30,
              number: null,
              position: 'Attacker',
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 1,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 1090,
              name: 'Norway',
              logo: 'https://media-2.api-sports.io/football/teams/1090.png'
            },
            league: {
              id: 5,
              name: 'UEFA Nations League',
              country: 'World',
              logo: 'https://media-3.api-sports.io/football/leagues/5.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 6,
              lineups: 6,
              minutes: 501,
              number: null,
              position: 'Attacker',
              rating: '7.283333',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 3,
              bench: 0
            },
            shots: {
              total: 17,
              on: 12
            },
            goals: {
              total: 6,
              conceded: 0,
              assists: 1,
              saves: null
            },
            passes: {
              total: 81,
              key: 3,
              accuracy: 8
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: 1
            },
            duels: {
              total: 38,
              won: 16
            },
            dribbles: {
              attempts: 9,
              success: 4,
              past: null
            },
            fouls: {
              drawn: 3,
              committed: 7
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 2,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 1090,
              name: 'Norway',
              logo: 'https://media-3.api-sports.io/football/teams/1090.png'
            },
            league: {
              id: 10,
              name: 'Friendlies',
              country: 'World',
              logo: 'https://media-3.api-sports.io/football/leagues/10.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 2,
              lineups: 2,
              minutes: 127,
              number: null,
              position: 'Attacker',
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 2,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 3,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      }
    ]
  },
  // GK (score: middle)
  {
    get: 'players',
    parameters: {
      id: '882',
      season: '2022'
    },
    errors: [],
    results: 1,
    paging: {
      current: 1,
      total: 1
    },
    response: [
      {
        player: {
          id: 882,
          name: 'David de Gea',
          firstname: 'David',
          lastname: 'de Gea Quintana',
          age: 33,
          birth: {
            date: '1990-11-07',
            place: 'Madrid',
            country: 'Spain'
          },
          nationality: 'Spain',
          height: '192 cm',
          weight: '76 kg',
          injured: false,
          photo: 'https://media-1.api-sports.io/football/players/882.png'
        },
        statistics: [
          {
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-3.api-sports.io/football/teams/33.png'
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-1.api-sports.io/football/leagues/39.png',
              flag: 'https://media-1.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 26,
              lineups: 26,
              minutes: 2340,
              number: null,
              position: 'Goalkeeper',
              rating: '6.880769',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 35,
              assists: null,
              saves: 71
            },
            passes: {
              total: 711,
              key: 1,
              accuracy: 18
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 5,
              won: 5
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 2,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-2.api-sports.io/football/teams/33.png'
            },
            league: {
              id: 48,
              name: 'League Cup',
              country: 'England',
              logo: 'https://media-1.api-sports.io/football/leagues/48.png',
              flag: 'https://media-3.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 2,
              lineups: 2,
              minutes: 180,
              number: null,
              position: 'Goalkeeper',
              rating: '7.600000',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 4
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 0,
              assists: null,
              saves: 6
            },
            passes: {
              total: 54,
              key: null,
              accuracy: 19
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 2,
              won: 2
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: 1,
              committed: null
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-3.api-sports.io/football/teams/33.png'
            },
            league: {
              id: 45,
              name: 'FA Cup',
              country: 'England',
              logo: 'https://media-1.api-sports.io/football/leagues/45.png',
              flag: 'https://media-3.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 3,
              lineups: 3,
              minutes: 270,
              number: null,
              position: 'Goalkeeper',
              rating: '6.700000',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 3,
              assists: null,
              saves: 10
            },
            passes: {
              total: 51,
              key: null,
              accuracy: 13
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-1.api-sports.io/football/teams/33.png'
            },
            league: {
              id: 3,
              name: 'UEFA Europa League',
              country: 'World',
              logo: 'https://media-3.api-sports.io/football/leagues/3.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 9,
              lineups: 9,
              minutes: 810,
              number: null,
              position: 'Goalkeeper',
              rating: '6.977777',
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: 7,
              assists: null,
              saves: 20
            },
            passes: {
              total: 229,
              key: null,
              accuracy: 19
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: 1,
              won: 1
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 1,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: 0
            }
          },
          {
            team: {
              id: 33,
              name: 'Manchester United',
              logo: 'https://media-2.api-sports.io/football/teams/33.png'
            },
            league: {
              id: null,
              name: 'Club Friendlies',
              country: null,
              logo: null,
              flag: null,
              season: '2022'
            },
            games: {
              appearences: 5,
              lineups: 5,
              minutes: 384,
              number: null,
              position: 'Goalkeeper',
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 2,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 9,
              name: 'Spain',
              logo: 'https://media-1.api-sports.io/football/teams/9.png'
            },
            league: {
              id: 10,
              name: 'Friendlies',
              country: 'World',
              logo: 'https://media-1.api-sports.io/football/leagues/10.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: 'Goalkeeper',
              rating: null,
              captain: false
            },
            substitutes: {
              in: 0,
              out: 0,
              bench: 0
            },
            shots: {
              total: null,
              on: null
            },
            goals: {
              total: 0,
              conceded: null,
              assists: null,
              saves: null
            },
            passes: {
              total: null,
              key: null,
              accuracy: null
            },
            tackles: {
              total: null,
              blocks: null,
              interceptions: null
            },
            duels: {
              total: null,
              won: null
            },
            dribbles: {
              attempts: null,
              success: null,
              past: null
            },
            fouls: {
              drawn: null,
              committed: null
            },
            cards: {
              yellow: 0,
              yellowred: 0,
              red: 0
            },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      }
    ]
  },
  // DF (score: low)
  {
    get: 'players',
    parameters: { id: '2597', season: '2022' },
    errors: [],
    results: 1,
    paging: { current: 1, total: 1 },
    response: [
      {
        player: {
          id: 2597,
          name: 'T. Tomiyasu',
          firstname: 'Takehiro',
          lastname: 'Tomiyasu',
          age: 25,
          birth: { date: '1998-11-05', place: 'Fukuoka', country: 'Japan' },
          nationality: 'Japan',
          height: '187 cm',
          weight: '70 kg',
          injured: false,
          photo: 'https://media-1.api-sports.io/football/players/2597.png'
        },
        statistics: [
          {
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-2.api-sports.io/football/teams/42.png'
            },
            league: {
              id: 39,
              name: 'Premier League',
              country: 'England',
              logo: 'https://media-2.api-sports.io/football/leagues/39.png',
              flag: 'https://media-1.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 21,
              lineups: 6,
              minutes: 652,
              number: null,
              position: 'Defender',
              rating: '5.684210',
              captain: false
            },
            substitutes: { in: 15, out: 3, bench: 17 },
            shots: { total: 1, on: null },
            goals: { total: 0, conceded: 0, assists: 1, saves: null },
            passes: { total: 412, key: 4, accuracy: 17 },
            tackles: { total: 27, blocks: null, interceptions: 14 },
            duels: { total: 85, won: 48 },
            dribbles: { attempts: 3, success: 1, past: null },
            fouls: { drawn: 3, committed: 6 },
            cards: { yellow: 2, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-1.api-sports.io/football/teams/42.png'
            },
            league: {
              id: 48,
              name: 'League Cup',
              country: 'England',
              logo: 'https://media-3.api-sports.io/football/leagues/48.png',
              flag: 'https://media-3.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: 'Defender',
              rating: null,
              captain: false
            },
            substitutes: { in: 0, out: 0, bench: 0 },
            shots: { total: null, on: null },
            goals: { total: 0, conceded: null, assists: null, saves: null },
            passes: { total: null, key: null, accuracy: null },
            tackles: { total: null, blocks: null, interceptions: null },
            duels: { total: null, won: null },
            dribbles: { attempts: null, success: null, past: null },
            fouls: { drawn: null, committed: null },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-3.api-sports.io/football/teams/42.png'
            },
            league: {
              id: 45,
              name: 'FA Cup',
              country: 'England',
              logo: 'https://media-2.api-sports.io/football/leagues/45.png',
              flag: 'https://media-2.api-sports.io/flags/gb.svg',
              season: 2022
            },
            games: {
              appearences: 2,
              lineups: 2,
              minutes: 171,
              number: null,
              position: 'Defender',
              rating: '7.250000',
              captain: false
            },
            substitutes: { in: 0, out: 1, bench: 0 },
            shots: { total: 1, on: 1 },
            goals: { total: 0, conceded: 0, assists: null, saves: null },
            passes: { total: 78, key: null, accuracy: 30 },
            tackles: { total: 5, blocks: 1, interceptions: 1 },
            duels: { total: 20, won: 11 },
            dribbles: { attempts: 1, success: 1, past: null },
            fouls: { drawn: 2, committed: 3 },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-3.api-sports.io/football/teams/42.png'
            },
            league: {
              id: 3,
              name: 'UEFA Europa League',
              country: 'World',
              logo: 'https://media-1.api-sports.io/football/leagues/3.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 8,
              lineups: 5,
              minutes: 401,
              number: null,
              position: 'Defender',
              rating: '6.925000',
              captain: false
            },
            substitutes: { in: 3, out: 4, bench: 3 },
            shots: { total: 1, on: null },
            goals: { total: 0, conceded: 0, assists: 1, saves: null },
            passes: { total: 285, key: 4, accuracy: 30 },
            tackles: { total: 11, blocks: null, interceptions: 4 },
            duels: { total: 37, won: 28 },
            dribbles: { attempts: 5, success: 5, past: null },
            fouls: { drawn: 2, committed: 2 },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 42,
              name: 'Arsenal',
              logo: 'https://media-2.api-sports.io/football/teams/42.png'
            },
            league: {
              id: null,
              name: 'Club Friendlies',
              country: null,
              logo: null,
              flag: null,
              season: '2022'
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: 'Defender',
              rating: null,
              captain: false
            },
            substitutes: { in: 0, out: 0, bench: 0 },
            shots: { total: null, on: null },
            goals: { total: 0, conceded: null, assists: null, saves: null },
            passes: { total: null, key: null, accuracy: null },
            tackles: { total: null, blocks: null, interceptions: null },
            duels: { total: null, won: null },
            dribbles: { attempts: null, success: null, past: null },
            fouls: { drawn: null, committed: null },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 12,
              name: 'Japan',
              logo: 'https://media-3.api-sports.io/football/teams/12.png'
            },
            league: {
              id: 1,
              name: 'World Cup',
              country: 'World',
              logo: 'https://media-1.api-sports.io/football/leagues/1.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 3,
              lineups: 1,
              minutes: 185,
              number: null,
              position: 'Defender',
              rating: '6.600000',
              captain: false
            },
            substitutes: { in: 2, out: 0, bench: 3 },
            shots: { total: null, on: null },
            goals: { total: 0, conceded: 0, assists: null, saves: null },
            passes: { total: 96, key: 3, accuracy: 23 },
            tackles: { total: null, blocks: 2, interceptions: null },
            duels: { total: 11, won: 6 },
            dribbles: { attempts: null, success: null, past: null },
            fouls: { drawn: null, committed: 1 },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: 0,
              missed: 0,
              saved: null
            }
          },
          {
            team: {
              id: 12,
              name: 'Japan',
              logo: 'https://media-2.api-sports.io/football/teams/12.png'
            },
            league: {
              id: 10,
              name: 'Friendlies',
              country: 'World',
              logo: 'https://media-2.api-sports.io/football/leagues/10.png',
              flag: null,
              season: 2022
            },
            games: {
              appearences: 1,
              lineups: 1,
              minutes: 90,
              number: null,
              position: 'Defender',
              rating: null,
              captain: false
            },
            substitutes: { in: 0, out: 0, bench: 1 },
            shots: { total: null, on: null },
            goals: { total: 0, conceded: null, assists: null, saves: null },
            passes: { total: null, key: null, accuracy: null },
            tackles: { total: null, blocks: null, interceptions: null },
            duels: { total: null, won: null },
            dribbles: { attempts: null, success: null, past: null },
            fouls: { drawn: null, committed: null },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          },
          {
            team: {
              id: 12,
              name: 'Japan',
              logo: 'https://media-2.api-sports.io/football/teams/12.png'
            },
            league: {
              id: null,
              name: 'Kirin Cup',
              country: null,
              logo: null,
              flag: null,
              season: '2022'
            },
            games: {
              appearences: 0,
              lineups: 0,
              minutes: 0,
              number: null,
              position: 'Defender',
              rating: null,
              captain: false
            },
            substitutes: { in: 0, out: 0, bench: 1 },
            shots: { total: null, on: null },
            goals: { total: 0, conceded: null, assists: null, saves: null },
            passes: { total: null, key: null, accuracy: null },
            tackles: { total: null, blocks: null, interceptions: null },
            duels: { total: null, won: null },
            dribbles: { attempts: null, success: null, past: null },
            fouls: { drawn: null, committed: null },
            cards: { yellow: 0, yellowred: 0, red: 0 },
            penalty: {
              won: null,
              commited: null,
              scored: null,
              missed: null,
              saved: null
            }
          }
        ]
      }
    ]
  }
];
