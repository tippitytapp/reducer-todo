import React from "react";

const ToDo = (props) => {
    return(
        <div className="toDoItem">
            <input type="checkbox" onClick={()=>props.completed(props.todo.id)} />
            {props.todo.item}
        </div>
    )
}

export default ToDo;