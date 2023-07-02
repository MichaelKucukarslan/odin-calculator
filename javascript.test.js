const calculator = require('./javascript');

describe('Test addition', () => {
    test('works with single words', () => {
      expect(calculator.calculate('X', 2 , 2)).toBe(4);
    });

});
