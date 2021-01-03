import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';

/// provide some test data
const initialState = {
  todos: [
    {
      id: 998,
      task: 'Convert to TypeScript',
      complete: true
    },
    {
      id: 999,
      task: 'Read Twitter',
      complete: false
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload.id)
      };

    case COMPLETE_TODO: {
      const commpleteTodo = state.todos.find((t) => t.id === action.payload.id);
      commpleteTodo.complete = !commpleteTodo.complete;
      return { ...state, todos: [...state.todos] };
    }

    default:
      return state;
  }
}

export default rootReducer;
