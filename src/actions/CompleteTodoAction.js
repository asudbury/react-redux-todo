import { COMPLETE_TODO } from '../constants';

function completeTodoAction(todoId) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id: todoId
    }
  };
}

export default completeTodoAction;
