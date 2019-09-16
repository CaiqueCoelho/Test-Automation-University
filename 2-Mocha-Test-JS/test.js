var assert = require('assert');

describe("Mathematical Operations - Test Suite", function() {

    this.timeout(500);

    var a = 10;
    var b = 10;

    it('Addition of two numbers', function(){

        var result = a + b;

        assert.equal(result, 20)
    });

    it.skip('Subtraction of two numbers', function(){
        var result = a - b;

        assert.equal(result, 0)
    });

    it('Multiplier of two numbers', function(){
        var result = a * b;

        assert.equal(result, 100)
    });

    it('Division of two numbers', function(){
        var result = a / b;

        assert.equal(result, 1)
    });

    it('This is a test for Pending Test Feature')
});