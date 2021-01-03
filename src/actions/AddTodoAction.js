import { ADD_TODO } from '../constants';

let nextTodoId = 0;

function addTodoAction(newTask) {
  nextTodoId += 1;

  return {
    type: ADD_TODO,
    payload: {
      id: nextTodoId,
      task: newTask,
      complete: false
    }
  };
}

export default addTodoAction;
