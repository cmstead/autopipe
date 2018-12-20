function actionFactory(
    commandListAction,
    configurationAction,
    defaultAction,
    helpAction,
    runAction
) {
    'use strict';

    function isCLIPropertySetFactory(cliArgs) {
        return function (propertyName) {
            return typeof cliArgs[propertyName] !== 'undefined';
        };
    }

    const possibleActions = [
        ['help', helpAction],
        ['ls', commandListAction],
        ['configure', configurationAction],
        ['run', runAction]
    ];

    function getAction(cliArgs) {
        const isCLIPropertySet = isCLIPropertySetFactory(cliArgs);
        const isSelectedAction = actionPair => isCLIPropertySet(actionPair[0]);

        const selectedActionPair = possibleActions.find(isSelectedAction);

        return Boolean(selectedActionPair)
            ? selectedActionPair[1]
            : defaultAction;
    }

    return {
        getAction: getAction
    };
}

module.exports = actionFactory;