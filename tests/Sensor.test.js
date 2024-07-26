const Sensor = require('../src/Sensor');

test('Sensor should return a valid reading', () => {
  const sensor = new Sensor(1, 'temperature');
  const reading = sensor.getReading();
  expect(reading).toBeGreaterThanOrEqual(0);
  expect(reading).toBeLessThanOrEqual(100);
});
