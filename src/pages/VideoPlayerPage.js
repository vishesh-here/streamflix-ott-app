import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { getFilmById } from '../data/films';
import './VideoPlayerPage.css';

const VideoPlayerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const film = getFilmById(id);
  
  if (!film) {
    return (
      <div className="video-player-page">
        <div className="error-container">
          <h2>Movie not found</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleClosePlayer = () => {
    // Navigate back to the film details page
    navigate(`/film/${id}`);
  };

  return (
    <div className="video-player-page">
      <VideoPlayer
        videoUrl={film.videoUrl}
        title={film.title}
        onClose={handleClosePlayer}
      />
    </div>
  );
};

export default VideoPlayerPage;
