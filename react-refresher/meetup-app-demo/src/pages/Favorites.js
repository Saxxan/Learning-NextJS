import React, { useContext } from "react";

// Context
import { FavoritesContext } from "../store/favorites-context";

// Components
import MeetupCard from "../components/meetup/MeetupCard";
import { AllMeetupsContainer } from "./AllMeetups";

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You got no favorites yet.</p>;
  } else {
    content = (
      <AllMeetupsContainer>
        {favoritesContext.favorites.map((meetup) => (
          <MeetupCard key={meetup.id} meetup={meetup} />
        ))}
      </AllMeetupsContainer>
    );
  }

  return (
    <section>
      <h2>Favorites Meetups</h2>
      {content}
    </section>
  );
}

export default Favorites;
