/* eslint-disable no-case-declarations */
import { TOGGLE_FAV } from '../actions/players';

const initialState = {
  players: [
    {
      id: '129033',
      name: 'Josko Gvardiol',
      nation: 'Croatia',
      age: '21 years old',
      club: 'Manchester City',
      height_weight: '194/88',
      position: 'DF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p477424.png',
      isFavorite: false
    },
    {
      id: '6716',
      name: 'Alexis Mac Allister',
      nation: 'Argentina',
      age: '24 years old',
      club: 'Liverpool',
      height_weight: '176/81',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p243016.png',
      isFavorite: false
    },
    {
      id: '526',
      name: 'André Onana',
      nation: 'Cameroon',
      age: '27 years old',
      club: 'Manchester United',
      height_weight: '190/76',
      position: 'GK',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p202641.png',
      isFavorite: false
    },
    {
      id: '18784',
      name: 'James Maddison',
      nation: 'England',
      age: '27 years old',
      club: 'Tottenham Hotspur',
      height_weight: '175/80',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p172780.png',
      isFavorite: false
    },
    {
      id: '63577',
      name: 'Mykhailo Mudryk',
      nation: 'Ukraine',
      age: '22 years old',
      club: 'Chelsea FC',
      height_weight: '175/66',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p465920.png',
      isFavorite: false
    },
    {
      id: '2937',
      name: 'Declan Rice',
      nation: 'England',
      age: '23 years old',
      club: 'Arsenal FC',
      height_weight: '185/70',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png',
      isFavorite: false
    },
    {
      id: '284324',
      name: 'Alejandro Garnacho',
      nation: 'Argentina',
      age: '19 years old',
      club: 'Manchester United',
      height_weight: '180/76',
      position: 'FW',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p493105.png',
      isFavorite: false
    },
    {
      id: '2291',
      name: 'Mateo Kovacic',
      nation: 'Croatia',
      age: '25 years old',
      club: 'Manchester City',
      height_weight: '177/76',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p91651.png',
      isFavorite: false
    },
    {
      id: '30776',
      name: 'Cristian Romero',
      nation: 'Argentina',
      age: '25 years old',
      club: 'Tottenham Hotspur',
      height_weight: '188/82',
      position: 'DF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p221632.png',
      isFavorite: false
    },

    {
      id: '18959',
      name: 'Robert Sánchez',
      nation: 'Spain',
      age: '25 years old',
      club: 'Chelsea FC',
      height_weight: '197/74',
      position: 'GK',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p215059.png',
      isFavorite: false
    },
    {
      id: '1096',
      name: 'Dominik Szoboszlai',
      nation: 'Hungary',
      age: '22 years old',
      club: 'Liverpool',
      height_weight: '186/70',
      position: 'MF',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p424876.png',
      isFavorite: false
    },
    {
      id: '1946',
      name: 'Leandro Trossard',
      nation: 'Belgium',
      age: '28 years old',
      club: 'Arsenal FC',
      height_weight: '172/73',
      position: 'FW',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p116216.png',
      isFavorite: false
    }
  ]
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.players.findIndex(
        (p) => p.id === action.playerId
      );
      const newFavStatus = !state.players[prodIndex].isFavorite;
      const updatedPlayers = [...state.players];
      updatedPlayers[prodIndex] = {
        ...state.players[prodIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        players: updatedPlayers
      };
    default:
      return state;
  }
};

export default playerReducer;
