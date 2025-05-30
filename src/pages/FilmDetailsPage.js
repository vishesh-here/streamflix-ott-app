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
          <h2>Movie not found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
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
            <h1 className="film-title">{film.title}</h1>
            <div className="film-meta">
              <span className="film-duration">{film.duration}</span>
              <span className="film-genre">{film.genre}</span>
            </div>
            <p className="film-description">{film.description}</p>
            
            <div className="film-actions">
              <button className="play-button" onClick={handlePlayClick}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play Movie
              </button>
              <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
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