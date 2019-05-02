import Template from './template'

const _itemId = element => parseInt(element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id, 10);
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default class View{

    constructor(template){
        this.template = template;
        this.$todoList = document.querySelector('.todo-list');
    }

    showItems(items) {
		this.$todoList.innerHTML = this.template.itemList(items);
	}
}