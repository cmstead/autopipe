function helpFormatter (
    chalk,
    logger
) {
    'use strict';

    function indentLines(text) {
        const lines = text.split('\n');
        return lines.map(line => `    ${line}`).join('\n');
    }

    function showHelpTitle(title) {
        logger.log('\n' + chalk.bold.underline(title) + '\n');
    }

    function showSectionTitle(title) {
        logger.log(chalk.bold(title) + '\n');
    }

    function showSectionContent(content) {
        const indentedContent = indentLines(content);

        logger.log(indentedContent + '\n');
    }

    return {
        showHelpTitle: showHelpTitle,
        showSectionTitle: showSectionTitle,
        showSectionContent: showSectionContent
    };
}

module.exports = helpFormatter;