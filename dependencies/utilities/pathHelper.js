function pathHelper(
    constants,
    path
) {
    'use strict';

    function getModuleRoot() {
        const directoryTokens = __dirname.split(constants.moduleDirectoryName);

        return path.join(directoryTokens[0], constants.moduleDirectoryName);
    }

    function getConfigPath() {
        const moduleRoot = getModuleRoot();

        return path.join(moduleRoot, constants.configFileName);
    }

    return {
        getConfigPath: getConfigPath,
        getModuleRoot: getModuleRoot
    };
}

module.exports = pathHelper;