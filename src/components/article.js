import React from 'react';
import './Styles/styles.css'; 

const SmallBusiness = () => {
  return (
    <div>
      <header>
        <ul className="navbar">
          <li className="nav-item"><a href="login.html">Login</a></li>
          <li className="nav-item"><a href="favorites.html">Favorites</a></li>
          <li className="nav-item"><a href="submission.html">Upload</a></li>
          <li className="nav-item"><a href="articles.html">Articles</a></li>
          <li className="nav-item"><a href="index.html">Home</a></li>
        </ul>
      </header>
      <div id="post-title">Sugar and Spoon</div>

      <div className="post-container">
        <div className="left-half">
          <div className="image-container">
            <img src="img/restaurant.jpg" alt="Image of our small business store" />
          </div>
          <div className="label">
            <p className="name">Name: Sally's Small Business</p>
            <p className="price">Price: $$$</p>
            <p className="type">Type: Restaurant</p>
            <p className="distance">Distance: 2.5 miles</p>
          </div>
          <div className="favorite-button">
            <button id="explore-more-button">Favorite This!</button>
          </div>
        </div>

        <div className="right-half">
          <div className="text-box">
            <p>Welcome to our family-owned small business, located at the heart of the community. We're dedicated to providing quality products and exceptional service to our valued customers.</p>
            <p>Our store offers a diverse range of locally sourced, handmade products. We take pride in supporting local artisans and businesses, ensuring unique and sustainable options for our customers.</p>
            <p>Our friendly team is here to create a warm and welcoming atmosphere for your visit. Whether you're searching for a special gift or simply exploring our store, we're ready to assist you.</p>
            <p>We're committed to giving back to the community by participating in local events and charity initiatives. Your support enables us to make a positive impact on our neighborhood.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBusiness;
