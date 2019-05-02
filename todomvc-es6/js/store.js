export default class Store {

    constructor(name, callback){
        const localStorage = window.localStorage;
        let liveTodos=[
            {
                title: "我也不想这么样，反反复复",
                completed: false
            },
            {
                title: "反反复复",
                completed: false
            },
            {
                title: "反正最后每个人都孤独",
                completed: true
            }
        ];

        this.getLocalStorage = () => {
            return liveTodos || JSON.parse(localStorage.getItem(name) || '[]');
        }

        this.setLocalStorage = () => {
            localStorage.setItem(name, JSON.stringify(liveTodos = todos));
        }

        if(callback){
            callback();
        }

    }

    find(query, callback) {
        const todos = this.getLocalStorage();
        let k;

        callback(todos);

        //todo 没看懂
        // callback(todos.filter(todo => {
        //     for (k in query){
        //         if(query[k] !== todo[k]){
        //             return false;
        //         }
        //         return true;
        //     }
        // }))
    }


}