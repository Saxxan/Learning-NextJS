import React from "react";

// UI Components
import Card from "../ui/Card";
import { CardFooter } from "../ui/Wrapper";

function MeetupCard({ meetup }) {
  return (
    <Card>
      <img src={meetup.image} alt={meetup.title} />
      <section>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </section>
      <CardFooter>
        <button>Add to favorites</button>
      </CardFooter>
    </Card>
  );
}

export default MeetupCard;
