
export const initialState = {
    todoitems: []
};

export const reducer = (state, action) => {
    console.log('entering the reducer function')
    console.log('action', action)
    switch (action.type) {
        case "ADD_TODO":
            const newToDo = {
                id: new Date().getUTCMilliseconds(),
                item: action.item,
                completed: false,
            };
            console.log("action", action);
            let arrayCopy = state.todoitems;
            arrayCopy.push(newToDo);
            console.log(state);
            return { ...state, todoitems: arrayCopy }
        case "DELETE_TODO":
            return state.todoitems.filter(element => element.id !== action.id);
        default:
            return (state);
    }
};