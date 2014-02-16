Ensure
======

Easy JavaScript type insurance.

    $ bower install ensure
    $ npm install ensure-it

Example of use:

    var ensure = require('ensure-it');
    var msg = "Hello World!";
    ensure(msg).isa('string');

Files are:

* ensure.js: Browserify/Node module definition.
* ensure.raw.js: provides a global variable ENSURE.
* ensure.min.js: minified version of ensure.raw.js

See: [Github Page](http://www.github.com/cobbdb/ensure)

---
By Dan Cobb: <cobbdb@gmail.com>  
License: MIT
