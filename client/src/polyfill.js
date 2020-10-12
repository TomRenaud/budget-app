if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

require('regenerator-runtime/runtime.js');
require('es6-object-assign/auto');
require('es6-shim');
require('whatwg-fetch');
require('abortcontroller-polyfill');
var Symbol = require('es6-symbol');

window.Symbol = Symbol;
