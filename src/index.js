const CalibrationController = require('./CalibrationController');
const Sensor = require('./Sensor');
const Machine = require('./Machine');

const sensors = [
  new Sensor(1, 'temperature'),
  new Sensor(2, 'pressure'),
  new Sensor(3, 'humidity')
];

const machine = new Machine(1, 'quartz_cartridge');

const controller = new CalibrationController(machine, sensors);
controller.calibrate();
