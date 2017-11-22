describe("Start temperature", function() {
  it("Should have a starting temperature of 20 degrees", function() {
    var thermostat = new Thermostat();
    expect(thermostat._temperature).toEqual(20)
  });
});

describe("Increase temperature", function() {
  it("Should increase the temperature by 1", function() {
    var thermostat = new Thermostat();
    thermostat.increaseTemperature();
    expect(thermostat._temperature).toEqual(21)
  });
});

describe("Decrease temperature", function() {
  it("Should decrease the temperature by 1", function() {
    var thermostat = new Thermostat();
    thermostat.decreaseTemperature();
    expect(thermostat._temperature).toEqual(19)
  });
});

describe("Minimum temperature", function() {
  it("Should have a minimum temperature set to 10 degrees", function() {
    var thermostat = new Thermostat();
    expect(thermostat._MINIMUM_TEMPERATURE).toEqual(10)
  });
});
