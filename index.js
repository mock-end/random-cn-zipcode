'use strict';

var randomNatural = require('random-natural');

module.exports = function () {

  var result = '';
  var length = 6;

  while (length--) {
    result += randomNatural({ min: 0, max: 9, inspected: true }).toString();
  }

  return result;
};
