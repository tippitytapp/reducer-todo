import React, {useState, useReducer} from 'react';
import './App.css';
import Title from "./componenets/Title";
import TodoList from "./componenets/ToDoList";
import ToDoForm from "./componenets/ToDoForm";
import {reducer, initialState} from "./reducers/Reducer"
import ToDo from './componenets/ToDoListItem';

function App() {
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);
const [newToDo, setNewToDo] = useState("")

const handleChange = (e) => {
  setNewToDo(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setNewToDo("");
  dispatch({type: "NEW_TODO", payload: newToDo})
}

const Completed = (id) => {
  dispatch({type: "TOGGLE_COMPLETED", payload: id})
}

const clearCompleted = () => {
  dispatch({type:"CLEAR_COMPLETED"})
}

  return (
    <div className="App">
      <Title />
      <TodoList state={state} dispatch={dispatch} completed={Completed} />
      <ToDoForm newToDo={newToDo} handleChange={handleChange} handleSubmit={handleSubmit} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
