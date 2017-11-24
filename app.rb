require 'sinatra'
require 'sinatra/base'
require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require 'json'
require 'pg'
require 'pry'
require_relative 'lib/thermostat'

set :public_folder, proc { File.join(root) }

class Thermostat_State < Sinatra::Base

  post '/save_state' do
    headers 'Access-Control-Allow-Origin' => '*'

    Thermostat.create(temperature: params[:temperature],
      power_saving_status: params[:power_saving_status],
      current_energy_usage: params[:current_energy_usage])
  end

  get '/load_state' do
    headers 'Access-Control-Allow-Origin' => '*'

    Thermostat.last.to_json
  end

end
