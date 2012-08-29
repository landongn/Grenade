define(

	[
		"modules/Class",
		"require"
	],

	function (Class, require){

		"use strict";
		/* jshint eqeqeq:true, noempty:false, eqnull:true */
		/*global window, document, console, createjs */


		return Class.extend({

			levels: {
				"MainMenu" :{
					src: "../levels/MainMenu",
					loaded: false,
					data: null,
					id: "mainMenu"
				}
			},
			currentLevel: null,
			loading: null,
			stage: null,


			init: function(){

			},

			load: function(levelName){
				var Level = require(this.levels[levelName].src);
				if (this.currentLevel) {
					this.currentLevel.clear();
				}
				this.currentLevel = null;
				this.currentLevel = new Level();
			}

		});
});