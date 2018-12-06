function cliConfig() {
    'use strict';

    return [
        {
            name: 'help',
            alias: 'h',
            type: Boolean,
            description: 'See autopipe options'
        },

        {
            name: 'ls',
            type: Boolean
        },

        {
            name: 'configure',
            type: Boolean
        },

        {
            name: 'commands',
            type: String,
            multiple: true,
            defaultOption: true
        }
    ];
}

module.exports = cliConfig;