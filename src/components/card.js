import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <a href="post.html">
                <img src="img/ice-store.png" alt="Product Image 1" />
                <p className="name">Sugar and Spoon</p>
                <p className="price">$$$</p>
                <p className="type">Type: Restaurant</p>
                <p className="distance">Distance: 2.5 miles</p>
            </a>
        </div>
    );
};

export default Card;
