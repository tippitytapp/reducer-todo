import React, {useState, useReducer} from "react";


export const initialState={
    title: "ToDo List",
    todoListList:[{id: Date.now()}],
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
        case 'ADD_TODO_ITEM':
            const newTodo = {
                id: Date.now(),
                name: "",
                completed: false
            }
            return{
                ...state,
                todoListList:[...this.state.todoListList, newTodo]
            }
        case 'SET_EDITING_ITEM':
            return{
                ...state,
                editingItem:true
            }
        case 'UPDATE_ITEM':
            return{
                ...state,
                editingItem:false,
                todoListList:[...this.state.todoListList, action.payload]
            }
        default:
            return state;

    }
}