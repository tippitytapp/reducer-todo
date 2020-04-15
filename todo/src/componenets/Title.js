import React, {useState, useReducer} from "react";
import {reducer, initialState} from "../reducers/Reducer";





function Title(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTitleText, setNewTitleText] = useState('')

    const handleTitleChanges = e => {
        setNewTitleText(e.target.value)
    };

    return(
        <div className="title">
            {!state.editingTitle? (
            <h1>{state.title}{' '}   <button 
            onClick={() => dispatch({type: 'SET_EDITING_TITLE'})}>
                Edit Title
            </button></h1>         
            ) : ( 
                <div><input
                className="title-input"
                type="text"
                value={newTitleText}
                onChange= {handleTitleChanges}
                />
                <button 
                onClick ={()=>
                dispatch({type: 'UPDATE_TITLE', payload: newTitleText})}
                >Update Title</button>
            </div>
            )}
        </div>
    )
}

export default Title;