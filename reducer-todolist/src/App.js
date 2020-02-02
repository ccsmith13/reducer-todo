import React, { useReducer, useState } from 'react';
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
    event.preventDefault();
  }

  console.log("state", state);
  return (
    <div>
      <h1>To Do List App Using the Reducer</h1>
      <label>
        Enter Item Here
          <input type="text" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" onClick={() => dispatch({ type: 'ADD_TODO', item: input })} />
      <ul>
        {state.todoitems.map((todo) => {
          return (
            <div key={todo.id}>
              <li>Task: {todo.item}, Completed? {todo.completed.toString()}</li>
              <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>Toggle Task Completion</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
