export default class Store {

    constructor(liveTodos){
        const localStorage = window.localStorage;
        let name="todomvc-react";
        liveTodos=liveTodos||[];

        this._getLiveTodos=(changed)=>{
            if(changed){
                setInterval(function(){
                    return liveTodos || JSON.parse(localStorage.getItem(name) || '[]');
                }, 2000);
            }else{
                return liveTodos;
            }
        }
        
        
        this._setLiveTodos=()=>{
            setTimeout(
                function(){
                    localStorage.setItem(name, JSON.stringify(liveTodos));
                }
            ,3000);
        }

        // this.getLocalStorage = () => {
        //     setInterval(function(){
        //         return liveTodos || JSON.parse(localStorage.getItem(name) || '[]');
        //     }, 2000);
        // }

        // this.setLocalStorage = () => {
        //         localStorage.setItem(name, JSON.stringify(liveTodos = todos)),
        // }

    }

    find(){
        // const todos = this.getLocalStorage();
        return this._getLiveTodos(false);
    }

    add(item){
        let todos=this._getLiveTodos(false);
        todos.push(item);
        this._setLiveTodos();
        return todos;
    }

    delete(item){

    }

    update(item){

    }


}