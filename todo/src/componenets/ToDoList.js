import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/Reducer";

function ToDoList(){
    const [state, dispatch] = useReducer(reducer, initialState)
console.log(state.todoList)
const [newItem, setNewItem] = useState("")
const handleItemChanges = e => {
    setNewItem(e.target.value);
}


    return(
        <div>
            <input className="toDoListItem"
            type="text"
            value={newItem}
            onChange={handleItemChanges}
            />
        <button className="add-button"
      onClick={()=>dispatch({type:"ADD_TODO", payload: newItem})}>Add Item</button>
        {state.todoList.map(item=>{console.log(item);
               return( <h4>{item.item}</h4>)
        })}
        </div>
    )
}
export default ToDoList;