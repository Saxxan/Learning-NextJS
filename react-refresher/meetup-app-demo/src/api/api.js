/**
 * Function to send a http request to the backend to get all the meetups.
 * @returns an array of all meetups.
 */
export function getMeetups() {
  return fetch(
    "https://react-meetup-app-3b44c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  )
    .then((response) => response)
    .then((data) => data.json());
}

/**
 * Function to send a http request to the backend to create a new meetup.
 */
export function setNewMeetup(meetupData) {
  return fetch(
    "https://react-meetup-app-3b44c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
    {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
