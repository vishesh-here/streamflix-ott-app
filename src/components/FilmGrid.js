import React from 'react';
import FilmCard from './FilmCard';
import './FilmGrid.css';

const FilmGrid = ({ films, title = "Movies" }) => {
  return (
    <section className="film-grid-section">
      <h2 className="section-title">{title}</h2>
      <div className="film-grid">
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </section>
  );
};

export default FilmGrid;