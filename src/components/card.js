import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom';
import Article from './article';

const Card = ({ name, price, distance, image, alt, favorite, article }) => {
    const cardData = {
        name,
        price,
        distance,
        image,
        alt,
        favorite,
        article
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
            </div>
        </div>
    );
};

export default Card;