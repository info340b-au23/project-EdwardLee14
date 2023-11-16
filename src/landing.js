import React from 'react';
import Navbar from './components/navbar.js';
import TopArticles from './components/topArticles.js';
import Filter from './components/filter.js';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Filter />
            <TopArticles />

        </div>
    );
}

export default LandingPage;

