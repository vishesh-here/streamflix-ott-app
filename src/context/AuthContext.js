import React, { createContext, useContext, useState, useEffect } from 'react';
import { validateUser, registerUser } from '../data/users';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('ottUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const validUser = validateUser(email, password);
    if (validUser) {
      const userWithoutPassword = {
        id: validUser.id,
        name: validUser.name,
        email: validUser.email
      };
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('ottUser', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password' };
  };

  const register = (name, email, password) => {
    const newUser = registerUser(name, email, password);
    if (newUser) {
      const userWithoutPassword = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      };
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('ottUser', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    return { success: false, message: 'User with this email already exists' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('ottUser');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};