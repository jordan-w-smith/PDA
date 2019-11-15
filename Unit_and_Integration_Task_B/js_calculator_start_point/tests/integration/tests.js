const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display of the running total', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('can update display with result of operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('can chain multiple operations together', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('can return decimal answers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('4.5')
  })

  it('can return negative answers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number8')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')
  })

  it('can return very large numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number1')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('5000000')
  })

  it('returns infinity when number divided by 0', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })

});
