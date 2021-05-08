const mod = 26;
const alphabetRegexp = /[a-zA-Z]/;

// ASCII letter codes
const capital_A = 65;
const small_A = 97;

const encode = (input, shift) => {
  let output = '';

  for (let i = 0; i < input.length; i += 1) {
    const isEnglishLetter = alphabetRegexp.test(input[i]);

    if (isEnglishLetter) {
      if (input[i].toUpperCase() === input[i]) {
        output += String.fromCharCode(
          ((input.charCodeAt(i) + shift - capital_A) % mod) + capital_A
        );
      } else {
        output += String.fromCharCode(
          ((input.charCodeAt(i) + shift - small_A) % mod) + small_A
        );
      }
    } else {
      output += input[i];
    }
  }

  return output;
};

const decode = (input, shift) => {
  const shiftValue = (mod - Number(shift)) % mod;

  return encode(input, shiftValue);
};

module.exports = {
  encode,
  decode
};
