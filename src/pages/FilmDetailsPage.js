import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import { getFilmById } from '../data/films';
import './FilmDetailsPage.css';

const FilmDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPlayer, setShowPlayer] = useState(false);
  
  const film = getFilmById(id);
  
  if (!film) {
    return (
      <div className="film-details-page">
        <Header />
        <div className="error-container">
          <div className="error-content">
            <h2>Movie not found</h2>
            <p>The movie you're looking for doesn't exist or has been removed.</p>
            <button onClick={() => navigate('/')} className="back-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"/>
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <div className="film-details-page">
      <Header />
      
      <div className="film-hero">
        <div className="film-hero-background">
          <img src={film.thumbnail} alt={film.title} />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="film-hero-content">
          <div className="film-info">
            <div className="breadcrumb">
              <button onClick={() => navigate('/')} className="breadcrumb-link">
                Home
              </button>
              <span className="breadcrumb-separator">•</span>
              <span className="breadcrumb-current">{film.title}</span>
            </div>
            
            <h1 className="film-title">{film.title}</h1>
            
            <div className="film-meta">
              <span className="film-duration">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {film.duration}
              </span>
              <span className="film-genre">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {film.genre}
              </span>
              <span className="film-rating">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                8.5/10
              </span>
            </div>
            
            <p className="film-description">{film.description}</p>
            
            <div className="film-actions">
              <button className="play-button primary" onClick={handlePlayClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play Movie
              </button>
              
              <button className="action-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Add to Favorites
              </button>
              
              <button className="action-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showPlayer && (
        <VideoPlayer
          videoUrl={film.videoUrl}
          title={film.title}
          onClose={handleClosePlayer}
        />
      )}
    </div>
  );
};

export default FilmDetailsPage;