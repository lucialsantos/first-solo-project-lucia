import React, { useState } from 'react';

function ToDo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {todo}]);
    setTodo('');
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleEdit = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index].todo = newValue;
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input
            type="text"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.todo}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
