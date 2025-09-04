import React from 'react';
import Header from '../components/Header';
import FilmGrid from '../components/FilmGrid';
import { films } from '../data/films';
import './HomePage.css';

const HomePage = () => {
  // Create different sections like Spotify
  const featuredFilms = films.slice(0, 6);
  const recentlyAdded = films.slice(6, 12);
  const popularMovies = films.slice(12, 18);
  const actionMovies = films.filter(film => film.genre === 'Action').slice(0, 6);
  const dramaMovies = films.filter(film => film.genre === 'Drama').slice(0, 6);

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Good evening</h1>
            <p>What do you want to watch today?</p>
          </div>
        </div>
        
        <div className="content-sections">
          <FilmGrid films={featuredFilms} title="Featured Movies" />
          <FilmGrid films={recentlyAdded} title="Recently Added" />
          <FilmGrid films={popularMovies} title="Popular Movies" />
          {actionMovies.length > 0 && (
            <FilmGrid films={actionMovies} title="Action Movies" />
          )}
          {dramaMovies.length > 0 && (
            <FilmGrid films={dramaMovies} title="Drama Movies" />
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;