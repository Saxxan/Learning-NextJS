import React from "react";

function Modal({ toggleModal, task }) {
  return (
    <section className="modal_background absolute inset-0 w-full h-full flex justify-center items-center">
      <section className="modal_card p-5 border rounded shadow-slate-600 flex flex-col justify-center items-center">
        <p className="mb-3">Are you sure you want to delete this task?</p>
        <p className="italic mb-4">{task}</p>
        <section className="flex justify-around gap-4">
          <button
            onClick={toggleModal}
            className="rounded py-2 px-4 border border-red-500 hover:bg-red-500"
          >
            Cancel
          </button>
          <button className="rounded py-2 px-4 border border-emerald-500 hover:bg-emerald-500">
            Confirm
          </button>
        </section>
      </section>
    </section>
  );
}

export default Modal;
