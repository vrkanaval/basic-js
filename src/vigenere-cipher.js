const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }

      let shift = this.alphabet.indexOf(key[j % key.length]);
      let letterIndex = (this.alphabet.indexOf(message[i]) + shift) % 26;

      result += this.alphabet[letterIndex];

      j++;
    }

    return this.dir ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";

    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        result += message[i];
        continue;
      }

      let shift = this.alphabet.indexOf(key[j % key.length]);
      let letterIndex = (this.alphabet.indexOf(message[i]) + 26 - shift) % 26;

      result += this.alphabet[letterIndex];

      j++;
    }

    return this.dir ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
