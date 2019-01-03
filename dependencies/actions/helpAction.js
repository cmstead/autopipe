function helpAction(
    helpContent,
    helpFormatter
) {
    'use strict';

    function showSection(sectionDefinition) {
        helpFormatter.showSectionTitle(sectionDefinition.title + ':');
        helpFormatter.showSectionContent(sectionDefinition.body);
    }

    function showHelpContent() {
        helpFormatter.showHelpTitle('Autopipe');

        helpContent.forEach(showSection);
    }

    return showHelpContent;
}

module.exports = helpAction;