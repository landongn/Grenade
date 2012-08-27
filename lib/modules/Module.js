define(

	[
		'modules/utils',
		'modules/BaseModule'
	],

	function (utils, _module){
		/* jshint eqeqeq:false, noempty:false, eqnull:true, globals: window, nade */

		"use strict";

		return _module.def({

			_: {},

			init : function (vars) {if (vars) { this.def(this._, vars); }},

			/**
			* Middleware preventDefault method. A shortcut to avoid delegation for a simple task.
			*/
			preventDefault : function (e) {
				e.preventDefault();
			},

			/**
			* Cross-browser shorthand for func.bind(this)
			* or more simply, exec(someContext);
			*/
			exec : function (fn) {
				return fn ? fn.bind(this) : fn;
			},

			/**
			* Middleware setTimeout method. Allows for scope retention inside timers.
			*/
			setTimeout : function (func, delay) {
				return window.setTimeout(this.proxy(func), delay);
			},

			/**
			* Middleware setInterval method. Allows for scope retention inside timers.
			*/
			setInterval : function (func, delay) {
				return window.setInterval(this.proxy(func), delay);
			},

			destroy : function () {

			}
	});
});