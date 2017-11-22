function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingOn = true;
  this._MINIMUM_TEMPERATURE = 10;
  this._POWER_SAVING_MAX_TEMP = 25;
  this._NO_POWER_SAVING_MAX_TEMP = 32
  this._maximumTemperature = this._POWER_SAVING_MAX_TEMP;
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
    this._maximumTemperature = this._POWER_SAVING_MAX_TEMP;
  } else {
    this._maximumTemperature = this._NO_POWER_SAVING_MAX_TEMP;
  }
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = 20;
};
