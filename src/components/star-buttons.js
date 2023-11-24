import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

function MyComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);

  };

  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className='review'>
      <h2>Rate this Business!</h2>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
    </div>
  );
}

export default MyComponent;
