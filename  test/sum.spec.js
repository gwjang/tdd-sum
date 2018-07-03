const {sum1} = require('../src/sum');

describe('sum', ()=>{
    describe('sum1', ()=>{
        it('get two parameters and return sum result', ()=>{
            expect(sum1(1,2)).toBe(3);
            expect(sum1(3,4)).toBe(7);
        })
    })
})