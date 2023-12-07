import React from "react";
import styled from "styled-components";

// Styled components
const MeetupItem = styled.article`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #202020;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px 4px rgba(32, 32, 32, 0.5);
  }

  & > img {
    width: 100%;
    object-fit: cover;
  }

  & > section {
    padding: 0 16px;
  }
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: flex-end;

  & > button {
    padding: 8px 16px;
    border: none;
    background-color: #b1b1f9;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #707cc8;
    }
  }
`;

function MeetupCard({ meetup }) {
  return (
    <MeetupItem>
      <img src={meetup.image} alt={meetup.title} />
      <section>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </section>
      <CardFooter>
        <button>Add to favorites</button>
      </CardFooter>
    </MeetupItem>
  );
}

export default MeetupCard;
