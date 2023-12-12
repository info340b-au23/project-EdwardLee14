import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import FavoriteButton from './fav-button';
import StarButton from './star-buttons';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged, auth} from '../index';


const Article = () => {
  const location = useLocation();
  const cardData = location.state;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {

      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(cardData.reviews);
  const averageRating = (cardData.rating / cardData.reviews).toFixed(1);;
  console.log("test"+ cardData.reviews);
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
            <p className="rating">Rating: {averageRating}/5</p>
          </div>
          <div id="fav-button">
            <FavoriteButton status={cardData.favorite} />
          </div>
        </div>
        <div className="right-half">
          <div className="text-box">{cardData.article}</div>
          {user && <StarButton name={cardData.name}/>}
        </div>
      </div>
    </div>
  );
  
};



export default Article;
