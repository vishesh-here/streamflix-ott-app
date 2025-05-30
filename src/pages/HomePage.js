import React from 'react';
import Header from '../components/Header';
import FilmGrid from '../components/FilmGrid';
import { films } from '../data/films';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Welcome to StreamFlix</h1>
            <p>Discover amazing movies and stream them instantly</p>
          </div>
        </div>
        <FilmGrid films={films} title="Featured Movies" />
      </main>
    </div>
  );
};

export default HomePage;