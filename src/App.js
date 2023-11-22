import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './articles.js';
import Login from './login.js';
import Upload from './upload.js';
import Favorites from './favorites.js';
import Home from './home.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Article from './components/article.js';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/article" element={<Article />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
