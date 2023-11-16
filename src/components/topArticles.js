import React from 'react'
import Card from './card';
import { BrowserRouter as Router } from 'react-router-dom';

const topArticles = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default topArticles;