import React, {useReducer} from 'react';
import './App.css';
import Title from "./componenets/Title";
import TodoList from "./componenets/ToDoList";
import ToDoForm from "./componenets/ToDoForm";
import {reducer, initialState} from "./reducers/Reducer"

function App() {
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);



const Completed = (id) => {
  dispatch({type: "COMPLETED_ITEM", payload: id})
}

const clearCompleted = () => {
  dispatch({type:"CLEAR_COMPLETED"})
}

  return (
    <div className="App">
      <Title />
      <TodoList complete={Completed} />

      <button className="clear-button"
      onClick={event => {event.preventDefault();
      clearCompleted()}}>Clear Completed</button>

    </div>
  );
}

export default App;
