import React from 'react'
import Card from './card';
import aladdin from '../img/aladdins.jpeg';

const topArticles = () => {

  const cardData = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    name: 'Aladdins',
    price: '$',
    distance: '0.1',
    image: aladdin
  }))

  return (
    <div className="top-container">
      <div className="article-display">
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div key={rowIndex} className="card-row">
            {cardData.slice(rowIndex * 3, rowIndex * 3 + 3).map((card) => (
              <Card
                key={card.id}
                name={card.name}
                price={card.price}
                distance={card.distance}
                image={card.image}
                alt={card.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>

  );
};

export default topArticles;