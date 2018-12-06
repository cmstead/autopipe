function argumentParser(
    commandLineArgs,
    cliConfig
) {
    'use strict';

    function parseArguments() {
        return commandLineArgs(cliConfig);
    }

    return {
        parseArguments: parseArguments
    };
}

module.exports = argumentParser;