define(

	[
		"modules/Class",
		"../../deps/box2d"
	],

	function (Class, Box2d){

		/*global window, document */
		"use strict";

		return Class.extend({

			_domCache: null,
			name: null,
			visible: false,

			$: function(){
				if (!this._domCache) {
					this._domCache = document.getElementsByClassName(this.name)[0];
				}

				return this._domCache;
			},


			init: function(){
				var c = document.createElement('canvas');
				return c;
			},

			hide: function(){
				this.$.css.visiblility = 'hidden';
			}

		});
});