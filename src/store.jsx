/* eslint-disable no-case-declarations */

import { createStore } from 'redux';

// Define Action Type: stateDomaon & the Event
const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';

const initialState = {
  task: [],
  isLoading: false,
};

// Step 1: Create a simple reducer function
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: [...state.task, updatedTask],
      };

    default:
      return state;
  }
};

// step 2: Log the initial state
export const store = createStore(taskReducer);
console.log(store);

// Step 3: Log the initial state
// The getState method is a synchronous function that returns the current state of a Readux application. It include  the entire state of the application, including all the reducers and their respective states.
console.log('initial State', store.getState());

// Step 4: Dispatch an action to add a task
export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

// eslint-disable-next-line no-unused-vars
export const deleteTask = (id) => {
  return{ type: DELETE_TASK, payload: id };
} 

// Step 4: Dispatch an action to add a task
store.dispatch(addTask("Buy TT code"));
store.dispatch(addTask("Buy apple"));
store.dispatch(addTask("Buy banana"));

console.log('Update State', store.getState());

store.dispatch({ type: ADD_TASK, payload: 'Buy Mango' });
console.log('Update State', store.getState());

store.dispatch({ type: DELETE_TASK, payload: 0 });
console.log('deleted State', store.getState());

