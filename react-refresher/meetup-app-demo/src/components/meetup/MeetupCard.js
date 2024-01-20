import React, { useContext } from "react";

// UI Components
import Card from "../ui/Card";
import { CardFooter } from "../ui/Wrapper";

// Context
import { FavoritesContext } from "../../store/favorites-context";

function MeetupCard({ meetup }) {
  const favoritesContext = useContext(FavoritesContext);

  const isMeetupFavorite = favoritesContext.itemIsFavorite(meetup.id);

  /**
   * Function to toggle the state of a meetup in the favorites list.
   */
  function toggleFavoritesState() {
    if (isMeetupFavorite) {
      favoritesContext.removeFavorite(meetup.id);
    } else {
      favoritesContext.addFavorite(meetup);
    }
  }

  return (
    <Card>
      <img src={meetup.image} alt={meetup.title} />
      <section>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </section>
      <CardFooter>
        <button
          onClick={toggleFavoritesState}
          className={isMeetupFavorite ? "favorite" : ""}
        >
          {isMeetupFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </CardFooter>
    </Card>
  );
}

export default MeetupCard;
