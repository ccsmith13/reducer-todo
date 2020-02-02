import React, { useReducer } from 'react'

export const initialState = [];
// Initial to do list is established

export const reducer = (state, action) => {
    const { type } = action;
    // we can store data in an action object at action.payload
    switch (type) {
        case "ADD_TODO":
            const newToDo = {
                id: new Date().getUTCMilliseconds(),
                item: action.payload.item,
            };
            return [...state, newToDo]
        case "DELETE_TODO":
            return [...state].filter(element => element.id !== action.payload.id);
        default:
            return state;
    }
};