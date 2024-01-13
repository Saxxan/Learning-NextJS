import React from "react";
import { useHistory } from "react-router-dom";

// Components
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();

  /**
   * Function that recieves the new meetup data from the form and send a http request to the backend.
   * @param {*} meetupData
   */
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-3b44c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
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
