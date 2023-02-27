import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FavoritesPage from './containers/Favorites';
import Layout from './containers/Layout';
import ProductsPage from './containers/Products';
import RankingPage from './containers/Ranking';
import SchedulePage from './containers/Schedule';

const App = props => {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/schedule" component={SchedulePage} />
        </Switch>
      </main>
    </Layout>
  );
};

export default App;
