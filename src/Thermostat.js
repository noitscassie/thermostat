function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingOn = true;
  this._MINIMUM_TEMPERATURE = 10;
  this._maximumTemperature = 25;
};

Thermostat.prototype.increaseTemperature = function () {
  if(this._temperature >= this._maximumTemperature) {
    return "Sorry, the temperature can not exceed " + this._maximumTemperature + " degrees";
  } else {
    this._temperature ++;
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this._temperature <= this._MINIMUM_TEMPERATURE) {
    return "Sorry, you can not set the temperature to below 10 degrees";
  } else {
    this._temperature --;
  }
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
