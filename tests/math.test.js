const { calculateTip } = require('../src/math');

test('Should Calculate total with Tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('Should Calculate total with Tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});
