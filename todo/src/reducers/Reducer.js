import React, {useState, useReducer} from "react";


export const initialState={
    title: "ToDo List",
    todoList:[{id: new Date.}],
    editingTitle: false,
    editingItem: false,
    completedItem: false,
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
            case "ADD_TODO":
                return {...state, todoList: [...state.todoList, action.payload]
                }
    
            case "COMPLETED_TODO":
                return state.map((item) => {
                        return item.id === action.payload ?
                    {...item, completed: !item.completed} : item
                }
            )
    
            case "CLEAR_COMPLETED_TODO" : 
                return state.filter((item) => !item.completed)
    
            default:
                return state
    
    }
}