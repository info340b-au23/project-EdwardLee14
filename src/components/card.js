import React from 'react';
import '../css/styles.css';
import { useNavigate } from "react-router-dom";

const Card = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate();
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src="img/.ice-store.png.icloud" alt="Product Image 1" />
            <p className="name">Sugar and Spoon</p>
            <p className="price">$$$</p>
            <p className="type">Type: Restaurant</p>
            <p className="distance">Distance: 2.5 miles</p>
        </div>
    );
};

export default Card;
