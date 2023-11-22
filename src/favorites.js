import React from 'react';
import Card from './components/card.js';

const Favorites = () => {
    return (
        <div>
            <h1>Favorites</h1>
            <div className="top-container">
                <div className="top-row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="top-row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Favorites;