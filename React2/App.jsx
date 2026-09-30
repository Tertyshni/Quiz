import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    if (text.trim() === "") return;

    setTasks([...tasks, text]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Список завдань
        </h1>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;