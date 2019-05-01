/**
 * 类似于dbcontext
 * 
 */
(function(window){

    /**
     * 申请对象以及构造函数
     */
    function Store(name, callback){
        callback = callback || function () {};
        //如果没有传回调，就返回一个空函数

		this._dbName = name;

		if (!localStorage.getItem(name)) {
			var todos = [
                {
                    item: "I don't want to do this.",
                    completed: false
                },
                {
                    item: "i want to do this",
                    completed: true
                }
            ];

			localStorage.setItem(name, JSON.stringify(todos));
		}

        callback.call(this, JSON.parse(localStorage.getItem(name)));
        //todo 这里要了解一下call的意义
    }

    Store.prototype.find = function (query, callback) {
		if (!callback) {
			return;
		}

		var todos = JSON.parse(localStorage.getItem(this._dbName));

		callback.call(this, todos.filter(function (todo) {
			for (var q in query) {
				if (query[q] !== todo[q]) {
					return false;
				}
			}
			return true;
		}));
    };
    
    Store.prototype.findAll = function (callback) {
		callback = callback || function () {};
		callback.call(this, JSON.parse(localStorage.getItem(this._dbName)));
	};

    window.app = window.app || {};
    window.app.Store = Store;
})(window)