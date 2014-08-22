
/**
 * Component dependencies.
 */

var spread = require('bredele/sweep');


/**
 * Mod constructor.
 * @api public
 */

module.exports = function(cb, scope) {
	var args = [].slice.call(arguments, 2);
	var fn = spread(cb, scope);
	return function() {
		fn(args, arguments);
	};
};
