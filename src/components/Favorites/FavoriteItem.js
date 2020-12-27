import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h1>{props.name}</h1>
        <p>Latest Activity from Social</p>
        <p>top stats</p>
        <div class="topStatList">
          <div class="topStat">
            <span class="stat">
              Appearances{' '}
              <span
                class="allStatContainer statappearances"
                data-stat="appearances"
              >
                33
              </span>
            </span>
          </div>
          <div class="topStat">
            <span class="stat">
              Goals{' '}
              <span class="allStatContainer statgoals" data-stat="goals">
                10
              </span>
            </span>
          </div>
          <div class="topStat">
            <span class="stat">
              Wins{' '}
              <span class="allStatContainer statwins" data-stat="wins">
                16
              </span>
            </span>
          </div>
          <div class="topStat">
            <span class="stat">
              Losses{' '}
              <span class="allStatContainer statlosses" data-stat="losses">
                11
              </span>
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FavoriteItem;
