import { emptyItemQuery } from "./item";

export default class Controller {

    constructor(store, view){
        this.store = store;
        this.view = view;

        this._activeRoute = '';
    }

    setView(raw){
        const route = raw.replace(/^#\//, '');
        this._activeRoute = route;

        this._filter();
    }

    _filter(){
        const route = this._activeRoute;

        this.store.find({
            '': emptyItemQuery,
            'active': {completed: false},
            'completed': {completed: true}
        }[''], this.view.showItems.bind(this.view));
        // 第一个参数又是这种神奇的写法，route从url参数传进来，有三个值'' || 'active' || 'complete', 
        // 所以这一串下来就是
        // {
        //     '': emptyItemQuery,
        //     'active': {completed: false},
        //     'completed': {completed: true}
        // }['active'] === {complete:false} 这种值

        // this.store.find(EmptyItemQuery, this.view.showItems.bind(this.view));

    }
}