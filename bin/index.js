#!/usr/bin/env node

/* eslint-disable global-require, no-unused-expressions */

require('yargs')
  .scriptName('design')
  .usage('$0 <cmd>')
  .command({
    command: 'build-icons',
    describe: 'copies icons and builds a sprite',
    handler: require('./icons'),
  })
  .command(require('./config'))
  .demandCommand(1)
  .help().argv
