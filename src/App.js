import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import RankingPage from './containers/Ranking';
import SchedulePage from './containers/Schedule';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/schedule" component={SchedulePage} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
