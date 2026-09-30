function TaskList({ tasks, deleteTask }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Мої завдання
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500">
          Завдань поки немає
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 p-3"
            >
              <span className="text-gray-700">
                {task}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;