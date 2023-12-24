const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
      repeatTimes = 1, 
      separator = '+', 
      addition = '', 
      additionRepeatTimes = 1, 
      additionSeparator = '|'
  } = options;

  str = String(str);
  addition = String(addition);

  let repeatedAddition = (new Array(additionRepeatTimes)).fill(addition).join(additionSeparator);
  let fullStr = `${str}${repeatedAddition}`;

  return (new Array(repeatTimes)).fill(fullStr).join(separator);
}

module.exports = {
  repeater
};
