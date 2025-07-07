import React from 'react';

const Todo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gradient-to-r from-gray-100 to-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">To-do List:</h1>
        <div className="flex items-center space-x-4 bg-white rounded-full p-2 shadow-inner">
          <input
            type="text"
            id="input-box"
            placeholder="Add a new task"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-4"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-700 transition"
          >
            Add Task
          </button>
        </div>
        <ul id="list-container" className="mt-6 space-y-2 text-gray-800"></ul>
      </div>
    </div>
  );
};

export default Todo;
