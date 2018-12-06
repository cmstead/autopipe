'use strict';

const container = require('./container');

const argumentParser = container.build('argumentParser');
const actionFactory = container.build('actionFactory');

const cliArguments = argumentParser.parseArguments();
const action = actionFactory.getAction(cliArguments);

action(cliArguments);