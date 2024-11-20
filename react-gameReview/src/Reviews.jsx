Reviews.jsx
import React, { useState } from 'react';

export default function Reviews({ games, addGame }) {
  const [gameList, setGameList] = useState(games);
  const [newReview, setNewReview] = useState({
    game: '',
    text: '',
  });
  const [allReviews, setAllReviews] = useState([]);

  const updateReviewField = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleGameSelection = (e) => {
    const selectedGame = e.target.value;
    setNewReview((prevReview) => ({
      ...prevReview,
      game: selectedGame,
    }));
  };

  const submitReview = () => {
    if (newReview.game && newReview.text) {
      const reviewEntry = {
        ...newReview,
        date: new Date().toLocaleString(),
      };
      setAllReviews((prevReviews) => [...prevReviews, reviewEntry]);
      setNewReview({ game: '', text: '' });
    }
  };

  const addNewGame = () => {
    if (newReview.game && !gameList.includes(newReview.game)) {
      setGameList((prevGameList) => [...prevGameList, newReview.game]);
    }
    setNewReview({ ...newReview, game: '' });
  };

  return (
    <div className="reviews-container">
      <h2>Add a Game</h2>
      <div>
        <input
          type="text"
          placeholder="Enter game name"
          value={newReview.game}
          onChange={updateReviewField}
          name="game"
        />
        <button onClick={addNewGame}>Add Game</button>
      </div>

      <h2>Submit Your Review</h2>
      <div>
        <select
          value={newReview.game}
          onChange={handleGameSelection}
        >
          <option value="">Choose a game</option>
          {gameList.map((game, idx) => (
            <option key={idx} value={game}>
              {game}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          placeholder="Write your review"
          value={newReview.text}
          onChange={updateReviewField}
          name="text"
        />
      </div>

      <div>
        <button onClick={submitReview}>Submit Review</button>
      </div>

      <h3>Reviews:</h3>
      <div className="review-list">
        {allReviews.map((review, idx) => (
          <div key={idx} className="review-item">
            <p>
              <strong>{review.game}</strong>: {review.text}
            </p>
            <small>{review.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}