function runAction (
    logger
) {
    'use strict';

    return function () {
        logger.log('Commands will be run');
    };
}

module.exports = runAction;