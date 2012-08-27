define(

	[
		"utils"
	],

	function (Utils) {

		/*jshint es5:true*/

		"use strict";

		/*=========================== HELPER FUNCTIONS ===========================*/

			var _createSuperFunction = function (fn, superFn) {
				return function() {
					var r, tmp = this.sup || null;

					// Reference the prototypes method, as super temporarily
					this.sup = superFn;

					r = fn.apply(this, arguments);

					// Reset this.sup
					this.sup = tmp;
					return r;
				};
			};

			/*
			If Function.toString() works as expected, return a regex that checks for `super()`
			otherwise return a regex that passes everything.
			*/

			var _doesCallSuper = /xyz/.test(function(){var xyz;}) ? /\bthis\.sup\b/ : /.*/;

		/*=========================== END OF HELPER FUNCTIONS ===========================*/

		return (function() {

			// Setup a dummy constructor for prototype-chaining without any overhead.
			var Abstract = function () {};
			var Module = function () {};

			Abstract.def = function (props, staticProps) {

				Abstract.prototype = this.prototype;
				var p, proto = Utils.extend(new Abstract(), props);

				function BaseModule (vars) {

					/**
					* If the prototype has a vars object and the first argument, is an object,
					* deep copy it to this.vars
					**/
					if (this.vars && typeof vars === "object") {
						this.vars = Utils.extend({}, true, this.vars, vars);
					}

					var fn = this.init || this.prototype.constructor;
					return fn.apply(this, arguments);
				}

				for (p in props) {
					if (
						p !== "static" &&
						typeof props[p] === "function" &&
						typeof this.prototype[p] === "function" &&
						_doesCallSuper.test(props[p])
					) {
						// this.sup() magic, on an as-needed
						proto[p] = _createSuperFunction(props[p], this.prototype[p]);
					}

					else if (typeof props[p] === "object") {

						if (props[p] instanceof Array) {
							proto[p] = props[p].concat();
						}

						else if (props[p] !== null) {
							proto[p] = Utils.def({}, (p === "vars"), props[p]);
						}
					}
				}

				BaseModule.prototype = proto;
				Utils.def(BaseModule, this, props.static, staticProps);

				BaseModule.prototype.constructor = BaseModule.prototype.static = BaseModule;

				if (typeof Module.prototype.setup === "function") {
					Module.prototype.setup();
				}

				return BaseModule;
			};

			return Abstract;

		}());
	}
);

