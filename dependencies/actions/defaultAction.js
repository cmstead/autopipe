function defaultAction () {
    'use strict';

    return function() {
        console.log('Cannot run, no commands were specified.');
    };
}

module.exports = defaultAction;