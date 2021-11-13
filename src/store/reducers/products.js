import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
    {
      id: '874',
      name: 'Cristiano Ronaldo',
      nation: 'England',
      age: '36 years old',
      club: 'Manchester United',
      height_weight: '187/83',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p14937.png',
      isFavorite: false,
    },
    {
      id: '931',
      name: 'Ferran Torres',
      nation: 'Spain',
      age: '21 years old',
      club: 'Manchester City',
      height_weight: '184/77',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p224444.png',
      isFavorite: false,
    },
    {
      id: '2735',
      name: 'Pierre-Emile Højbjerg',
      nation: 'Denmark',
      age: '26 years old',
      club: 'Tottenham Hotspur',
      height_weight: '187/84',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p132015.png',
      isFavorite: false,
    },
    {
      id: '19220',
      name: 'Mason Mount',
      nation: 'England',
      age: '22 years old',
      club: 'Chelsea FC',
      height_weight: '178/70',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png',
      isFavorite: false,
    },
    {
      id: '306',
      name: 'Mohamed Salah',
      nation: 'Egypt',
      age: '29 years old',
      club: 'Liverpool',
      height_weight: '175/71',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png',
      isFavorite: false,
    },
    {
      id: '2597',
      name: 'Takehiro Tomiyasu',
      nation: 'Japan',
      age: '23 years old',
      club: 'Arsenal FC',
      height_weight: '188/70',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p223723.png',
      isFavorite: false,
    },
    {
      id: '547',
      name: 'Donny van de Beek',
      nation: 'Netherlands',
      age: '24 years old',
      club: 'Manchester United',
      height_weight: '184/76',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p180184.png',
      isFavorite: false,
    },
    {
      id: '617',
      name: 'Ederson',
      nation: 'Brazil',
      age: '28 years old',
      club: 'Manchester City',
      height_weight: '188/86',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png',
      isFavorite: false,
    },
    {
      id: '739',
      name: 'Sergio Reguilón',
      nation: 'Spain',
      age: '25 years old',
      club: 'Tottenham Hotspur',
      height_weight: '178/68',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p199249.png',
      isFavorite: false,
    },

    {
      id: '907',
      name: 'Romelu Lukaku',
      nation: 'Belgium',
      age: '28 years old',
      club: 'Chelsea FC',
      height_weight: '190/93',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png',
      isFavorite: false,
    },
    {
      id: '290',
      name: 'Virgil van Dijk',
      nation: 'Netherlands',
      age: '30 years old',
      club: 'Liverpool',
      height_weight: '193/92',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png',
      isFavorite: false,
    },
    {
      id: '20355',
      name: 'Aaron Ramsdale',
      nation: 'England',
      age: '23 years old',
      club: 'Arsenal FC',
      height_weight: '188/77',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p225321.png',
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        p => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
