const expect = require('expect');

const utils = require('./utils')

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    
    expect(res).toBe(44);
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should pass test case', () => {
    expect(5).toBeA('number');
});