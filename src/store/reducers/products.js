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
      name: 'Phil Foden',
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
      id: '186',
      name: 'Son Heung-Min',
      nation: 'South Korea',
      age: '28 years old',
      club: 'Tottenham Hotspur',
      height_weight: '183/77',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png',
      isFavorite: false,
    },
    {
      id: '2986',
      name: 'Édouard Mendy',
      nation: 'Senegal',
      age: '28 years old',
      club: 'Chelsea FC',
      height_weight: '197/86',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p228286.png',
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
    {
      id: '1485',
      name: 'Bruno Fernandes',
      nation: 'Portugal',
      age: '26 years old',
      club: 'Manchester United',
      height_weight: '179/69',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png',
      isFavorite: false,
    },
    {
      id: '626',
      name: 'John Stones',
      nation: 'England',
      age: '26 years old',
      club: 'Manchester City',
      height_weight: '188/70',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p97299.png',
      isFavorite: false,
    },
    {
      id: '244',
      name: 'Steven Bergwijn',
      nation: 'Netherlands',
      age: '23 years old',
      club: 'Tottenham Hotspur',
      height_weight: '178/78',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p194252.png',
      isFavorite: false,
    },

    {
      id: '978',
      name: 'Kai Havertz',
      nation: 'Germany',
      age: '21 years old',
      club: 'Chelsea FC',
      height_weight: '189/82',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png',
      isFavorite: false,
    },
    {
      id: '289',
      name: 'Andrew Robertson',
      nation: 'Scotland',
      age: '26 years old',
      club: 'Liverpool',
      height_weight: '178/64',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p122798.png',
      isFavorite: false,
    },
    {
      id: '22224',
      name: 'Gabriel Magalhães',
      nation: 'Brazil',
      age: '23 years old',
      club: 'Arsenal FC',
      height_weight: '190/78',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p226597.png',
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
