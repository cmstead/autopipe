function commandNameUtils (
    commandPathUtils
) {
    'use strict';

    const { isNotInNodeModules, stripFileData } = commandPathUtils;

    function extractCommandNames(filePaths) {
        return filePaths.map(stripFileData).sort();
    }

    function stripAllNodeModulesPaths(filePaths) {
        return filePaths.filter(isNotInNodeModules);
    }

    return {
        extractCommandNames: extractCommandNames,
        stripAllNodeModulesPaths: stripAllNodeModulesPaths
    };
}

module.exports = commandNameUtils;