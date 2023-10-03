import Task from "./components/Task";

const tasks = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
  {
    id: 3,
    title: "Task 3",
  },
];

function App() {
  return (
    <>
      <h1 className="text-4xl px-6 py-3">Tasks</h1>
      <main className="px-6 py-3 flex flex-col gap-2">
        {tasks &&
          tasks.map((task) => <Task key={task.id} title={task.title} />)}
      </main>
    </>
  );
}

export default App;
