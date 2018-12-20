function configurationPrompt (
    logger,
    prompt
) {
    'use strict';

    const promptSchema = {
        properties: {
            commandDirectory: {
                message: 'Provide your scripts directory or press enter for default.\n',
                default: process.cwd(),
                required: true
            }
        }
    };

    function requestConfigurationValues(continuation) {
        logger.log('Let\'s get autopipe configured so you can start running commands!');

        prompt.start();
        prompt.message = '';
        prompt.delimiter = '';

        prompt.get(promptSchema, continuation);
    }

    return {
        requestConfigurationValues: requestConfigurationValues
    };
}

module.exports = configurationPrompt;