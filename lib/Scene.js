define(

	[
		"modules/Class"
	],

	function (Class){
		/*global window, console, createjs*/
		"use strict";

		return Class.extend({
			id: null,
			name: null,
			pos: [0, 0, 0],
			layer: null,
			ctx:null,
			stage: null,

			init: function(opts){
				this.stage = document.getElementById("stage");
				this.ctx = this.stage.getContext('2d');

				this.load();
			},

			load: function(){

			},

			unload: function(){

			}

		});

});