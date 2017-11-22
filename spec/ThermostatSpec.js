describe("Start temperature", function() {
  it("Should have a starting temperatureof 20 degrees", function() {
    thermostat = new Thermostat();
    expect(thermostat._temperature).toEqual(20)
  });
});
