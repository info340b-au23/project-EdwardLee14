import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';
import { useNavigate } from 'react-router-dom';
import photo from '../img/ice.jpg';

const Card = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/article.js');
    };

    return (
        <Link to="/article" className="card" onClick={handleClick}>
            <img src={photo} alt="A restaurant" />
            <div>
                <p className="name">Sugar and Spoon</p>
                <p className="price">$$$</p>
                <p className="type">Type: Restaurant</p>
                <p className="distance">Distance: 2.5 miles</p>
            </div>
        </Link>
    );
};

export default Card;
