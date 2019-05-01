(function(window){

    function Todo(name){
        this.storage = new app.Store(name);//it didn't pass in the callback, so the constructor of Store only set the localStorage
        this.model = new app.Model(this.storage);

        this.template = new app.Template();
        this.view = new app.View(this.template);

        this.controller = new app.Controller(this.model, this.view);
    }

    var todo = new Todo('todos-es5');

    function setView() {
        todo.controller.setView();
    }

    
    window.onload=setView;
    console.log(window);
})(window)