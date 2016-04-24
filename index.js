'use strict';

var randomNatural = require('random-natural');

module.exports = function () {

  var result = '';
  var length = 6;

  while (length--) {
    result += randomNatural(0, 9).toString();
  }

  return result;
};
