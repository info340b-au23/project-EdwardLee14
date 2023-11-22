import React from 'react';
import Navbar from './components/navbar.js';
import Filter from './components/filter.js';
import Card from './components/card.js';

const Articles = () => {
    return (
        <div>
            <Filter />
            <div className="article-display">
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="card-row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Articles;
