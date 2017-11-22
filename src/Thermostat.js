function Thermostat() {
  this._temperature = 20;
  this._isPowerSavingOn = true;
  this._MINIMUM_TEMPERATURE = 10;
  this._POWER_SAVING_MAX_TEMP = 25;
  this._NO_POWER_SAVING_MAX_TEMP = 32
  this._maximumTemperature = this._POWER_SAVING_MAX_TEMP;
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.setTemperature = function(newTemperature) {
  this._temperature = newTemperature;
};

Thermostat.prototype.getPowerSavingStatus = function() {
  return this._isPowerSavingOn;
};

Thermostat.prototype.setPowerSavingStatus = function(newStatus) {
  this._isPowerSavingOn = newStatus;
};

Thermostat.prototype.getMinimumTemperature = function() {
  return this._MINIMUM_TEMPERATURE;
};

Thermostat.prototype.getPowerSavingOnMaxTemp = function() {
  return this._POWER_SAVING_MAX_TEMP;
};

Thermostat.prototype.getPowerSavingOffMaxTemp = function() {
  return this._NO_POWER_SAVING_MAX_TEMP;
};

Thermostat.prototype.getMaximumTemperature = function() {
  return this._maximumTemperature;
};

Thermostat.prototype.setMaximumTemperature = function(newMaximumTemperature) {
  this._maximumTemperature = newMaximumTemperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if(this.getTemperature() >= this.getMaximumTemperature()) {
    return "Sorry, the temperature can not exceed " + this.getMaximumTemperature() + " degrees";
  } else {
    this.setTemperature(this.getTemperature() + 1);
  }
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this.getTemperature() <= this.getMinimumTemperature()) {
    return "Sorry, you can not set the temperature to below 10 degrees";
  } else {
    this.setTemperature(this.getTemperature() - 1);
  }
};

Thermostat.prototype.togglePowerSaving = function () {
  if(this.getPowerSavingStatus()) {
    this.setPowerSavingStatus(false);
  } else {
    this.setPowerSavingStatus(true);
  }
  this._updateMaximumTemperature();
};

Thermostat.prototype._updateMaximumTemperature = function() {
  if(this.getPowerSavingStatus()) {
    this.setMaximumTemperature(this.getPowerSavingOnMaxTemp());
  } else {
    this.setMaximumTemperature(this.getPowerSavingOffMaxTemp());
  }
};

Thermostat.prototype.resetTemperature = function () {
  this.setTemperature(20);
};

Thermostat.prototype.currentEnergyUsage = function() {
  if(this.getTemperature() < 18) {
    return "Low usage";
  } if(this.getTemperature() >25) {
    return "High usage";
  } else {
    return "Medium usage";
  }
};
