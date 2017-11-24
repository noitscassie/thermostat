require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'

class Thermostat
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Text
  property :power_saving_status, Text
  property :current_energy_usage, Text
end

DataMapper.setup(:default, "postgres://localhost/thermostat_state")
DataMapper.finalize
DataMapper.auto_upgrade!
