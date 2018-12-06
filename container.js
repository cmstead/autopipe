'use strict'

const path = require('path');

const config = {
    cwd: path.join(__dirname, 'dependencies'),
    modulePaths: [
        ''
    ],
    allowOverride: false,
    eagerLoad: false,
    errorOnModuleDNE: false
};

module.exports = require('dject').new(config);