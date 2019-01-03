function configFSHelper (
    fs,
    pathHelper
) {
    'use strict';

    const configPath = pathHelper.getConfigPath();

    function writeConfig(configData) {
        const configContent = JSON.stringify(configData, null, 4);

        fs.writeFileSync(configPath, configContent);
    }

    function readConfig() {
        const configContent = fs.readFileSync(configPath, 'utf8');

        return JSON.parse(configContent);
    }

    return {
        writeConfig: writeConfig,
        readConfig: readConfig
    };
}

module.exports = configFSHelper;