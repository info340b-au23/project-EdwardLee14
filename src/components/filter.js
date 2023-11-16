import React from 'react';

const Filter = () => {
    return (
        <div className="search-and-filter">
            <div className="filter-button">
                <label htmlFor="sortDropdown">Sort By:</label>
                <select id="sortDropdown">
                    <option value="name">Name (A-Z)</option>
                    <option value="price">Price</option>
                    <option value="businessType">Business Type</option>
                    <option value="distance">Distance</option>
                </select>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
        </div>
    );
};

export default Filter;
