function commandListAction () {
    'use strict';

    return function() {
        console.log('runnable commands will be listed');
    };
}

module.exports = commandListAction;