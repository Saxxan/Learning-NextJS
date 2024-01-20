import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import NewMeetupForm from "../components/meetup/NewMeetupForm";

// API
import { setNewMeetup } from "../api/api";

function NewMeetup() {
  const navigate = useNavigate();

  /**
   * Function that recieves the new meetup data from the form and send a http request to the backend.
   * @param {*} meetupData
   */
  function addMeetupHandler(meetupData) {
    setNewMeetup(meetupData).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
