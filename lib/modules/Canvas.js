define(

	function (){
		/*global document, console */

		"use strict";
		var canvas = {
			id: document.getElementById('stage'),

			drawRect: function(options){
				if (!options) {
					options = {
						height: 0,
						width: 0,
						x: 0,
						y: 0,
						stroke: null,
						fill: "#fff",
						cornerRadius: 0
					};
				}

				var ctx = canvas.id.getContext('2d');
				//do we write a basic rectangle or a more complicated one?
				if (options.cornerRadius === 0) {
					canvas.ctx.rect(0, 0, options.width, options.height);
				} else {
					ctx.moveTo(options.cornerRadius, 0);
					ctx.lineTo(options.width - options.cornerRadius, 0);
					ctx.arc(options.width - options.cornerRadius, options.cornerRadius, options.cornerRadius, Math.PI * 3 / 2, 0, false);
					ctx.lineTo(options.width, options.height - options.cornerRadius);
					ctx.arc(options.width - options.cornerRadius, options.height - options.cornerRadius, options.cornerRadius, 0, Math.PI / 2, false);
					ctx.lineTo(options.cornerRadius, options.height);
					ctx.arc(options.cornerRadius, options.height - options.cornerRadius, options.cornerRadius, Math.PI / 2, Math.PI, false);
					ctx.lineTo(0, options.cornerRadius);
					ctx.arc(options.cornerRadius, options.cornerRadius, options.cornerRadius, Math.PI, Math.PI * 3 / 2, false);

				}
				ctx.closePath();
			}
		};

		return canvas;
});