import { useState } from 'react';
import { toast } from 'react-hot-toast';

// Custom hook for persisting state to localStorage
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Define the shape of a movie object for storage
interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
}

const FAVORITES_KEY = 'favoriteMovies';

// Helper to get favorites from local storage
export const getFavorites = (): Movie[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const favorites = window.localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error parsing favorites from local storage:', error);
    return [];
  }
};

// Helper to save favorites to local storage
const saveFavorites = (favorites: Movie[]) => {
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites to local storage:', error);
  }
};

// Add a movie to favorites
export const addFavorite = (movie: Movie) => {
  const favorites = getFavorites();
  if (!favorites.some((fav) => fav.id === movie.id)) {
    const newFavorites = [...favorites, movie];
    saveFavorites(newFavorites);
    toast.success(`${movie.title} added to favorites!`);
  } else {
    toast.error(`${movie.title} is already in favorites.`);
  }
};

// Remove a movie from favorites
export const removeFavorite = (movieId: number) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((movie) => movie.id !== movieId);
  saveFavorites(newFavorites);
  toast.success('Removed from favorites!');
};

// Check if a movie is a favorite
export const isFavorite = (movieId: number): boolean => {
  const favorites = getFavorites();
  return favorites.some((movie) => movie.id === movieId);
};
