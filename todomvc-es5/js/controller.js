(function(window){

    function Controller(model, view){
        var self = this;
        self.model = model;
        self.view = view;
        console.log('model',model);
    }

    Controller.prototype.showAll = function () {
		var self = this;
		self.model.read(function (data) {
            console.log('read-data',data);
			self.view.render('showEntries', data);
		});
    };
    
    Controller.prototype.setView = function(){
        this._updateFilterState();
    }

    Controller.prototype._filter = function(){
        this.showAll();//这里原文用了很操蛋的show['All']类似这种，可变函数？害我着了好久。
    }

    Controller.prototype._updateFilterState = function(){
        this._filter()
    }

    window.app = window.app || {};
    window.app.Controller = Controller;

})(window)