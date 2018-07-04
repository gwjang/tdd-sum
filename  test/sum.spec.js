const { twoCalculation } = require('../src/sum');

describe('sum', () => {
    describe('sum1', () => {
        it('get two parameters and return sum result', () => {
            expect(twoCalculation(13)).toBe(2);
            expect(twoCalculation(5)).toBe(1);
        })
    })
})
