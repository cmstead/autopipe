function configurationAction(
    configurationPrompt,
    configurationWriter,
    logger
) {
    'use strict';

    const errorPreamble = 'An error occurred while trying to set up autopipe: ';

    function logErrorOrWriteConfiguration(error, results) {
        if (error) {
            logger.log(errorPreamble + error.message);
        } else {
            configurationWriter.writeConfig(results);
        }
    };

    return function () {
        configurationPrompt.requestConfigurationValues(logErrorOrWriteConfiguration);
    };
}

module.exports = configurationAction;