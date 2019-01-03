function commandNameGlobber (
    commandNameUtils,
    configFSHelper,
    glob
) {
    'use strict';

    const { commandDirectory, globbingRules } = configFSHelper.readConfig();

    function globCommandPaths(continuation) {
        const globOptions = {
            cwd: commandDirectory
        };

        glob(globbingRules, globOptions, continuation);
    }

    function getCommandPaths(continuation) {
        globCommandPaths(function(error, rawCommandPaths){
            const cleanCommandPaths = !error
                ? commandNameUtils.stripAllNodeModulesPaths(rawCommandPaths)
                : null;

            continuation(error, cleanCommandPaths);
        });
    }

    function getCommandNames(continuation) {
        getCommandPaths(function (error, commandPaths) {
            const commandNames = !error
                ? commandNameUtils.extractCommandNames(commandPaths)
                : null;

            continuation(error, commandNames);
        })
    }


    return {
        getCommandNames: getCommandNames
    };
}

module.exports = commandNameGlobber; 