import React, { useState } from 'react';

const FavoriteButton = () => {
    const [favorited, setFavorited] = useState(false);

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
