# StreamFlix - OTT Streaming App

A simple Netflix-like streaming application built with React.js that allows users to authenticate and stream movies.

## Features

- **User Authentication**: Login and Registration system
- **Protected Routes**: Access control for authenticated users
- **Movie Catalog**: Browse available movies in a grid layout
- **Movie Details**: View detailed information about each movie
- **Video Streaming**: Full-screen video player with basic controls
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features
- **State Management**: React Context API
- **Video Player**: HTML5 Video Element
- **Authentication**: Local Storage (for demo purposes)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vishesh-here/streamflix-ott-app.git
cd streamflix-ott-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Demo Credentials

For testing purposes, you can use these demo credentials:

- **Email**: john@example.com
- **Password**: password123

Or create a new account using the registration form.

## Live Demo

🚀 **[View Live Demo](https://streamflix-ott-app.netlify.app)** (Deploy to see this link)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── FilmCard.js     # Individual movie card
│   ├── FilmGrid.js     # Grid layout for movies
│   ├── Header.js       # Navigation header
│   ├── ProtectedRoute.js # Route protection
│   └── VideoPlayer.js  # Video streaming component
├── pages/              # Page components
│   ├── HomePage.js     # Main dashboard
│   ├── LoginPage.js    # User login
│   ├── RegisterPage.js # User registration
│   └── FilmDetailsPage.js # Movie details
├── context/            # React Context
│   └── AuthContext.js  # Authentication state
├── data/               # Mock data
│   ├── films.js        # Movie catalog
│   └── users.js        # User data
└── App.js              # Main application component
```

## Key Features Implementation

### Authentication Flow
1. Users must login/register to access the app
2. Authentication state is managed via React Context
3. User sessions persist using localStorage
4. Protected routes redirect unauthenticated users to login

### Movie Streaming
1. Browse movies on the homepage
2. Click on a movie to view details
3. Click "Play" to start streaming in full-screen mode
4. Video player includes basic controls (play/pause, seek, close)

### User Experience
- Responsive design for all screen sizes
- Smooth animations and transitions
- Loading states and error handling
- Intuitive navigation and user interface

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner

## Deployment

### Deploy to Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically

## Future Enhancements

- Backend integration with real authentication
- User profiles and preferences
- Movie search and filtering
- Watchlist functionality
- Video quality selection
- Subtitle support
- Social features (ratings, reviews)

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes and demonstration only.

## Contact

Vishesh Soni - [@vishesh-here](https://github.com/vishesh-here)

Project Link: [https://github.com/vishesh-here/streamflix-ott-app](https://github.com/vishesh-here/streamflix-ott-app)