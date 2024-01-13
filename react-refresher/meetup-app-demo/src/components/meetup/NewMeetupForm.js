import React, { useRef } from "react";
import styled from "styled-components";

// UI Components
import { CardWrapper, CardFooter } from "../ui/Wrapper";

// Styled components
const NewMeetupFormContainer = styled(CardWrapper)`
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 20px 4px rgba(32, 32, 32, 0.5);
`;

const InputControl = styled.div`
  padding: 10px 16px 10px 16px;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input,
  & textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
  }
`;

function NewMeetupForm({ onAddMeetup }) {
  // Refs
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  /**
   * Function to handle the form submission. Gets the values from the inputs, creates a meetup object, and passes it to the parent component.
   * @param {*} event
   */
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // Pass meetupData to the parent component
    onAddMeetup(meetupData);
  }

  return (
    <NewMeetupFormContainer>
      <form onSubmit={(e) => submitHandler(e)}>
        <InputControl>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </InputControl>
        <InputControl>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </InputControl>
        <InputControl>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </InputControl>
        <InputControl>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </InputControl>
        <CardFooter>
          <button>Add Meetup</button>
        </CardFooter>
      </form>
    </NewMeetupFormContainer>
  );
}

export default NewMeetupForm;
