import React from "react";

const ToDoForm = (props) => {
    return(
        <div className="todoForm">
            <form onSubmit={props.handleSubmit} className="form">
                <input type="text" value={props.newToDo} name="newToDo" onChange={props.handleChange} className="input" />
                <button className="add-btn">Add Item</button>
            </form>
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default ToDoForm;