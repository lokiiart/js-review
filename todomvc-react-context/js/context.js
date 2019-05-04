import React from 'react';

export const todos= [
    {
        title: "it's deep night",
        completed: false
    },
    {
        title: "do you miss me?",
        completed: false
    }
];

export const TodosContext = React.createContext({
    todos,
    addItem: ()=>{}
});