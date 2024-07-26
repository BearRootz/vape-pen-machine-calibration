class Sensor {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getReading() {
    // Simulate sensor reading
    return Math.random() * 100;
  }
}

module.exports = Sensor;
