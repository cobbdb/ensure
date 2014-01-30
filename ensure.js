/**
 * Easy JavaScript type insurance.
 * License MIT.
 * @author Dan Cobb
 * @param {Object} suspect The variable to inspect.
 * @example
 *     var ensure = require('bower_components/ensure/ensure');
 *     var msg = "Hello World!";
 *     ensure(msg).isa('string');
 */
module.exports = function (suspect) {
    var actual = typeof suspect;
    return {
        /**
         * @param {String} type
         * @event TypeError
         */
        isa: function (type) {
            var expected = type.toLowerCase();
            if (actual !== expected) {
                throw TypeError(
                    'Expected {' + expected +
                    '} but found {' + actual +
                    '} instead.'
                );
            }
        }
    };
};
