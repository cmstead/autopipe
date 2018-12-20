function logger () {
    'use strict';

    function log(...args) {
        console.log.apply(console, args);
    }

    return {
        log: log
    };
}

module.exports = logger;