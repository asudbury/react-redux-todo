import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addTodoAction from '../actions/AddTodoAction';
import completeTodoAction from '../actions/CompleteTodoAction';
import deleteTodoAction from '../actions/DeleteTodoAction';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

function MainPage() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (input.length > 0) {
      dispatch(addTodoAction(input));
      setInput('');
    }
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodoAction(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <div>
      <Header />
      <AddTodo
        input={input}
        setInput={setInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default MainPage;
