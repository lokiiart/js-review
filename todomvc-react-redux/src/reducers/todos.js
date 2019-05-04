import {combineReducers} from 'redux';
const initialTodos = [
    {
        title: "i'm hungry",
        completed: false
    },
    {
        title: "I have to eat...",
        completed: false
    }
]

const todos = (state =[], action) => {
    if(typeof state === 'undefined'){
        return initialTodos;
    }

    switch(action.type){
        case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        default:
        return state
    }
}

export default  combineReducers({todos});