$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temperature").html(thermostat.getTemperature());
  $("#power-saving-status").html(thermostat.powerSavingStatus());
  $("#energy-usage").html(thermostat.currentEnergyUsage());
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=24496bffc3005d5b7c520dbcc7427f2f", function(weather) {
    $("#london-temperature").text(weather.main.temp);
  });

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
