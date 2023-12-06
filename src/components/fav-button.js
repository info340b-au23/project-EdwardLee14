import React, { useState } from 'react';

const FavoriteButton = (status) => {
    const [favorited, setFavorited] = useState(status);

    const updateFavorite = () => {
        setFavorited((currentStatus) => !currentStatus);
    }

    return (
        <button id="favorite-button" onClick={updateFavorite}>
            {favorited ? 'Favorite This!' : 'Unfavorite This'}
        </button>
    );
};

export default FavoriteButton;
