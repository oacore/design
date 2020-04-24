const runner = require('../build/config')

const command = 'build-config [output]'
const desc = 'build runtime configuration'

const builder = (yargs) =>
  yargs
    .positional('output', {
      describe: 'output file path',
      type: 'string',
    })
    .help()

const handler = (argv) => runner(argv.output)

module.exports = { command, desc, builder, handler }
