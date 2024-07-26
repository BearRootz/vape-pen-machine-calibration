const Sensor = require('./Sensor');
const Machine = require('./Machine');

class CalibrationController {
  constructor(machine, sensors) {
    this.machine = machine;
    this.sensors = sensors;
  }

  calibrate() {
    console.log('Starting calibration process...');
    this.sensors.forEach(sensor => {
      const reading = sensor.getReading();
      this.machine.adjust(reading);
    });
    console.log('Calibration complete.');
  }
}

module.exports = CalibrationController;
