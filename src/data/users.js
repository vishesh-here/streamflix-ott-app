// Mock user data for authentication
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456"
  }
];

// Helper function to validate user credentials
export const validateUser = (email, password) => {
  return users.find(user => user.email === email && user.password === password);
};

// Helper function to check if user exists (for registration)
export const userExists = (email) => {
  return users.some(user => user.email === email);
};

// Helper function to register new user
export const registerUser = (name, email, password) => {
  if (userExists(email)) {
    return null; // User already exists
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password
  };
  
  users.push(newUser);
  return newUser;
};