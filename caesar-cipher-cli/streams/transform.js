const through2 = require('through2');
const cipher = require('../cipher');

const transform = (action, shift) =>
  through2((chunk, enc, callback) => {
    let data;

    switch (action) {
      case 'encode':
        data = cipher.encode(chunk.toString('utf-8'), shift);
        break;

      case 'decode':
        data = cipher.decode(chunk.toString('utf-8'), shift);
        break;

      default:
        process.exit(1);
    }

    callback(null, data);
  });

module.exports = transform;
