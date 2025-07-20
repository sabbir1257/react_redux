import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { useState } from 'react';
import { addTask } from '../store';

const Todo = () => {
  const [task, setTask] = useState('');

  const tasks = useSelector((state) => state.task);
  // console.log("react states", state.task)

  const dispatch = useDispatch();

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    return dispatch(addTask(task));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="bg-gradient-to-r from-gray-100 to-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">To-do List:</h1>

        {/* Input Box */}
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-inner"
        >
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-4"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="button"
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-700 transition"
          >
            Add Task
          </button>
        </form>

        {/* Task List */}
        <ul className="mt-6 space-y-2 text-gray-800">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg px-4 py-3 bg-white hover:bg-red-200 transition-colors duration-200"
            >
              <p className="text-md font-medium">
                {index}: {task}
              </p>
              <button onClick={() => handleDelete(index)} className="group">
                <MdDeleteForever className="w-6 h-6 text-red-500 group-hover:text-red-700 transition" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
