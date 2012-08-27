define(

	[
		'modules/utils',
		'modules/Module'
	],

	function (utils, Mod){
		/* jshint eqeqeq:false, noempty:false, eqnull:true, globals:define window */

		"use strict";

		return Mod.def({

			_: {
				version: '0.0.0'
			},

			init: function(opts, cb){

				if (cb) {
					this.sup(opts);
					cb();
				}
				
				this.sup();
			}

		});
});