import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('https://leader-self.vercel.app/api/players')
      .then((response) => setPlayers(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player._id} className="leaderboard-row">
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
