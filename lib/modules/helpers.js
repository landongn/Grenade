define(

	[

	],

	function (Class){
		/* global document */
		"use strict";
		return {

			getCanvas: function(selector){
				if (selector) {
					return document.getElementsByClassName(selector);
				} else {
					return [];
				}
			}

		};
});