function configurationPrompt (
    logger,
    prompt
) {
    'use strict';

    const promptSchema = {
        properties: {
            commandDirectory: {
                message: 'Which directory are your commands in?',
                required: true
            }
        }
    };

    function requestConfigurationValues(continuation) {
        logger.log('Let\'s get autopipe configured so you can start running commands!');

        prompt.start();
        prompt.message = '';

        prompt.get(promptSchema, continuation);
    }

    return {
        requestConfigurationValues: requestConfigurationValues
    };
}

module.exports = configurationPrompt;