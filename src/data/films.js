// Mock film data
export const films = [
  {
    id: 1,
    title: "The Adventure Begins",
    description: "An epic journey through uncharted territories where heroes discover their true potential.",
    thumbnail: "https://via.placeholder.com/300x450/FF6B6B/FFFFFF?text=Adventure+Begins",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "10:34",
    genre: "Adventure"
  },
  {
    id: 2,
    title: "Mystery of the Lost City",
    description: "A thrilling mystery that takes you deep into ancient secrets and hidden treasures.",
    thumbnail: "https://via.placeholder.com/300x450/4ECDC4/FFFFFF?text=Lost+City",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "11:43",
    genre: "Mystery"
  },
  {
    id: 3,
    title: "Space Odyssey 2024",
    description: "A futuristic tale of space exploration and the challenges that await humanity among the stars.",
    thumbnail: "https://via.placeholder.com/300x450/45B7D1/FFFFFF?text=Space+Odyssey",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "15:10",
    genre: "Sci-Fi"
  },
  {
    id: 4,
    title: "The Last Kingdom",
    description: "A medieval epic about honor, betrayal, and the fight for a kingdom's survival.",
    thumbnail: "https://via.placeholder.com/300x450/96CEB4/FFFFFF?text=Last+Kingdom",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "12:15",
    genre: "Drama"
  },
  {
    id: 5,
    title: "Ocean's Deep",
    description: "Dive into the mysterious depths of the ocean and discover creatures beyond imagination.",
    thumbnail: "https://via.placeholder.com/300x450/FFEAA7/FFFFFF?text=Ocean's+Deep",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "9:20",
    genre: "Documentary"
  },
  {
    id: 6,
    title: "Digital Revolution",
    description: "The story of how technology transformed our world and what the future holds.",
    thumbnail: "https://via.placeholder.com/300x450/DDA0DD/FFFFFF?text=Digital+Revolution",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "14:30",
    genre: "Documentary"
  }
];

// Helper function to get film by ID
export const getFilmById = (id) => {
  return films.find(film => film.id === parseInt(id));
};