import React, { useState } from 'react';

const FavoriteButton = (status) => {
    const [favorited, setFavorited] = useState(status);

    const updateFavorite = () => {
        setFavorited((currentStatus) => !currentStatus);
    }

    return (
        <div className="favorite-button">
            <button id="explore-more-button" onClick={updateFavorite}>
                {favorited ? 'Unfavorite This!' : 'Favorite This!'}
            </button>
        </div>
    );
};

export default FavoriteButton;
