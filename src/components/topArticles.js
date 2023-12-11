import React from 'react';
import Card from './card'; // Make sure to adjust the import path based on your actual file structure
import aladdin from '../img/aladdins.jpeg';

const TopArticles = () => {
  const cardData = [
    {
      id: 1,
      name: 'Aladdins',
      price: '$',
      distance: '0.1',
      image: aladdin,
      article: "Since our establishment in 1993, Aladdin Gyro-Cery has been renowned as one of the best fast-casual Mediterranean, Greek, and Middle Eastern restaurants in the University District, the Seattle area, and across the country. \n Whether you're craving a hearty lamb and beef gyro, a grilled chicken shawarma or our famous Aladdin Fries to fill your belly after a late night out, or you want a healthy vegan lunch, we’ve got you covered with the many satisfying options on our all-halal menu. \n We are known for providing the best 'bang for your buck' when you want to get a large, filling, delicious meal at the best price possible. We aim to please with our unique flavors, quality, quantity, and price, so you never have any regrets. Come give us a try or order online, we know you’ll love our tasty food and great service!",
      rating: 4,
      favorite: false,
    },

    {
      id: 2,
      name: 'Sizzle and Crunch',
      price: '$$',
      distance: '0.3',
      image: aladdin,
      article: 'Made-to-order Vietnamese meals, from sandwiches to rice bowls, in a modern counter-serve setup.',
      rating: 5,
      favorite: true,
    },
    {
      id: 3,
      name: 'Example Restaurant 3',
      price: '$$$',
      distance: '1.0',
      image: aladdin, 
      article: 'Yet another article',
      rating: 5,
      favorite: false,
    },
  ];

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

export default TopArticles;
