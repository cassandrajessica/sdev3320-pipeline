const { calculateTip, splitBill } = require('./tipCalculator');

test('calculates a 20% tip on a $50 bill', () => {
  expect(calculateTip(50, 20)).toBe(10);
});

test('rounds the tip to cents', () => {
  expect(calculateTip(33.33, 15)).toBe(5);
});

test('a 0% tip is $0', () => {
  expect(calculateTip(40, 0)).toBe(0);
});

test('throws an error for a negative bill', () => {
  expect(() => calculateTip(-10, 20)).toThrow('Bill and tip must not be negative');
});

test('splits a $100 bill with a 20% tip between 4 people', () => {
  expect(splitBill(100, 20, 4)).toBe(30);
});

test('throws an error when there are 0 people', () => {
  expect(() => splitBill(100, 20, 0)).toThrow('There must be at least 1 person');
});
