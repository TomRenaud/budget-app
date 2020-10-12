if(window.document.documentMode) {
   require('./polyfill.js');
   require('./index.js');
} else {
   require('regenerator-runtime/runtime.js');
   require('./index.js');
}