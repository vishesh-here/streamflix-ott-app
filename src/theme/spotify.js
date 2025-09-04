// Spotify Theme Configuration
export const spotifyTheme = {
  colors: {
    // Primary Spotify colors
    spotifyGreen: '#1db954',
    spotifyGreenHover: '#1ed760',
    spotifyGreenDark: '#1aa34a',
    
    // Background colors
    black: '#000000',
    darkGray: '#121212',
    mediumGray: '#181818',
    lightGray: '#282828',
    cardGray: '#1a1a1a',
    
    // Text colors
    white: '#ffffff',
    lightText: '#b3b3b3',
    mutedText: '#a7a7a7',
    
    // Accent colors
    hover: '#1a1a1a',
    border: '#2a2a2a',
    error: '#e22134',
    warning: '#ffa500',
  },
  
  typography: {
    fontFamily: "'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

// CSS Custom Properties for easy usage
export const spotifyCSSVariables = `
  :root {
    --spotify-green: ${spotifyTheme.colors.spotifyGreen};
    --spotify-green-hover: ${spotifyTheme.colors.spotifyGreenHover};
    --spotify-green-dark: ${spotifyTheme.colors.spotifyGreenDark};
    --spotify-black: ${spotifyTheme.colors.black};
    --spotify-dark-gray: ${spotifyTheme.colors.darkGray};
    --spotify-medium-gray: ${spotifyTheme.colors.mediumGray};
    --spotify-light-gray: ${spotifyTheme.colors.lightGray};
    --spotify-card-gray: ${spotifyTheme.colors.cardGray};
    --spotify-white: ${spotifyTheme.colors.white};
    --spotify-light-text: ${spotifyTheme.colors.lightText};
    --spotify-muted-text: ${spotifyTheme.colors.mutedText};
    --spotify-hover: ${spotifyTheme.colors.hover};
    --spotify-border: ${spotifyTheme.colors.border};
    --spotify-error: ${spotifyTheme.colors.error};
    --spotify-font-family: ${spotifyTheme.typography.fontFamily};
    --spotify-transition: ${spotifyTheme.transitions.normal};
  }
`;
