import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import FavoriteButton from './fav-button';
import StarButton from './star-buttons';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from '../index'; // Adjust the correct path
import { auth } from '../index.js'; // Import your Firebase authentication instance

const Article = () => {
  const location = useLocation();
  const cardData = location.state;

  // Firebase Authentication state hook
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      // authUser will be null if not logged in
      setUser(authUser);
    });

    return () => {
      // Cleanup function to unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  console.log(cardData);

  return (
    <div>
      <div id="post-title">{cardData.name}</div>
      <div className="post-container">
        <div className="left-half">
          <div className="image-container">
            <img src={cardData.image} alt={cardData.alt} />
          </div>
          <div className="label">
            <p className="name">Name: {cardData.name}</p>
            <p className="price">Price: {cardData.price}</p>
            <p className="distance">Distance: {cardData.distance} miles</p>
            {user && <p className="distance">Rating: {cardData.rating}/5</p>}
          </div>
          <div id="fav-button">
            <FavoriteButton status={cardData.favorite} />
          </div>
        </div>
        <div className="right-half">
          <div className="text-box">{cardData.article}</div>
          {user && <StarButton />}
        </div>
      </div>
    </div>
  );
};

export default Article;
