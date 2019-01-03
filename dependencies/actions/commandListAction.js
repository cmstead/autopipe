function commandListAction(
    commandNameGlobber,
    logger
) {
    'use strict';

    function displayGlobError(error) {
        logger.log('Unable to list commands, an error occurred: ', error.message);
    }

    function listCommands(commandNames) {
        commandNames.forEach(command => logger.log(command));
    }

    return function () {
        commandNameGlobber.getCommandNames(function (error, commandNames) {
            if (error) {
                displayGlobError(error);
            } else {
                listCommands(commandNames);
            }
        });
    };
}

module.exports = commandListAction;