'use strict'

const path = require('path');

const config = {
    cwd: path.join(__dirname, 'dependencies'),
    modulePaths: [
        '',
        'actions',
        'actions/help',
        'actions/configuration',
        'cliArgumentHelpers',
        'utilities'
    ],
    allowOverride: false,
    eagerLoad: false,
    errorOnModuleDNE: false
};

module.exports = require('dject').new(config);