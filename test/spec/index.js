var expect = require('chai').expect;

describe('random-cn-zip: ', function () {

  var randomZip = require('../../index');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomZip()).to.match(/^[\d]{6}$/);
    }
  });
});
