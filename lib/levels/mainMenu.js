define(

	[
		"Scene",
		"modules/physics"
	],

	function (Scene, Box){
		/*global console */
		"use strict";

		return Scene.extend({

			init: function(){
				this.id = "mainMenu";
				this.name = "Welcome to PaperPlanes";

				this.sup();

			},

			load: function(){
				console.log('loading level', this.id);

			}

		});

});