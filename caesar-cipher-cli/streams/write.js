const fs = require('fs');

const write = file => {
  // eslint-disable-next-line no-sync
  const isPathExists = fs.existsSync(file);
  
  if (isPathExists) {
    return fs.createWriteStream(file);
  } else if (!file || file === true) {
    return process.stdout;
  }
  process.stderr.write('Cannot write output file');
  // eslint-disable-next-line no-process-exit
  process.exit(1);
};

module.exports = write;
