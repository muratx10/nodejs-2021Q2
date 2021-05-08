const fs = require('fs');

const read = file => {
  // eslint-disable-next-line no-sync
  const isPathExists = fs.existsSync(file);

  if (isPathExists) {
    return fs.createReadStream(file);
  } else if (!file || file === true) {
    process.stdout.write('Type your text: ');

    return process.stdin;
  }
  process.stderr.write('Cannot read input file');
  // eslint-disable-next-line no-process-exit
  process.exit(1);
};

module.exports = read;
