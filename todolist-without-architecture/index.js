(function(){

    var todolist;

    /**
     * 
     */
    function addTodoList(e){
        var obj_list= {
            todo: "",
            done: false
        };

        /**
         * trim()
         * 去掉头尾空白字符
         */
        document.getElementsByClassName("new-todo")[0].value = document.getElementsByClassName("new-todo")[0].value.trim();

        if(document.getElementsByClassName("new-todo")[0].value.length === 0){
            alert("can't be empty");
            return;
        }

        obj_list.todo = document.getElementsByClassName("new-todo")[0].value;

        todolist.push(obj_list);

        saveData(todolist);

        document.getElementsByClassName("new-todo")[0].value = "";
        load();
    };

    /**
     * 
     */
    function load(){
        var todo = document.getElementsByClassName("todo-list")[0];
        var todoString = "";
        var todoCountDom = document.getElementsByClassName("todo-count")[0];
        var todoCount = 0;

        todolist = loadData();

        if(todolist.length != 0){

            for(let i=0; i<todolist.length; i++){
                if(!todolist[i].done){
                    todoString +=`
                        <li>
                            <div class="view">
                                <input type="checkbox" class="toggle">
                                <label>`+todolist[i].todo+`</label>
                                <button class="destroy"></button>
                            </div>
                        </li>
                    `
                    todoCount ++;
                }
            }

            todo.innerHTML = todoString;
            todoCountDom.innerHTML = `<strong>${todoCount}</strong> items left`;
        }else{
            todo.innerHTML = "";
            todoCountDom.innerHTML= 0;
        }

    }

    /**
     * 处理数据
     */
    function saveData(data){
        localStorage.setItem("todolist-key", JSON.stringify(data));
    }

    function loadData(){
        var history = localStorage.getItem("todolist-key");
        if(history != null){
            return JSON.parse(history);
        }else{
            return [];
        }
    }

    function clear(){
        localStorage.clear();
        load();
    }

    /**
     * 
     */
    // clear();
    window.addEventListener("load", load);
    document.getElementsByClassName("new-todo")[0].onkeypress = function (e){
        if(e.keyCode === 13){
            addTodoList()
            console.log("I'm herer!");
        }
    }


})();