import React from 'react'
import Filter from './components/filter';
import TopArticles from './components/topArticles';

const Home = () => {
    return (
        <div>
            <div className="front-page-header">
                <h1>Business Buddies</h1>
            </div>
            <section id="about">
                <div className="about-div">
                    <h2>Why Small Businesses Matter</h2>
                    <p>Small businesses are the backbone of the American economy. They create jobs, foster innovation, and
                        contribute to the vibrancy of our communities.</p>
                    <ul>
                        <li>Small businesses employ nearly half of all Americans.</li>
                        <li>Small businesses create two-thirds of all new jobs in the United States.</li>
                        <li>Small businesses are responsible for over half of all innovations in the United States.</li>
                    </ul>
                    <p>Despite their importance, small businesses have been struggling in recent years. The COVID-19 pandemic
                        has had a devastating impact on many small businesses, and they continue to face challenges from rising
                        costs, supply chain disruptions, and labor shortages.</p>
                    <p>It is more important than ever to support small businesses. When you shop at a small business, you are
                        not just buying a product or service, you are investing in your community.</p>
                </div>
            </section>
            <Filter />
            <TopArticles />
        </div>
    )
}

export default Home;