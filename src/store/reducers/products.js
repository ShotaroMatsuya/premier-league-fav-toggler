import { TOGGLE_FAV } from '../actions/products';

const initialState = {
  products: [
    {
      id: '1100',
      name: 'Erling Haaland',
      nation: 'Norway',
      age: '22 years old',
      club: 'Manchester City',
      height_weight: '194/88',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png',
      isFavorite: false,
    },
    {
      id: '51617',
      name: 'Darwin Núñez',
      nation: 'Uruguay',
      age: '23 years old',
      club: 'Liverpool',
      height_weight: '187/81',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p447203.png',
      isFavorite: false,
    },
    {
      id: '882',
      name: 'David de Gea',
      nation: 'Spain',
      age: '31 years old',
      club: 'Manchester United',
      height_weight: '192/76',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png',
      isFavorite: false,
    },
    {
      id: '30435',
      name: 'Dejan Kulusevski',
      nation: 'Sweden',
      age: '22 years old',
      club: 'Tottenham Hotspur',
      height_weight: '186/80',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p445044.png',
      isFavorite: false,
    },
    {
      id: '47380',
      name: 'Marc Cucurella',
      nation: 'Spain',
      age: '24 years old',
      club: 'Chelsea FC',
      height_weight: '172/66',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p179268.png',
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
      id: '174',
      name: 'Christian Eriksen',
      nation: 'Denmark',
      age: '30 years old',
      club: 'Manchester United',
      height_weight: '182/76',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p80607.png',
      isFavorite: false,
    },
    {
      id: '567',
      name: 'Rúben Dias',
      nation: 'Portugal',
      age: '25 years old',
      club: 'Manchester City',
      height_weight: '186/76',
      position: 'Defender',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p171314.png',
      isFavorite: false,
    },
    {
      id: '159',
      name: 'Hugo Lloris',
      nation: 'France',
      age: '35 years old',
      club: 'Tottenham Hotspur',
      height_weight: '188/82',
      position: 'Goalkeeper',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p37915.png',
      isFavorite: false,
    },

    {
      id: '67972',
      name: 'Conor Gallagher',
      nation: 'England',
      age: '22 years old',
      club: 'Chelsea FC',
      height_weight: '182/74',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p232787.png',
      isFavorite: false,
    },
    {
      id: '507',
      name: 'Thiago',
      nation: 'Spain',
      age: '31 years old',
      club: 'Liverpool',
      height_weight: '174/70',
      position: 'Midfielder',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p61558.png',
      isFavorite: false,
    },
    {
      id: '643',
      name: 'Gabriel Jesus',
      nation: 'Brazil',
      age: '25 years old',
      club: 'Arsenal FC',
      height_weight: '175/73',
      position: 'Forward',
      imageUrl:
        'https://resources.premierleague.com/premierleague/photos/players/250x250/p205651.png',
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
