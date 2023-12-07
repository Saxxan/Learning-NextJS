import React from "react";
import styled from "styled-components";
import MeetupCard from "../components/meetup/MeetupCard";

// Constants
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

// Styled components
const AllMeetupsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;

function AllMeetups() {
  return (
    <section>
      <h2>All Meetups</h2>
      <AllMeetupsContainer>
        {DUMMY_DATA.map((meetup) => (
          <MeetupCard key={meetup.id} meetup={meetup} />
        ))}
      </AllMeetupsContainer>
    </section>
  );
}

export default AllMeetups;
