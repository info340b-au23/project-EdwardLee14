import React, { useState } from 'react';

const Filter = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-and-filter">
            <div className="filter-button">
                <label htmlFor="sortDropdown">Sort By: </label>
                <select id="sortDropdown" aria-label="Sort By">
                    <option value="name">Name (A-Z)</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="distance">Distance (Low to High)</option>
                </select>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search by Name..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="search-button">
                    <button type="button" aria-label="Search Button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
