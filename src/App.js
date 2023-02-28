import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FavoritesPage from './containers/Favorites';
import Layout from './containers/Layout';
import PlayerPage from './containers/Players';
import RankingPage from './containers/Ranking';
import SchedulePage from './containers/Schedule';

const App = props => {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" component={PlayerPage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/schedule" component={SchedulePage} />
        </Switch>
      </main>
    </Layout>
  );
};

export default App;
