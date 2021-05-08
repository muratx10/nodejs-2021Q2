const { pipeline } = require('stream');
const { program } = require('commander');
const read = require('./caesar-cipher-cli/streams/read');
const transform = require('./caesar-cipher-cli/streams/transform');
const write = require('./caesar-cipher-cli/streams/write');

program
  .storeOptionsAsProperties(false)
  .requiredOption('-a, --action <value>', 'encode/decode')
  .requiredOption('-s, --shift <value>', 'shift value')
  .option('-i, --input [value]', 'input value')
  .option('-o, --output [value]', 'output value')
  .parse(process.argv);

const opts = program.opts();

let shift = 0;
if (isNaN(Number(opts.shift))) {
  console.log('Invalid shift value. Default value: 123');
  shift = 123;
} else {
  shift = Number(opts.shift);
}

pipeline(
  read(opts.input),
  transform(opts.action, shift),
  write(opts.output),
  err => {
    if (err) {
      console.log(err);
    }
  }
);
