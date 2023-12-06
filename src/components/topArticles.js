import React from 'react'
import Card from './card';
import aladdin from '../img/aladdins.jpeg';

const topArticles = () => {

  const cardData = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    name: 'Aladdins',
    price: '$',
    distance: '0.1',
    image: aladdin,
    article: 'lol',
    rating: 4
  }))

  return (
    <div>
      <div className="article-display">
        <>
          {cardData.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              price={card.price}
              distance={card.distance}
              image={card.image}
              alt={card.name}
              favorite={card.favorite}
              article={card.article}
              rating={card.rating}
            />
          ))}
        </>
      </div>
    </div>

  );
};

export default topArticles;