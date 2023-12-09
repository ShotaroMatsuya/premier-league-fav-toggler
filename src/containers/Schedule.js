import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clearModal, setSchedule } from '../store/actions/schedule';

import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import Spinner from '../components/UI/Spinner';

const Schedule = (props) => {
  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  const scheduleTable = [];
  let game_list = [];
  let games_num;
  const youbi = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date, jdate;
  let jtime = '';

  useEffect(() => {
    dispatch(setSchedule());
  }, [dispatch]);

  if (schedule.error) {
    return (
      <Modal show modalClosed={() => dispatch(clearModal())}>
        <p
          style={{
            fontWeight: 'bold',
            lineHeight: '2',
            letterSpacing: '1.2px',
            fontSize: '1.2rem'
          }}
          data-testid="error-modal"
        >
          Request failed. Please try again later.

        </p>
      </Modal>
    );
  }

  if (schedule.schedule !== null) {
    game_list = schedule.schedule.data.matches;
    games_num = schedule.schedule.data.resultSet.count;

    if (games_num === 0) {
      return (
        <Modal show modalClosed={() => dispatch(clearModal())}>
          <p
            style={{
              fontWeight: 'bold',
              lineHeight: '2',
              letterSpacing: '1.2px',
              fontSize: '1.2rem'
            }}
            data-testid="notfound-modal"
          >
            There are no games within a week.
          </p>
        </Modal>
      );
    }

    for (let i = 0; i < games_num; i++) {
      // 日時を日本時間に変換
      date = new Date(game_list[i].utcDate);
      date = date.toLocaleString('ja-JP');
      jdate = new Date(date);

      jtime = jdate.getHours() + ':' + ('0' + jdate.getMinutes()).slice(-2); // キックオフ時刻をX:XX表記にする
      scheduleTable.push(
        <tr key={i} align="center">
          <td>
            <img
              src={
                'https://crests.football-data.org/' +
                game_list[i].homeTeam.id +
                '.svg'
              }
              height="30"
              alt="logo1"
            />
            <br />
            {game_list[i].homeTeam.name}
          </td>
          <td className={game_list[i].td_class}>
            {jdate.getMonth() + 1}/{jdate.getDate()}({youbi[jdate.getDay()]})
            <br /> {jtime}
          </td>
          <td>
            <img
              src={
                'https://crests.football-data.org/' +
                game_list[i].awayTeam.id +
                '.svg'
              }
              height="30"
              alt="logo2"
            />
            <br />
            {game_list[i].awayTeam.name}
          </td>
        </tr>
      );
    }
  }
  return (
    <Card>
      <table className="schedule">
        <thead>
          <tr align="center">
            <th width="40%">HOME</th>
            <th width="20%">
              DAY
              <br />
              (JST)
            </th>
            <th width="40%">AWAY</th>
          </tr>
        </thead>
        <tbody>
          {scheduleTable.length ? (
            scheduleTable
          ) : (
            <tr>
              <td>
                <Spinner />
              </td>
              <td>
                <Spinner />
              </td>
              <td>
                <Spinner />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default Schedule;
