Ensure
======

Easy JavaScript type insurance.

    $ bower install ensure

Example of use:

    var ensure = require('bower_components/ensure/ensure');
    var msg = "Hello World!";
    ensure(msg).isa('string');

Files are:

* ensure.js: Browserify module definition.
* ensure.raw.js: provides a global variable ENSURE.
* ensure.min.js: minified version of ensure.raw.js

See: [Github Page](http://www.github.com/cobbdb/ensure)

---
By Dan Cobb: <cobbdb@gmail.com>  
License: MIT
