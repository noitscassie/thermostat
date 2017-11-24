$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#temperature").html(thermostat.getTemperature());
  $("#power-saving-status").html(thermostat.powerSavingStatus());
  $("#energy-usage").html(thermostat.currentEnergyUsage());
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=24496bffc3005d5b7c520dbcc7427f2f", function(weather) {
    $("#london-temperature").text(weather.main.temp);
  });

  loadData();

  $("#increase-temperature").click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
    saveData()
  });

  $("#decrease-temperature").click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
    saveData()
  });

  $("#toggle-power-saving").click(function() {
    thermostat.togglePowerSaving();
    $("#power-saving-status").html(thermostat.powerSavingStatus());
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
    saveData()
  });

  $("#reset-temperature").click(function() {
    thermostat.resetTemperature();
    $("#temperature").html(thermostat.getTemperature());
    $("#energy-usage").html(thermostat.currentEnergyUsage());
    saveData()
  });

  $("#user-city-form").submit(function(event) {
    var city = $("#city").val();
    $("#city").val("");
    event.preventDefault();
    $("#selected-city").html(city);
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=24496bffc3005d5b7c520dbcc7427f2f", function(weather) {
      $("#selected-city-temperature").text(weather.main.temp);
    })
    $("#user-city").show();
  });

  function saveData() {
    $.post({
      url:'http://localhost:9292/save_state',
      type:'POST',
      dataType: 'json',
      data:{
        temperature: thermostat.getTemperature(),
        power_saving_status: thermostat.powerSavingStatus(),
        current_energy_usage: thermostat.currentEnergyUsage(),
        authenticity_token: window._token
      },
    });
  };

  function loadData() {
    $.get('http://localhost:9292/load_state', function(data) {
      var jsonObject = JSON.parse(data);
      var loadedTemperature = parseInt(jsonObject.temperature);
      thermostat.setTemperature(loadedTemperature);
      $("temperature").html(thermostat.getTemperature());
      $("power-saving-status").html(jsonObject.power_saving_status());
      $("energy-usage").html(jsonObject.current_energy_usage());
    });
  };


});
