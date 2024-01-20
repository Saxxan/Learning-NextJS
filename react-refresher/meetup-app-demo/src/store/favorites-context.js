import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  /**
   * Function to add a meetup to the user favorites.
   * @param {*} meetup
   */
  function addFavoriteMeetupHandler(meetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(meetup);
    });
  }

  /**
   * Function to remove a meetup from the user favorites.
   * @param {*} meetupId
   */
  function removeFavoriteMeetupHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  /**
   * Function to check if a meetup is in the user favorites.
   * @param {*} meetupId
   * @returns
   */
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteMeetupHandler,
    removeFavorite: removeFavoriteMeetupHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextProvider };
