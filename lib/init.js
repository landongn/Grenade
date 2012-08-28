define(

	[
		'modules/Class',
		'config/Config',
		'modules/helpers',
		'../deps/kinetic',
		'modules/viewManager',
		'modules/physics'
	],

	function (Class, Config, helpers, $, viewManager, physics){
		/* jshint eqeqeq:false, noempty:false, eqnull:true, globals:define, window, document */
		"use strict";

		var System = Class.extend({

			viewState: viewManager,

			isRunning: false,

			startup: function(){

				this.viewState.stage = new $.Stage({
					container:"stage",
					width:1024,
					height:768
				});

				this.isRunning = true;


				var startup = this.viewState.createScene({
					height:1024,
					width:768,
					name: "welcome",
					draggable:false
				});

				var sqr = new $.Rect({
					x: 10,
					height:300,
					width:600,
					y: 30,
					fill:"#fff",
					cornerRadius: 5,
					stroke: "#eee",
					opacity: 0.6,
					draggable:true,
					listening:true,
					id:'backdrop'
				});

				startup.add(sqr);
				this.viewState.stage.add(startup);

				this.createWorld();

			},

			world: null,
			entities: [],

			createWorld: function(){
				this.world = physics.createWorld(0, 10, true);
				for (var i = 0; i < 10; i++) {


					var body = physics.createBody({
						type: 'dynamic',
						awake: true,
						position: {x:10, y:30},
						data:{
							name:'foo',
							id:'1'
						}});


					this.world.CreateBody(body);
				}
			}

		});

		return new System();
});