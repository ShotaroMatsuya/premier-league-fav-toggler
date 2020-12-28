import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
    {
      id: '909',
      name: 'Marcus Rashford',
      nation: 'England',
      age: '23 years old',
      club: 'Manchester United',
      height_weight: '180/75',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png',
      isFavorite: false,
    },
    {
      id: '631',
      name: 'Philip Walter Foden',
      nation: 'England',
      age: '20 years old',
      club: 'Manchester City',
      height_weight: '171/70',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p209244.png',
      isFavorite: false,
    },
    {
      id: '739',
      name: 'Sergio Reguilon Rodriguez',
      nation: 'Spain',
      age: '24 years old',
      club: 'Tottenham Hotspur',
      height_weight: '180/67',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p199249.png',
      isFavorite: false,
    },
    {
      id: '17',
      name: 'Christian Mate Pulisic',
      nation: 'USA',
      age: '22 years old',
      club: 'Chelsea FC',
      height_weight: '173/70',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p176413.png',
      isFavorite: false,
    },
    {
      id: '1101',
      name: 'Takumi Minamino',
      nation: 'Japan',
      age: '25 years old',
      club: 'Liverpool',
      height_weight: '174/67',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p157882.png',
      isFavorite: false,
    },
    {
      id: '1438',
      name: 'Bernd Leno',
      nation: 'Germany',
      age: '28 years old',
      club: 'Arsenal FC',
      height_weight: '189/79',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p80201.png',
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
