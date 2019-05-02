import {ItemList} from './item';

export default class Template{

    itemList(items){
        /**
         * @param func(total, currentValue, currentIndex, arr)
         * @param initialValue 初始值 ''
         */
                // <label>${escapeForHTML(item.title)}</label>
        return items.reduce((a, item) => a +`
        <li data-id="${item.id}"${item.completed ? ' class="completed"' : ''}>
            <div class="view">
                <input class="toggle" type="checkbox" ${item.completed ? 'checked' : ''}>
                <label>${item.title}</label>
                <button class="destroy"></button>
            </div>
        </li>
        `, ''); 
    }

}