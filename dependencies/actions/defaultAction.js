function defaultAction (
    logger
) {
    'use strict';

    return function() {
        logger.log('Cannot run, no commands were specified.');
    };
}

module.exports = defaultAction;