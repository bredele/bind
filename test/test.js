var bind = require('../index');

var fn = bind(function(first, last) {
	console.log(first, last);
}, {}, 'olivier');
fn('wietrich');