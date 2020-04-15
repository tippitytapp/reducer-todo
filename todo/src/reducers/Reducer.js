import React, {useState, useReducer} from "react";


export const initialState={
    title: "ToDo List",
    editingTitle: false,
    todos: [
        {
            item: "First Item",
            completed: false,
            id: 541651651
        },
        {
            item: "Second Item",
            completed: false,
            id: 546216511
        }
    ]

}



export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_EDITING_TITLE':
            return{
                ...state,
                editingTitle:true
            }
        case 'UPDATE_TITLE':
            return{
                ...state,
                editingTitle:false,
                title:action.payload
            }
        case "NEW_TODO":
            return{
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload){
                        return {...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                })
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((todo)=>{
                    return todo.completed === false;
                })
            }
        default:
            return state;
    }
}