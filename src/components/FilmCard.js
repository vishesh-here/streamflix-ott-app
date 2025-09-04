import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';

const FilmCard = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="spotify-film-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/film/${film.id}`} className="film-link">
        <div className="film-poster-container">
          <div className={`film-poster ${imageLoaded ? 'loaded' : 'loading'}`}>
            <img 
              src={film.thumbnail} 
              alt={film.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450/282828/b3b3b3?text=No+Image';
                setImageLoaded(true);
              }}
            />
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="image-skeleton">
                <div className="skeleton-shimmer"></div>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className={`film-overlay ${isHovered ? 'visible' : ''}`}>
              <div className="overlay-gradient"></div>
              
              {/* Play button */}
              <div className="play-button-container">
                <button className="spotify-play-button" aria-label={`Play ${film.title}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              
              {/* Action buttons */}
              <div className="action-buttons">
                <button className="action-btn" aria-label="Add to favorites" title="Add to favorites">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                
                <button className="action-btn" aria-label="More options" title="More options">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="film-info">
          <h3 className="film-title" title={film.title}>
            {film.title}
          </h3>
          
          <div className="film-meta">
            <span className="film-year">{film.year || '2024'}</span>
            <span className="meta-separator">•</span>
            <span className="film-duration">{film.duration}</span>
          </div>
          
          <div className="film-genre">
            <span className="genre-tag">{film.genre}</span>
          </div>
          
          {film.rating && (
            <div className="film-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill={i < Math.floor(film.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>
              <span className="rating-text">{film.rating}/5</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;