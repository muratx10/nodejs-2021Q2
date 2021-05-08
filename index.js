const { pipeline } = require('stream');
const { program } = require('commander');
const read = require('./caesar-cipher-cli/streams/read');
const transform = require('./caesar-cipher-cli/streams/transform');
const write = require('./caesar-cipher-cli/streams/write');

const validActions = ['encode', 'decode'];

program
  .storeOptionsAsProperties(false)
  .requiredOption('-a, --action <value>', 'encode/decode')
  .requiredOption('-s, --shift <value>', 'shift value')
  .option('-i, --input [value]', 'input value')
  .option('-o, --output [value]', 'output value')
  .parse(process.argv);

const opts = program.opts();

let shift;
let action;

if (isNaN(Number(opts.shift))) {
  process.stderr.write('Please enter valid shift value.');
  process.exit(1)
} else shift = Number(opts.shift);

if (opts.action === undefined || !validActions.includes(opts.action)) {
  process.stderr.write('Please enter valid action.');
  process.exit(1);
} else action = opts.action;

pipeline(
  read(opts.input),
  transform(action, shift),
  write(opts.output),
  err => {
    if (err) {
      process.stderr.write(err);
    }
  }
);
