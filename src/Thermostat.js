function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingOn = true;
  this._MINIMUM_TEMPERATURE = 10;
  this._maximumTemperature = 25;
};

Thermostat.prototype.increaseTemperature = function () {
  this._temperature ++;
};

Thermostat.prototype.decreaseTemperature = function () {
  this._temperature --;
};

Thermostat.prototype.togglePowerSaving = function () {
  if(this._isPowerSavingOn) {
    this._isPowerSavingOn = false;
  } else {
    this._isPowerSavingOn = true;
  }
  this._updateMaximumTemperature();
};

Thermostat.prototype._updateMaximumTemperature = function() {
  if(this._isPowerSavingOn) {
    this._maximumTemperature = 25;
  } else {
    this._maximumTemperature = 32;
  }
};
