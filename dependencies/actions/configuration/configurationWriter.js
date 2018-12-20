function configurationWriter (
    fs,
    packageValues,
    pathHelper

) {
    'use strict';

    function saveConfig(config) {
        const configPath = pathHelper.getConfigPath();
        const configContent = JSON.stringify(config, null, 4) + '\n';

        fs.writeFileSync(configPath, configContent);
    }

    function buildAutopipeConfig(results) {
        return {
            version: packageValues.version,
            commandDirectory: results.commandDirectory
        };
    }

    function writeConfig(results) {
        const configData = buildAutopipeConfig(results);

        saveConfig(configData);
    }

    return {
        writeConfig: writeConfig
    };
}

module.exports = configurationWriter;