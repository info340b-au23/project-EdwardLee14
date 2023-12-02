// articles.js
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
        image: photo,
        favorite: true,
        article: "this is a demo"
    }));

    const [filteredCards, setFilteredCards] = useState(cardData);
    const [sortOption, setSortOption] = useState('name');

    const handleSearch = (searchTerm) => {
        const filtered = filteredCards.filter((card) =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    const handleSort = (selectedSort) => {
        setSortOption(selectedSort);
        const sortedCards = [...filteredCards].sort((a, b) => {
            if (selectedSort === 'name') {
                return a.name.localeCompare(b.name);
            } else if (selectedSort === 'price') {
                const countA = (a.price.match(/\$/g) || []).length;
                const countB = (b.price.match(/\$/g) || []).length;
                return countA - countB;
            } else if (selectedSort === 'distance') {
                const distanceA = parseFloat(a.distance);
                const distanceB = parseFloat(b.distance);
                return distanceA - distanceB;
            }
            return 0;
        });
        setFilteredCards(sortedCards);
    };

    return (
        <div>
            <Filter onSearch={handleSearch} onSort={handleSort} />
            <div className="article-display">
                {filteredCards.length === 0 ? (
                    <p id='no-results'>No results found.</p>
                ) : (
                    Array.from({ length: Math.ceil(filteredCards.length / 3) }, (_, rowIndex) => (
                        <div key={rowIndex} className="card-row">
                            {filteredCards.slice(rowIndex * 3, rowIndex * 3 + 3).map((card) => (
                                <Card
                                    key={card.id}
                                    name={card.name}
                                    price={card.price}
                                    distance={card.distance}
                                    image={card.image}
                                    alt={card.name}
                                    favorite={card.favorite}
                                    article={card.article}
                                />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Articles;
