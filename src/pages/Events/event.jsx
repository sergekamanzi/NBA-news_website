import { useEffect, useState } from 'react';
import './event.css';
import axios from 'axios';

const Event = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
       const response = await axios.get(
  'https://api.server.nbaapi.com/api/playertotals?season=2025&page=1&pageSize=35&isPlayoff=False'
);


        const data = response.data?.data;
        if (Array.isArray(data)) {
          setPlayers(data);
        } else {
          setError('Invalid data format from API.');
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setError('Failed to load player stats. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="event-section">
      <h2>🏀 TOP scores - Player Stats (2025 Season)</h2>

      {loading && <p className="loading-text">Loading stats...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="stat-list">
        {Array.isArray(players) && players.map((player, index) => (
          <div key={index} className="stat-card">
            <p><strong>{player.playerName}</strong></p>
            <p>Team: {player.team}</p>
            <p>Points: {player.points}</p>
            <p>Rebounds: {player.rebounds}</p>
            <p>Assists: {player.assists}</p>
            <p>Steals: {player.steals}</p>
            <p>Blocks: {player.blocks}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Event;
