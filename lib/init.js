define(

	[
		'modules/Class',
		'config/Config',
		'modules/physics',
		"modules/GameState",
		"levels/MainMenu"
	],

	function (Class, Config, Box, GameState, Level){
		/* jshint eqeqeq:false, noempty:false, eqnull:true, globals:define, window, document */
		"use strict";

		var System = Class.extend({

			startup: function(){

				this.GameState = new GameState();
				this.GameState.load('MainMenu');

			}

		});

		return new System();
});