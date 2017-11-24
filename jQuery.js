$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temperature").html(thermostat.getTemperature());
  $("#power-saving-status").html(thermostat.powerSavingStatus());
  $("#energy-usage").html(thermostat.currentEnergyUsage());

  $("#increase-temperature").click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
  });

  $("#decrease-temperature").click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
  });

  $("#toggle-power-saving").click(function() {
    thermostat.togglePowerSaving();
    $("#power-saving-status").html(thermostat.powerSavingStatus());
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
  });

  $("#reset-temperature").click(function() {
    thermostat.resetTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
  });

});
