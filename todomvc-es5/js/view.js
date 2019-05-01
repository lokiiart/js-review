(function(window){

    function View(template){
        this.template = template;

		this.ENTER_KEY = 13;
        this.ESCAPE_KEY = 27;
        
        this.$todoList = document.querySelector('.todo-list');
    }

    View.prototype.render = function(viewCmd, parameter){
        var self = this;
        if(viewCmd === 'showEntries'){
            self.$todoList.innerHTML = self.template.show(parameter);
        }else{
            console.log("i don't know where i am")
        }
    }


    window.app = window.app || {};
    window.app.View = View;

})(window)