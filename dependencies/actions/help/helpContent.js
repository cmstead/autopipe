function helpContent (
    optionOutputHelper
) {
    'use strict';

    return [
        {
            title: 'Description',
            body: `Autopipe makes it easy to write, run and combine Node scripts so you can
automate your workflow. Rather than trying to be another task runner, Autopipe
is built to make it easy to write and centralize commonly used scripts for all
kinds of local automation.`
        },
        {
            title: 'Usage',
            body: 'autopipe [option][<command_name> [arguments] <pipe_operator> <command_name> [arguments] <pipe_operator> ...]'
        },
        {
            title: 'Options',
            body: optionOutputHelper.getOptionInfo()
        },
        {
            title: 'Examples',
            body: `autopipe --help
autopipe --configure
autopipe --ls
autopipe readFile myFile.txt |>> transformFile |>> printResult`
        }
    ];
}

module.exports = helpContent;