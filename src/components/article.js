import React from 'react';
import '../css/styles.css';
import FavoriteButton from './fav-button';
import StarButton from './star-buttons';
import { useLocation } from 'react-router-dom';

const Article = () => {
    const location = useLocation();
    const cardData = location.state;

    console.log(cardData);

    return (
        <div>
            <div id="post-title">{cardData.name}</div>

            <div className="post-container">
                <div className="left-half">
                    <div className="image-container">
                        <img src={cardData.image} alt={cardData.alt} />
                    </div>
                    <div className="label">
                        <p className="name">Name: {cardData.name}</p>
                        <p className="price">Price: {cardData.price}</p>
                        <p className="distance">Distance: {cardData.distance} miles</p>
                    </div>
                    <FavoriteButton status={cardData.favorite} />
                </div>

                <div className="right-half">
                    <div className="text-box">
                        {/* <p>Welcome to our family-owned small business, located at the heart of the community. We're dedicated to providing quality products and exceptional service to our valued customers.</p>
                        <p>Our store offers a diverse range of locally sourced, handmade products. We take pride in supporting local artisans and businesses, ensuring unique and sustainable options for our customers.</p>
                        <p>Our friendly team is here to create a warm and welcoming atmosphere for your visit. Whether you're searching for a special gift or simply exploring our store, we're ready to assist you.</p>
                        <p>We're committed to giving back to the community by participating in local events and charity initiatives. Your support enables us to make a positive impact on our neighborhood.</p> */}
                        {cardData.article}
                    </div>
                    <StarButton />
                </div>
            </div>
        </div>
    );
};

export default Article;