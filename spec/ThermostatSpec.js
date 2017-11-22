describe("Thermostat", function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Start temperature", function() {
    it("Should have a starting temperature of 20 degrees", function() {
      expect(thermostat._temperature).toEqual(20)
    });
  });

  describe("Increase temperature", function() {
    it("Should increase the temperature by 1", function() {
      thermostat.increaseTemperature();
      expect(thermostat._temperature).toEqual(21)
    });
  });

  describe("Decrease temperature", function() {
    it("Should decrease the temperature by 1", function() {
      thermostat.decreaseTemperature();
      expect(thermostat._temperature).toEqual(19)
    });
  });

  describe("Minimum temperature", function() {
    it("Should have a minimum temperature set to 10 degrees", function() {
      expect(thermostat._MINIMUM_TEMPERATURE).toEqual(10)
    });
  });
});
