function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.increaseTemperature = function () {
  this._temperature ++;
};

Thermostat.prototype.decreaseTemperature = function () {
  this._temperature --;
};