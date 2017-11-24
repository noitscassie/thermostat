$(document).ready(function() {
  thermostat = new Thermostat();

  $("#temperature").html(thermostat.getTemperature());
  $("#power-saving-status").html(thermostat.powerSavingStatus());
  $("#energy-usage").html("Current energy usage is: " + thermostat.currentEnergyUsage());

  $("#increase-temperature").click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html("Current energy usage is: " + thermostat.currentEnergyUsage());
  });

  $("#decrease-temperature").click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html("Current energy usage is: " + thermostat.currentEnergyUsage());
  });

  $("#toggle-power-saving").click(function() {
    thermostat.togglePowerSaving();
    $("#power-saving-status").html(thermostat.powerSavingStatus());
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html("Current energy usage is: " + thermostat.currentEnergyUsage());
  });

  $("#reset-temperature").click(function() {
    thermostat.resetTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html("Current energy usage is: " + thermostat.currentEnergyUsage());
  });

});
