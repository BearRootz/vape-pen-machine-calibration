const Machine = require('../src/Machine');

test('Machine should adjust settings based on reading', () => {
  const machine = new Machine(1, 'quartz_cartridge');
  machine.adjust(50);
  expect(machine.settings['quartz_cartridge']).toBe(50);
});
