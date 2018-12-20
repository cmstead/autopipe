function cliConfig() {
    'use strict';

    return [
        {
            name: 'help',
            alias: 'h',
            type: Boolean,
            description: 'Output all autopipe options'
        },

        {
            name: 'ls',
            type: Boolean,
            description: 'Show all commands which can be run from autopipe'
        },

        {
            name: 'configure',
            type: Boolean,
            description: 'Configure autopipe installation'
        },

        {
            name: 'run',
            type: String,
            multiple: true,
            defaultOption: true,
            description: 'Pipe and run commands'
        }
    ];
}

module.exports = cliConfig;