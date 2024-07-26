class Machine {
  constructor(id, type) {
    this.id = id;
    this.type = type;
    this.settings = {};
  }

  adjust(reading) {
    // Simulate machine adjustment based on sensor reading
    console.log(`Adjusting machine ${this.id} with reading: ${reading}`);
    this.settings[this.type] = reading;
  }
}

module.exports = Machine;
