function Thermostat() {
  this._temperature = 20;
  this._MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.increaseTemperature = function () {
  this._temperature ++;
};

Thermostat.prototype.decreaseTemperature = function () {
  this._temperature --;
};
