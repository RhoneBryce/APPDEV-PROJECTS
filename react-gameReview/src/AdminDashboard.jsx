import React, { useState } from 'react';

export default function AdminDashboard({ games, addGame, deleteGame, reviews, addReview }) {
  const [newGame, setNewGame] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameInputChange = (e) => {
    setNewGame(e.target.value);
  };

  const handleAddGame = () => {
    if (newGame && !games.includes(newGame)) {
      addGame(newGame);
      setNewGame('');
    }
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleGameSelect = (e) => {
    setSelectedGame(e.target.value);
  };

  const handleAddReview = () => {
    if (selectedGame && reviewText) {
      addReview({
        game: selectedGame,
        text: reviewText,
        date: new Date().toLocaleString(),
      });
      setReviewText('');
      setSelectedGame('');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Add a New Game</h2>
        <input 
          type="text" 
          placeholder="Enter game name" 
          value={newGame} 
          onChange={handleGameInputChange} 
        />
        <button onClick={handleAddGame}>Add Game</button>
      </section>

      <section>
        <h2>Manage Games</h2>
        <ul>
          {games.map((game, idx) => (
            <li key={idx}>
              {game} 
              <button onClick={() => deleteGame(game)}>Delete Game</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Add a Review for a Game</h2>
        <select value={selectedGame} onChange={handleGameSelect}>
          <option value="">Select a Game</option>
          {games.map((game, idx) => (
            <option key={idx} value={game}>
              {game}
            </option>
          ))}
        </select>
        <textarea 
          placeholder="Write your review..." 
          value={reviewText} 
          onChange={handleReviewChange} 
        />
        <button onClick={handleAddReview}>Add Review</button>
      </section>

      <section>
        <h2>All Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, idx) => (
              <li key={idx}>
                <strong>{review.game}</strong>: {review.text}
                <br />
                <small>{review.date}</small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}