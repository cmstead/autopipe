function optionOutputHelper (
    chalk,
    cliConfig
) {
    'use strict';

    function getAliasContent(option) {
        const aliasTitle = chalk.bold('alias:');

        return Boolean(option.alias)
            ? `${aliasTitle} -${option.alias}`
            : `${aliasTitle} none`;
    }

    function getOptionNameContent(option) {
        return `${chalk.bold('--' + option.name)}`;
    }

    function getOptionDescriptionContent(option) {
        return `${chalk.bold('description:')} ${option.description}`;
    }

    function buildOptionInfo(option) {
        return `${getOptionNameContent(option)}
    ${getAliasContent(option)}
    ${getOptionDescriptionContent(option)}`;
    }

    function isNotRunCommand(option) {
        return option.name !== 'run';
    }

    function getOptionInfo() {
        return cliConfig
            .filter(isNotRunCommand)
            .map(buildOptionInfo)
            .join('\n\n');
    }

    return {
        getOptionInfo: getOptionInfo
    };
}

module.exports = optionOutputHelper;