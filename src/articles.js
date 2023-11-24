import React, { useState } from 'react';
import Filter from './components/filter.js';
import Card from './components/card.js';
import photo from './img/ice.jpg';

const Articles = () => {
    const cardData = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: `Sugar and Spoon`,
        price: '$$',
        distance: '2.5',
        image: photo
    }));
    const [filteredCards, setFilteredCards] = useState(cardData);

    const handleSearch = (searchTerm) => {
        const filtered = cardData.filter((card) =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    return (
        <div>
            <Filter onSearch={handleSearch} />
            <div className="article-display">
                {Array.from({ length: Math.ceil(filteredCards.length / 3) }, (_, rowIndex) => (
                    <div key={rowIndex} className="card-row">
                        {filteredCards.slice(rowIndex * 3, rowIndex * 3 + 3).map((card) => (
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

export default Articles;
