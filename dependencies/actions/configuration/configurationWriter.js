function configurationWriter (
    configFSHelper,
    packageValues
) {
    'use strict';

    function buildAutopipeConfig(results) {
        return {
            version: packageValues.version,
            commandDirectory: results.commandDirectory,
            globbingRules: results.globbingRules
        };
    }

    function writeConfig(results) {
        const configData = buildAutopipeConfig(results);

        configFSHelper.writeConfig(configData);
    }

    return {
        writeConfig: writeConfig
    };
}

module.exports = configurationWriter;