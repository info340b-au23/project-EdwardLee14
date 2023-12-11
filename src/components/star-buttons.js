import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { getDatabase, get, set, ref, child } from 'firebase/database';

const StarButton = ({ name }) => {
  const [rating, setRating] = useState(0);

  const db = getDatabase();

  const handleRating = async (rate) => {
    setRating(rate);

    const ratingRef = ref(db, "businessList/" + name + "/rating");
    const reviewsRef = ref(db, "businessList/" + name + "/reviews");

    const ratingSnapshot = await get(ratingRef);
    const currentRating = ratingSnapshot.val();
    const reviewsSnapshot = await get(reviewsRef);
    const currentReviews = reviewsSnapshot.val();

    const updatedRating = currentRating + rate;
    const updatedReviews = currentReviews + 1;

    set(ratingRef, updatedRating);
    set(reviewsRef, updatedReviews);
  };

  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');

  return (
    <div className='review'>
      <h2>Rate this Business!</h2>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      />
    </div>
  );
}

export default StarButton;
