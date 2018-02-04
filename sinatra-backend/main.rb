require 'json'
require "sinatra"
require "sinatra/cors"

set :allow_origin, "http://localhost:4200"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

get '/users' do
  users = [
    { name: 'Tony', username: 'Teebug', followers: 100 },
    { name: 'Reebug', username: 'Ree100', followers: 280 },
    { name: 'Paul', username: 'Paulings', followers: 100 }
  ]

  {
    status: 'ok',
    users: users
  }.to_json
end
