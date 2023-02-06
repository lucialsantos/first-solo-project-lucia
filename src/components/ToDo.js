import React, { useState,useEffect } from 'react';


//Define a function called ToDo that returns a form and a list:
function ToDo() {
  let url = "https://www.affirmations.dev/";
  //Define the initial state of the todo
  const [todo, setTodo] = useState({
    goal:"",
    image:"",
    entry:"",
  });
  const [todos, setTodos] = useState([]);

  

  // Define a function called handleSubmit that takes an event as a parameter:
   const handleSubmit = (e) => {
   //Prevent the default behavior of the event
    e.preventDefault();
    //Add the todo to the todos array using the spread operator and setTodos
    setTodos([...todos, { todo }]);
    //Clear the todo input field using setTodo
    setTodo('');
  };

 //Define a function called handleDelete that takes an index as a parameter: 
    const handleDelete = (index) => {
 //Create a new array called newTodos that contains all the todos
    const newTodos = [...todos];
  // Remove the todo at the given index from the newTodos array
    newTodos.splice(index, 1);
  //Update the todos array with the newTodos array using setTodos
   setTodos(newTodos);
  };

  function getApi() {  
    let options = {
      method: "GET", //We are geting a task
      headers: {
        "Content-Type": "application/json" //Description of file type is a JSON format
      },

    };

    fetch(url, options)
      // our promise for fetch, instead of using "async", "wait", and "try"
      .then(response => response.json())
      //the response returned with actual data
      .then(todos => {
        console.log(todos);
        // upon success, update tasks
        setTodos(todos);
      })
        //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
      handleDelete();
  }
  
  useEffect(() => {
    getApi();
    // eslint-disable-next-line
  }, []) 


  // Define a function called handleEdit that takes an index and a newValue as parameters:
  const handleEdit = (index, newValue) => {
   //Create a new array called newTodos that contains all the todos
    const newTodos = [...todos];
  // Update the todo at the given index with the newValue in the newTodos array
    newTodos[index].todo = newValue;
    //Update the todos array with the newTodos array using setTodos
    setTodos(newTodos);
  };

  return (
    <div>
      <h1></h1>
       {/* Return a form with an input and a button that, when submitted, calls handleSubmit */}
      <form onSubmit={handleSubmit}>
        <label>
          Goals
          </label>
          {/* The input takes the todo value and updates it using the onChange event and setTodo */}
          <input 
            type="text"
            name='goal'
            value={todo.goal}
            onChange={(e) => setTodo(e.target.value)}
            className="input"
          />
          <label>
          Vision Board
          </label>
           <input 
            type="text"
            name='image'
            value={todo.image}
            onChange={(e) => setTodo(e.target.value)}
            className="input"
          />
          <label>
          Journaling
          </label>
          <input 
            type="text"
            name='entry'
            value={todo.entry}
            onChange={(e) => setTodo(e.target.value)}
            className="input"
          />
        <br />
        <button type="submit" className="button">
          Add
        </button>
      </form>
      <ul>
      {/* Return an unordered list that maps over the todos array and returns a list item for each todo */}
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="container">
              {todo.goal}
              {todo.image}
              {todo.entry}
              {/* The list item contains the todo and two buttons for editing and deleting the todo */}
              <button
                className="button"
                // The edit button calls the handleEdit function and passes the index as a parameter
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="button"
                // The delete button calls the handleDelete function and passes the index as a parameter
                onClick={getApi}
              >
                Complete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
