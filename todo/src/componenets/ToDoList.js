import React from "react";
import ToDo from "./ToDoListItem";

function ToDoList(props){
return(
    <div className="todoList-wrapper">
        <div className="todoList">
            {props.state.todos.map((todo)=>(
                <ToDo key={todo.id} todo={todo} dispatch={props.dispatch} completed={props.completed} />
            ))}
        </div>
    </div>
)
}
export default ToDoList;