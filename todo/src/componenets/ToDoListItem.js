import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/Reducer";

function ToDoListItem(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newItemText, setNewItemText] = useState('')

    const addNewItem = e => {
        state=[...state.ToDoListList, setNewItemText(e.target.value)]
    }
    const handleItemChanges = e => {
        setNewItemText(e.target.value)
    }

    return(
        <div className="item">
            <div>
                <input
                className="item-input"
                type="text"
                value={newItemText}
                onChange={handleItemChanges}
                />
                <button 
                onClick={()=>dispatch({type:'ADD_TODO_ITEM', payload: newItemText})}
                >Add Item</button>
                <button
                onClick

            </div>
        </div>
    )
}

export default ToDoListItem;