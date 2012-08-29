define(

	[
		"modules/Class",
		"../../../deps/kinetic",
		"modules/physics"
	],

	function (Class, $, Box){
		/*global console, window, document */
		"use strict";

		return Class.extend({

			x:0,
			y:0,
			z:0,
			h:0,
			w:0,
			isDraggable:false,
			hasEvents: false,
			isVisible: false,
			opacity: 1,
			id: 0,
			scale: {x:1, y:1},
			newton: {},

			_generate: function(opts){
				return new $.Shape();
			},

			init: function(opts){
				return this._generate(opts);
			},

			pos: function(){
				return [this.x, this.y];
			},

			destroy: function(){

			},

			hide: function(){
				console.log('hiding' , this);
			},

			show: function(){

			}

		});
});