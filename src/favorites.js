// Favorites.js
import React, { useState, useEffect } from 'react';
import { ref, getDatabase, get } from 'firebase/database';
import { auth } from './index';
import Filter from './components/filter.js';
import Card from './components/card.js';

const Favorites = () => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [sortOption, setSortOption] = useState('name');
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserUid(user.uid);
      fetchUserFavorites(user.uid);
    }
  }, []);

  const fetchUserFavorites = async (uid) => {
    const db = getDatabase();
    const userFavoritesRef = ref(db, `userFavorites/${uid}/favorites`);

    try {
      const snapshot = await get(userFavoritesRef);
      if (snapshot.exists()) {
        const businessNames = Object.keys(snapshot.val());
        const businessDetailsPromises = businessNames.map((businessName) => {
          const businessDetailsRef = ref(db, `businessList/${businessName}`);
          return get(businessDetailsRef);
        });

        const businessDetailsSnapshots = await Promise.all(businessDetailsPromises);
        const businessDetails = businessDetailsSnapshots.map((snapshot) => snapshot.val());
        setFavoriteData(businessDetails);
        setFilteredCards(businessDetails);
      }
    } catch (error) {
      console.error('Error fetching user favorites:', error);
    }
  };

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
        return a.business.localeCompare(b.business);
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
      {userUid ? ( // Conditionally render content based on user authentication
        <>
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
                  card && (
                    <Card
                      key={card.id}
                      business={card.business}
                      price={card.price}
                      distance={card.distance}
                      image={card.image}
                      alt={card.business}
                      favorite={card.favorite}
                      article={card.article}
                      rating={card.rating}
                      reviews={card.reviews}
                    />
                  )
                ))}
              </>
            )}
          </div>
        </>
      ) : (
        <p id='sign-in-message'>Sign in to save favorites!</p>
      )}
    </div>
  );
};

export default Favorites;
