import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, price, distance, image, alt }) => {
    const navigate = useNavigate();

    const cardData = {
        name,
        price,
        distance,
        image,
        alt,
    };

    const handleClick = () => {
        navigate('/article.js');
    };

    return (
        <Link to="/article" className="card no-link-style" onClick={handleClick}>
            <img src={image} alt={alt} />
            <div>
                <p className="name">Name: {cardData.name}</p>
                <p className="price">Price: {cardData.price}</p>
                <p className="distance">Distance: {cardData.distance} miles</p>
            </div>
        </Link>
    );
};

export default Card;
