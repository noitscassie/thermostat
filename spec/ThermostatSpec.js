describe("Thermostat", function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Start temperature", function() {
    it("Should have a starting temperature of 20 degrees", function() {
      expect(thermostat.getTemperature()).toEqual(20)
    });
  });

  describe("Increase temperature", function() {
    it("Should increase the temperature by 1", function() {
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21)
    });
    it("Can not exceed the maximum temperature", function() {
      thermostat.setTemperature(25);
      expect(thermostat.increaseTemperature()).toEqual("Sorry, the temperature can not exceed 25 degrees")
    });
  });

  describe("Decrease temperature", function() {
    it("Should decrease the temperature by 1", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19)
    });

    it("Can not decrease below the minimum temperature", function() {
      thermostat.setTemperature(10);
      expect(thermostat.decreaseTemperature()).toEqual("Sorry, you can not set the temperature to below 10 degrees")
    });
  });

  describe("Minimum temperature", function() {
    it("Should have a minimum temperature set to 10 degrees", function() {
      expect(thermostat.getMinimumTemperature()).toEqual(10)
    });
  });

  describe("Power saving", function() {
    it("_isPowerSavingOn is true by default", function() {
      expect(thermostat.getPowerSavingStatus()).toEqual(true)
    });
    it("_isPowerSavingOn is false after calling togglePowerSaving", function() {
      thermostat.togglePowerSaving();
      expect(thermostat.getPowerSavingStatus()).toEqual(false)
    });
    it("_isPowerSavingOn is true after calling togglePowerSaving twice", function() {
      thermostat.setPowerSavingStatus(false);
      thermostat.togglePowerSaving();
      expect(thermostat.getPowerSavingStatus()).toEqual(true)
    });
  });

  describe("Maximum temperature", function() {
    it("Should have a maximum temperature of 25 degrees by default", function() {
      expect(thermostat.getMaximumTemperature()).toEqual(25)
    });
    it("Should have a maximum temperature of 32 degrees if power saving is off", function() {
      thermostat.togglePowerSaving();
      expect(thermostat.getMaximumTemperature()).toEqual(32)
    });
    it("Should have a maximum temperature of 25 degrees if power saving is om", function() {
      thermostat.togglePowerSaving();
      thermostat.togglePowerSaving();
      expect(thermostat.getMaximumTemperature()).toEqual(25)
    });
  });

  describe("Reset temperature", function() {
    it("Should reset the temperature to 20 degrees", function () {
      thermostat.setTemperature(25);
      thermostat.resetTemperature();
      expect(thermostat.getTemperature()).toEqual(20)
    });
  })

  describe("Current energy usage", function() {
    it("Should return low usage if temperature is <18", function(){
      thermostat.setTemperature(17);
      expect(thermostat.currentEnergyUsage()).toEqual("Low usage")
    });
    it("Should return medium usage if temperature is between 18 and 25 degrees", function() {
      expect(thermostat.currentEnergyUsage()).toEqual("Medium usage")
    });
    it("Should return high usage if temperature is >25 degrees", function() {
      thermostat.setTemperature(26);
      expect(thermostat.currentEnergyUsage()).toEqual("High usage")
    });
  });
});
