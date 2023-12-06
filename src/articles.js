import React, { useState, useEffect } from 'react';
import Filter from './components/filter.js';
import Card from './components/card.js';
import { getDatabase, ref, get } from 'firebase/database';

const Articles = () => {
    const [cardData, setCardData] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [sortOption, setSortOption] = useState('name');

    useEffect(() => {

        const fetchData = async () => {
            const db = getDatabase();
            const businessListRef = ref(db, 'businessList');

            try {
                const snapshot = await get(businessListRef);
                const businessData = [];

                snapshot.forEach((childSnapshot) => {
                    const business = childSnapshot.val();

                    businessData.push({
                        id: business.business,
                        name: business.business,
                        price: business.price,
                        distance: business.distance,
                        image: business.image,
                        favorite: business.favorite,
                        article: business.article,
                        rating: business.rating,
                    });
                });

                setCardData(businessData);
                setFilteredCards(businessData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = cardData.filter((card) =>
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
                <h1><b>All Articles</b></h1>
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

export default Articles;
