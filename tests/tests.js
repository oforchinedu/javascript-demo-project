// testing code goes here

'use strict'

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
chai.should();

var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    myApp.computeAverage(1,2,3).should.equal(2)
  })
  it("should return 5 as average for 3, 7, 5", function() {
    myApp.computeAverage(3,7,5).should.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    myApp.computeFactorial(5).should.equal(120);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    myApp.convertTempCtoF(40).should.equal(104)
  })
  it("should return X for Celcius value Y", function() {
    myApp.convertTempCtoF(60).should.equal(140);
  })
  it("should return Y for Fahrenheit value X", function() {
    myApp.convertTempFtoC(140).should.equal(60);
  })
  it("should return Y for Fahrenheit value X", function() {
    myApp.convertTempFtoC(104).should.equal(40)
  })
})

// check documentations and use expect
