import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import RankingPage from './containers/Ranking';
import SchedulePage from './containers/Schedule';
import Layout from './containers/Layout';

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
