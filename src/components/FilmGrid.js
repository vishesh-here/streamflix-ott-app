import React from 'react';
import FilmCard from './FilmCard';
import './FilmGrid.css';

const FilmGrid = ({ films, title = "Movies" }) => {
  return (
    <section className="film-grid-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <button className="show-all-btn">Show all</button>
      </div>
      <div className="film-grid">
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </section>
  );
};

export default FilmGrid;