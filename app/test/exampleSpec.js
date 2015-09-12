'use strict';

var chai = require('chai');
chai.should();


describe('simple service', function () {
    it('should increase exampleValue', function() {
        // given
        var exampleVal = 1;

        // when
        exampleVal++;

        // then
        exampleVal.should.be.equal(2);
    });
});
