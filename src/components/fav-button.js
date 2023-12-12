import React, { useState } from 'react';
import { ref, set as firebaseSet, getDatabase, child, get } from 'firebase/database';
import { auth } from '../index';

const FavoriteButton = ({ articleId }) => {
    const [username, setUsername] = useState(null);
    const [favorited, setFavorited] = useState(false);
    const db = getDatabase();
    const user = auth.currentUser.uid;
    console.log(auth.currentUser);

    const userFavoriteRef = ref(db, `userFavorites/${user}/favorites/${articleId}`);

    get(userFavoriteRef).then((snapshot) => {
        if (snapshot.exists()) {
            setFavorited(true);
        }
    }).catch((error) => {
        console.error('Error checking favorite status:', error);
    });

    const updateFavorite = () => {
        setFavorited((currentStatus) => !currentStatus);

        if (favorited) {

            firebaseSet(userFavoriteRef, null)
                .then(() => {
                    console.log(`Article ${articleId} removed from favorites for user ${user}`);
                })
                .catch((error) => {
                    console.error('Error removing favorite:', error);
                });
        } else {

            firebaseSet(userFavoriteRef, true)
                .then(() => {
                    console.log(`Article ${articleId} added to favorites for user ${user}`);
                })
                .catch((error) => {
                    console.error('Error adding to favorites:', error);
                });
        }
    };

    return (
        <button id="favorite-button" onClick={updateFavorite}>
            {favorited ? 'Unfavorite This' : 'Favorite This!'}
        </button>
    );
};

export default FavoriteButton;
