import React from 'react';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, price, distance, image, alt, favorite, article, rating }) => {
    const cardData = {
        name,
        price,
        distance,
        image,
        alt,
        favorite,
        article,
        rating
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article', { state: cardData });
    };

    return (
        <div className="card no-link-style" onClick={handleClick}>
            <img src={image} alt={alt} />
            <div>
                <p className="name">Name: {cardData.name}</p>
                <p className="price">Price: {cardData.price}</p>
                <p className="distance">Distance: {cardData.distance} miles</p>
                <p className="rating">Rating: {cardData.rating}/5</p>
            </div>
        </div>
    );
};

export default Card;