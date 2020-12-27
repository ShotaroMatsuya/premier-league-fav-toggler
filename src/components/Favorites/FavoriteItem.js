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
        <div className="topStatList">
          <div className="topStat">
            <span className="stat">
              Appearances{' '}
              <span
                className="allStatContainer statappearances"
                data-stat="appearances"
              >
                33
              </span>
            </span>
          </div>
          <div className="topStat">
            <span className="stat">
              Goals{' '}
              <span className="allStatContainer statgoals" data-stat="goals">
                10
              </span>
            </span>
          </div>
          <div className="topStat">
            <span className="stat">
              Wins{' '}
              <span className="allStatContainer statwins" data-stat="wins">
                16
              </span>
            </span>
          </div>
          <div className="topStat">
            <span className="stat">
              Losses{' '}
              <span className="allStatContainer statlosses" data-stat="losses">
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
