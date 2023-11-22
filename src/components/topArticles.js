import React from 'react'
import Card from './card';

const topArticles = () => {
  return (
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

  );
};

export default topArticles;