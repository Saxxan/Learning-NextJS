import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MeetupCard from "../components/meetup/MeetupCard";

// API
import { getMeetups } from "../api/api";

// Styled components
const AllMeetupsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  .ld-ripple {
    position: relative;
    width: 80px;
    height: 80px;
  }

  .ld-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ld-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ld-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes ld-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }

    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }

    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  /**
   * Effect hook to get all the meetups from the backend.
   */
  useEffect(() => {
    getMeetups().then((data) => {
      const meetupsArray = [];

      for (const key in data) {
        meetupsArray.push({
          id: key,
          ...data[key],
        });
      }
      setIsLoading(false);
      setMeetups(meetupsArray);
    });
  }, []);

  return (
    <section>
      <h2>All Meetups</h2>
      <AllMeetupsContainer>
        {isLoading ? (
          <LoadingContainer>
            <div className="ld-ripple">
              <div></div>
              <div></div>
            </div>
          </LoadingContainer>
        ) : (
          meetups.map((meetup) => (
            <MeetupCard key={meetup.id} meetup={meetup} />
          ))
        )}
      </AllMeetupsContainer>
    </section>
  );
}

export default AllMeetups;
