import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTask(task);
    setTask("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-3 rounded-lg bg-white p-4 shadow"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введіть завдання"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Додати
      </button>
    </form>
  );
}

export default TaskForm;