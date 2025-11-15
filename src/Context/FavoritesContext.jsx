import React, { createContext, useState } from "react";
export const FavoritesContext = createContext();

export  function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
