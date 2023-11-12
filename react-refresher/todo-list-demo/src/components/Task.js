import React, { useState } from "react";

// Components
import Modal from "./Modal";

function Task({ title, toggleModal }) {
  const [showModal, setShowModal] = useState(false);

  /**
   * Function that toggles the modal state
   */
  function toggleModalState() {
    setShowModal((prevState) => !prevState);
  }

  /**
   * Function that handles click on delete button and deletes the task
   */
  function deleteHandler() {
    console.log("Delete " + title);
    toggleModalState();
  }

  return (
    <>
      <article className="p-3 border rounded shadow-slate-600 flex justify-between items-center">
        <h2 className="text-2xl">{title}</h2>
        <section className="flex justify-end">
          <button
            className="rounded py-2 px-4 border border-red-500 hover:bg-red-500"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </section>
      </article>
      {showModal && <Modal toggleModal={toggleModalState} task={title} />}
    </>
  );
}

export default Task;
