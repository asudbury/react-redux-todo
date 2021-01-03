import { DELETE_TODO } from '../constants';

function deleteTodoAction(todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId
    }
  };
}

export default deleteTodoAction;
