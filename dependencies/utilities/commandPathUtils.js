function commandPathUtils (
    path
) {
    'use strict';

    const nodeModulePattern = /^node_modules/;
    const fileDataPattern = new RegExp(`(.*${path.sep})?(.+)\.js`);

    function isNotInNodeModules(filePath) {
        return !nodeModulePattern.test(filePath);
    };

    function stripFileData(filePath) {
        return filePath.replace(fileDataPattern, '$2');
    }

    return {
        isNotInNodeModules: isNotInNodeModules,
        stripFileData: stripFileData
    };
}

module.exports = commandPathUtils;