(function(window){

    function Todo(name){
        this.storage = new app.Store();
        this.model = new app.Model();

        this.template = new app.Template();
        this.view = new app.View();

        this.controller = new app.Controller();
    }

    var todo = new Todo('todos-es5');

    
    console.log(window);
})(window)