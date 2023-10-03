import React from "react";

function Task({ title }) {
  return (
    <article className="p-3 border rounded shadow-slate-600 flex justify-between items-center">
      <h2 className="text-2xl">{title}</h2>
      <section className="flex justify-end">
        <button className="rounded py-2 px-4 border border-red-500 hover:bg-red-500">
          Delete
        </button>
      </section>
    </article>
  );
}

export default Task;
