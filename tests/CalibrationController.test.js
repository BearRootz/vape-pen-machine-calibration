const CalibrationController = require('../src/CalibrationController');
const Sensor = require('../src/Sensor');
const Machine = require('../src/Machine');

test('CalibrationController should calibrate machine based on sensor readings', () => {
  const sensors = [
    new Sensor(1, 'temperature'),
    new Sensor(2, 'pressure'),
    new Sensor(3, 'humidity')
  ];
  
  const machine = new Machine(1, 'quartz_cartridge');
  const controller = new CalibrationController(machine, sensors);

  controller.calibrate();
  
  sensors.forEach(sensor => {
    expect(machine.settings[sensor.type]).toBeDefined();
  });
});
