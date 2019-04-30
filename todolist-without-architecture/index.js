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

            for(var i=0; i<todolist.length; i++){
                todoString +=`
                    <li data-id=${i} class="${todolist[i].done?'completed':''}">
                        <div class="view">
                            <input type="checkbox" class="toggle">
                            <label>`+todolist[i].todo+`</label>
                            <button class="destroy"></button>
                        </div>
                    </li>
                `;
                if(!todolist[i].done)todoCount++;
            }

            todo.innerHTML = todoString;
            todoCountDom.innerHTML = `<strong>${todoCount}</strong> items left`;

            var todoDoms = document.getElementsByClassName("todo-list")[0].children;

            for(var i=0; i< todoDoms.length; i++){
                todoDoms[i].firstElementChild.children[0].addEventListener("click",function(e){
                    toggleComplete(e.path[2].dataset.id);
                });

                todoDoms[i].firstElementChild.children[2].addEventListener("click",function(e){
                    remove(e.path[2].dataset.id);
                });

                todoDoms[i].firstElementChild.children[1].addEventListener("dblclick",function(e){
                    console.log(e.path[0].textContent);
                    var input = document.createElement('input');
                    input.className='edit';
                    input.value = e.path[0].textContent;
                    input.addEventListener('keypress',function(e){
                        if(e.keyCode===13){
                            update(e.path[1].dataset.id, e.target.value);
                        }
                    })
                    e.path[2].append(input);
                    e.path[2].className="editing";
                });
            }




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

    function update(i, value){
        todolist[i].todo = value;
        saveData(todolist);
        load();
    }

    function toggleComplete(i){
        todolist[i].done=!todolist[i].done;
        saveData(todolist);
        load();
    }

    function remove(i){
        todolist.splice(i, 1);
        saveData(todolist);
        load();
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