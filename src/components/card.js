import React from 'react';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ business, price, distance, image, alt, favorite, article, rating, reviews }) => {
    const cardData = {
        business,
        price,
        distance,
        image,
        alt,
        favorite,
        article,
        rating,
        reviews
    };

    const averageRating = (cardData.rating / cardData.reviews).toFixed(1);;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article', { state: cardData });
    };

    return (
        <div className="card no-link-style" onClick={handleClick}>
            <img src={image} alt={alt} />
            <div>
                <p className="name">Name: {cardData.business}</p>
                <p className="price">Price: {cardData.price}</p>
                <p className="distance">Distance: {cardData.distance} miles</p>
                <p className="rating">Rating: {averageRating}/5</p>
            </div>
        </div>
    );
};

export default Card;