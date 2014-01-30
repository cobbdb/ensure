/**
 * Easy JavaScript type insurance.
 * License MIT.
 * @author Dan Cobb
 * @param {Object} suspect The variable to inspect.
 */
var ENSURE = function (suspect) {
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
