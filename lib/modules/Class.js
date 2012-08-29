define(

	[
		"modules/AbstractClass"

	],

	function (AbstractClass) {

		/*global $, window, define, console, document */

		"use strict";

		return AbstractClass.extend({
			init : function (vars, context) {},

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
			}
		});
	}
);