import React from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <Link to={`/film/${film.id}`} className="film-link">
        <div className="film-poster">
          <img 
            src={film.thumbnail} 
            alt={film.title}
            loading="lazy"
          />
          <div className="film-overlay">
            <div className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="film-info">
          <h3 className="film-title">{film.title}</h3>
          <div className="film-meta">
            <span className="film-duration">{film.duration}</span>
            <span className="film-genre">{film.genre}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;