require 'json'
require "sinatra"
require "sinatra/cors"
require "sinatra/reloader" 

set :allow_origin, "http://localhost:4200"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

get '/users' do
  users = [
    { name: 'James', username: 'jamesbou', followers: 100 },
    { name: 'Ree', username: 'ree100', followers: 280 },
    { name: 'Paul', username: 'paulage', followers: 100 },
    { name: 'Dan', username: 'dantheman', followers: 240 },
    { name: 'Robert', username: 'robee', followers: 310 },
    { name: 'Maggie', username: 'maggiecartpet', followers: 840 }
  ]

  sort_property  = params['sortProp'] || 'name' 
  sort_direction = params['sortDir'] || 'asc' 

  users = users.sort_by { |u| u[sort_property.to_sym] }

  if params['sortDir'] == 'desc'
    users = users.reverse
  end

  {
    status: 'ok',
    users: users
  }.to_json
end
