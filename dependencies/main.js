
function main(
    actionFactory,
    argumentParser
) {
    'use strict';

    const cliArguments = argumentParser.parseArguments();
    const action = actionFactory.getAction(cliArguments);

    action(cliArguments);
}

module.exports = main;