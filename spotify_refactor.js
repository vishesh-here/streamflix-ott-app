#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Spotify Design System Variables
const spotifyTheme = {
  colors: {
    // Primary Spotify Colors
    spotifyGreen: '#1DB954',
    spotifyGreenHover: '#1ED760',
    spotifyBlack: '#191414',
    spotifyDarkGray: '#121212',
    spotifyMediumGray: '#282828',
    spotifyLightGray: '#535353',
    spotifyWhite: '#FFFFFF',
    spotifyOffWhite: '#B3B3B3',
    
    // Additional UI Colors
    cardBackground: '#181818',
    hoverBackground: '#282828',
    borderColor: '#404040',
    textPrimary: '#FFFFFF',
    textSecondary: '#B3B3B3',
    textMuted: '#6A6A6A'
  },
  
  typography: {
    fontFamily: "'Spotify Mix', 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px'
  }
};

// Function to create CSS variables
function createCSSVariables() {
  return `
/* Spotify Theme CSS Variables */
:root {
  /* Colors */
  --spotify-green: ${spotifyTheme.colors.spotifyGreen};
  --spotify-green-hover: ${spotifyTheme.colors.spotifyGreenHover};
  --spotify-black: ${spotifyTheme.colors.spotifyBlack};
  --spotify-dark-gray: ${spotifyTheme.colors.spotifyDarkGray};
  --spotify-medium-gray: ${spotifyTheme.colors.spotifyMediumGray};
  --spotify-light-gray: ${spotifyTheme.colors.spotifyLightGray};
  --spotify-white: ${spotifyTheme.colors.spotifyWhite};
  --spotify-off-white: ${spotifyTheme.colors.spotifyOffWhite};
  
  /* UI Colors */
  --card-background: ${spotifyTheme.colors.cardBackground};
  --hover-background: ${spotifyTheme.colors.hoverBackground};
  --border-color: ${spotifyTheme.colors.borderColor};
  --text-primary: ${spotifyTheme.colors.textPrimary};
  --text-secondary: ${spotifyTheme.colors.textSecondary};
  --text-muted: ${spotifyTheme.colors.textMuted};
  
  /* Typography */
  --font-family: ${spotifyTheme.typography.fontFamily};
  --font-weight-light: ${spotifyTheme.typography.fontWeights.light};
  --font-weight-normal: ${spotifyTheme.typography.fontWeights.normal};
  --font-weight-medium: ${spotifyTheme.typography.fontWeights.medium};
  --font-weight-semibold: ${spotifyTheme.typography.fontWeights.semibold};
  --font-weight-bold: ${spotifyTheme.typography.fontWeights.bold};
  
  /* Spacing */
  --spacing-xs: ${spotifyTheme.spacing.xs};
  --spacing-sm: ${spotifyTheme.spacing.sm};
  --spacing-md: ${spotifyTheme.spacing.md};
  --spacing-lg: ${spotifyTheme.spacing.lg};
  --spacing-xl: ${spotifyTheme.spacing.xl};
  --spacing-xxl: ${spotifyTheme.spacing.xxl};
  
  /* Border Radius */
  --border-radius-sm: ${spotifyTheme.borderRadius.sm};
  --border-radius-md: ${spotifyTheme.borderRadius.md};
  --border-radius-lg: ${spotifyTheme.borderRadius.lg};
  --border-radius-xl: ${spotifyTheme.borderRadius.xl};
}
`;
}

// Updated App.css with Spotify theme
function createAppCSS() {
  return `${createCSSVariables()}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--spotify-black);
  color: var(--text-primary);
  line-height: 1.6;
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--spotify-black);
}

.main-content {
  flex: 1;
  background: linear-gradient(180deg, var(--spotify-dark-gray) 0%, var(--spotify-black) 100%);
  min-height: calc(100vh - 80px);
}

/* Global button styles */
button {
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--spotify-green);
  color: var(--spotify-black);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  font-weight: var(--font-weight-bold);
  text-transform: none;
  letter-spacing: 0.1em;
}

.btn-primary:hover {
  background-color: var(--spotify-green-hover);
  transform: scale(1.04);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  font-weight: var(--font-weight-medium);
}

.btn-secondary:hover {
  background-color: var(--hover-background);
  border-color: var(--text-primary);
}

/* Scrollbar styling - Spotify style */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--spotify-black);
}

::-webkit-scrollbar-thumb {
  background: var(--spotify-light-gray);
  border-radius: 6px;
  border: 2px solid var(--spotify-black);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

/* Loading animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading {
  animation: spin 1s linear infinite;
  color: var(--spotify-green);
}

/* Card-based layout foundation */
.card {
  background-color: var(--card-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  transition: all 0.2s ease;
}

.card:hover {
  background-color: var(--hover-background);
}

/* Typography classes */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-muted { color: var(--text-muted); }

.font-light { font-weight: var(--font-weight-light); }
.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }
`;
}

// Updated Header.css with Spotify theme
function createHeaderCSS() {
  return `
.header {
  background: var(--spotify-black);
  color: var(--text-primary);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(20px);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--spotify-green);
  letter-spacing: -0.02em;
}

.logo {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.8;
}

.nav {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: 0.95rem;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--text-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--spotify-green);
  border-radius: 1px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.user-name {
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  font-size: 0.9rem;
}

.logout-btn {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-xl);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: var(--hover-background);
  color: var(--text-primary);
  border-color: var(--text-primary);
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 var(--spacing-md);
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }
  
  .logo h1 {
    font-size: 1.5rem;
  }
  
  .nav {
    gap: var(--spacing-lg);
  }
  
  .user-section {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .user-name {
    font-size: 0.85rem;
  }
}
`;
}

// Updated FilmCard.css with Spotify theme
function createFilmCardCSS() {
  return `
.film-card {
  background: var(--card-background);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;
}

.film-card:hover {
  background: var(--hover-background);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

.film-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.film-poster {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: var(--spotify-medium-gray);
}

.film-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.film-card:hover .film-poster img {
  transform: scale(1.05);
}

.film-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.film-card:hover .film-overlay {
  opacity: 1;
}

.play-button {
  background: var(--spotify-green);
  color: var(--spotify-black);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.play-button:hover {
  background: var(--spotify-green-hover);
  transform: scale(1.1);
}

.film-info {
  padding: var(--spacing-md);
}

.film-title {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.film-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: var(--spacing-sm);
}

.film-duration {
  background: var(--spotify-medium-gray);
  color: var(--text-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-weight: var(--font-weight-medium);
  font-size: 0.8rem;
}

.film-genre {
  color: var(--spotify-green);
  font-weight: var(--font-weight-medium);
  font-size: 0.8rem;
}

/* Spotify-style hover effect for the entire card */
.film-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--spotify-green) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
  border-radius: var(--border-radius-md);
}

.film-card:hover::before {
  opacity: 0.05;
}

@media (max-width: 768px) {
  .film-poster {
    height: 250px;
  }
  
  .film-info {
    padding: var(--spacing-md);
  }
  
  .film-title {
    font-size: 0.95rem;
  }
  
  .play-button {
    width: 48px;
    height: 48px;
    font-size: 1rem;
  }
}
`;
}

// Function to update all CSS files
function updateCSSFiles() {
  console.log('🎨 Updating CSS files with Spotify theme...');
  
  // Update App.css
  fs.writeFileSync(path.join(__dirname, 'src/App.css'), createAppCSS());
  console.log('✅ Updated App.css');
  
  // Update Header.css
  fs.writeFileSync(path.join(__dirname, 'src/components/Header.css'), createHeaderCSS());
  console.log('✅ Updated Header.css');
  
  // Update FilmCard.css
  fs.writeFileSync(path.join(__dirname, 'src/components/FilmCard.css'), createFilmCardCSS());
  console.log('✅ Updated FilmCard.css');
  
  // Update other CSS files
  updateFilmGridCSS();
  updateHomePageCSS();
  updateAuthPagesCSS();
  updateFilmDetailsPageCSS();
  updateVideoPlayerCSS();
}

function updateFilmGridCSS() {
  const filmGridCSS = `
.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  max-width: 1400px;
  margin: 0 auto;
}

.grid-section {
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
  padding: 0 var(--spacing-xl);
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: var(--font-weight-normal);
  margin-bottom: var(--spacing-xl);
  padding: 0 var(--spacing-xl);
}

@media (max-width: 768px) {
  .film-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
  }
  
  .section-title {
    font-size: 1.3rem;
    padding: 0 var(--spacing-lg);
  }
  
  .section-subtitle {
    padding: 0 var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .film-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-md);
    padding: var(--spacing-md);
  }
}
`;
  
  fs.writeFileSync(path.join(__dirname, 'src/components/FilmGrid.css'), filmGridCSS);
  console.log('✅ Updated FilmGrid.css');
}

function updateHomePageCSS() {
  const homePageCSS = `
.home-page {
  background: var(--spotify-black);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, var(--spotify-dark-gray) 0%, var(--spotify-black) 100%);
  padding: var(--spacing-xxl) var(--spacing-xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.hero-title {
  color: var(--text-primary);
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: var(--font-weight-normal);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl) auto;
  line-height: 1.5;
}

.hero-cta {
  display: inline-flex;
  gap: var(--spacing-md);
}

.content-sections {
  padding: 0 var(--spacing-xl);
}

.welcome-message {
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  border: 1px solid var(--border-color);
}

.welcome-title {
  color: var(--spotify-green);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.welcome-text {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  
  .content-sections {
    padding: 0 var(--spacing-md);
  }
  
  .welcome-message {
    padding: var(--spacing-lg);
  }
}
`;
  
  fs.writeFileSync(path.join(__dirname, 'src/pages/HomePage.css'), homePageCSS);
  console.log('✅ Updated HomePage.css');
}

function updateAuthPagesCSS() {
  const authPagesCSS = `
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--spotify-black);
  padding: var(--spacing-lg);
}

.auth-container {
  background: var(--card-background);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xxl);
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--border-color);
}

.auth-title {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-label {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
}

.form-input {
  background: var(--spotify-medium-gray);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--spotify-green);
  background: var(--hover-background);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.auth-button {
  background: var(--spotify-green);
  color: var(--spotify-black);
  border: none;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-md);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: var(--spacing-md);
}

.auth-button:hover {
  background: var(--spotify-green-hover);
  transform: scale(1.02);
}

.auth-button:disabled {
  background: var(--spotify-light-gray);
  color: var(--text-muted);
  cursor: not-allowed;
  transform: none;
}

.auth-link {
  text-align: center;
  margin-top: var(--spacing-lg);
}

.auth-link a {
  color: var(--spotify-green);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.auth-link a:hover {
  color: var(--spotify-green-hover);
  text-decoration: underline;
}

.error-message {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid rgba(255, 59, 48, 0.3);
  color: #FF3B30;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 480px) {
  .auth-container {
    padding: var(--spacing-xl);
    margin: var(--spacing-md);
  }
  
  .auth-title {
    font-size: 1.7rem;
  }
}
`;
  
  fs.writeFileSync(path.join(__dirname, 'src/pages/AuthPages.css'), authPagesCSS);
  console.log('✅ Updated AuthPages.css');
}

function updateFilmDetailsPageCSS() {
  const filmDetailsCSS = `
.film-details-page {
  background: var(--spotify-black);
  min-height: 100vh;
  color: var(--text-primary);
}

.film-hero {
  position: relative;
  height: 60vh;
  background: linear-gradient(135deg, var(--spotify-dark-gray) 0%, var(--spotify-black) 100%);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.film-hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  filter: blur(2px);
}

.film-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, var(--spotify-black) 100%);
}

.film-hero-content {
  position: relative;
  z-index: 2;
  padding: var(--spacing-xxl);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-end;
}

.film-poster-large {
  width: 300px;
  height: 450px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}

.film-poster-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.film-info-large {
  flex: 1;
}

.film-title-large {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.film-meta-large {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.film-genre-large {
  color: var(--spotify-green);
  font-weight: var(--font-weight-medium);
}

.film-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.play-btn-large {
  background: var(--spotify-green);
  color: var(--spotify-black);
  border: none;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.play-btn-large:hover {
  background: var(--spotify-green-hover);
  transform: scale(1.04);
}

.film-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
}

.film-content {
  padding: var(--spacing-xxl);
  max-width: 1200px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: var(--spacing-xxl);
}

.section-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
}

.back-button {
  position: fixed;
  top: 100px;
  left: var(--spacing-xl);
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-primary);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: var(--hover-background);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .film-hero {
    height: 50vh;
  }
  
  .film-hero-content {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-xl) var(--spacing-lg);
  }
  
  .film-poster-large {
    width: 200px;
    height: 300px;
  }
  
  .film-title-large {
    font-size: 2rem;
  }
  
  .film-meta-large {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .film-content {
    padding: var(--spacing-xl) var(--spacing-lg);
  }
  
  .back-button {
    left: var(--spacing-lg);
  }
}
`;
  
  fs.writeFileSync(path.join(__dirname, 'src/pages/FilmDetailsPage.css'), filmDetailsCSS);
  console.log('✅ Updated FilmDetailsPage.css');
}

function updateVideoPlayerCSS() {
  const videoPlayerCSS = `
.video-player-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--spotify-black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-player {
  width: 100%;
  height: 100%;
  background: var(--spotify-black);
}

.video-player video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: var(--spacing-xl);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-player-container:hover .video-controls {
  opacity: 1;
}

.control-button {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.control-button:hover {
  background: var(--hover-background);
  color: var(--spotify-green);
}

.play-pause-btn {
  background: var(--spotify-green);
  color: var(--spotify-black);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.play-pause-btn:hover {
  background: var(--spotify-green-hover);
  transform: scale(1.1);
}

.progress-container {
  flex: 1;
  margin: 0 var(--spacing-md);
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--spotify-light-gray);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--spotify-green);
  border-radius: 2px;
  transition: width 0.1s ease;
}

.progress-bar:hover .progress-fill {
  background: var(--spotify-green-hover);
}

.time-display {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
  min-width: 80px;
  text-align: center;
}

.volume-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.volume-slider {
  width: 80px;
  height: 4px;
  background: var(--spotify-light-gray);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.volume-fill {
  height: 100%;
  background: var(--spotify-green);
  border-radius: 2px;
}

.close-button {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: rgba(0, 0, 0, 0.7);
  color: var(--text-primary);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.close-button:hover {
  background: var(--hover-background);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .video-controls {
    padding: var(--spacing-lg);
    flex-wrap: wrap;
  }
  
  .progress-container {
    order: -1;
    width: 100%;
    margin: 0 0 var(--spacing-md) 0;
  }
  
  .volume-container {
    display: none;
  }
  
  .time-display {
    min-width: 60px;
    font-size: 0.8rem;
  }
}
`;
  
  fs.writeFileSync(path.join(__dirname, 'src/components/VideoPlayer.css'), videoPlayerCSS);
  console.log('✅ Updated VideoPlayer.css');
}

// Run the refactoring
console.log('🚀 Starting Spotify theme refactoring...');
updateCSSFiles();
console.log('🎉 Spotify theme refactoring completed successfully!');
console.log('');
console.log('📋 Summary of changes:');
console.log('• Applied Spotify color palette (Green #1DB954, Black #191414, etc.)');
console.log('• Updated typography to use Spotify Mix font family');
console.log('• Implemented card-based layouts with hover effects');
console.log('• Added CSS variables for consistent theming');
console.log('• Updated all component styles to match Spotify design');
console.log('• Enhanced responsive design for mobile devices');
console.log('');
console.log('🎨 Key design improvements:');
console.log('• Dark theme with Spotify color scheme');
console.log('• Modern card-based UI components');
console.log('• Improved typography and spacing');
console.log('• Enhanced hover states and transitions');
console.log('• Better mobile responsiveness');
