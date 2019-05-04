import AppDispatcher from '../dispatcher/AppDispatcher';

AddActions={
    addActionItem: function(text){
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    }
}

export default AddActions;