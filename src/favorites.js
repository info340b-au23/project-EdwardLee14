
import React, { useState } from 'react';
import Filter from './components/filter.js';
import Card from './components/card.js';
import photo from './img/ice.jpg';

const Favorites = () => {
    const favoriteData = [
        {
            id: 13,
            name: 'Coffee Haven',
            price: '$$$',
            distance: '1.2',
            image: photo,
            favorite: false,
            article: 'Great coffee spot!',
            rating: 4.5
        },
        {
            id: 14,
            name: 'Pizza Palace',
            price: '$',
            distance: '3.0',
            image: photo,
            favorite: false,
            article: 'Delicious pizzas!',
            rating: 4.2
        },
        {
            id: 15,
            name: 'Sushi Delight',
            price: '$$$',
            distance: '2.8',
            image: photo,
            favorite: true,
            article: 'Best sushi in town!',
            rating: 4.8
        },
        {
            id: 14,
            name: 'Pizza Palace',
            price: '$',
            distance: '3.0',
            image: photo,
            favorite: false,
            article: 'Delicious pizzas!',
            rating: 4.2
        }
    ];

    const [filteredCards, setFilteredCards] = useState(favoriteData);
    const [sortOption, setSortOption] = useState('name');

    const handleSearch = (searchTerm) => {
        const filtered = favoriteData.filter((card) =>
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
            } else if (selectedSort === 'rating') {
                const ratingA = parseFloat(a.rating);
                const ratingB = parseFloat(b.rating);
                return ratingB - ratingA;
            }
            return 0;
        });
        setFilteredCards(sortedCards);
    };

    return (
        <div>
            <div className="front-page-header">
                <h1><b>Your Favorites!</b></h1>
            </div>
            <Filter onSearch={handleSearch} onSort={handleSort} />
            <div className="article-display">
                {filteredCards.length === 0 ? (
                    <p id='no-results'>No results found.</p>
                ) : (
                    <>
                        {filteredCards.map((card) => (
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
                )}
            </div>
        </div>
    );
};

export default Favorites;
