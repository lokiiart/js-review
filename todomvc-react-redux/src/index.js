import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';

import rootReducer from './reducers/todos';

import {addTodo} from './actions';


const store = createStore(rootReducer);

const unsubscribe = store.subscribe(()=> console.log(store.getState()));

store.dispatch(addTodo('test the store'));
store.dispatch(addTodo('you are the one'))

unsubscribe();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);