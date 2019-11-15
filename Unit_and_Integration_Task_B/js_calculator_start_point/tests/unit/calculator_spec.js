var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('can subtract', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('can multiply', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('can divide', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(5)
    calculator.numberClick(5)
    assert.equal(calculator.runningTotal, 55)
  })

  it('can chain multiple operations together', function() {
    calculator.numberClick(5)
    calculator.add(5)
    calculator.operatorClick()
    calculator.multiply(3)
    assert.equal(calculator.runningTotal, 15)
  })

  it('can clear a click', function() {
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.add(5)
    assert.equal(calculator.runningTotal, 5)
  })

});
