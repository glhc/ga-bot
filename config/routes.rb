Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  get '/user/whatsmyid' => 'users#id'
  resources :users
  resources :friends
  resources :chatrooms
  resources :chatroom_users
  resources :chatroom_messages
  
  get '/read_people' => 'friends#read_people'
  get '/profile/:id' => 'friends#read_profile'
  get '/feed/:id' => 'friends#feed'
  post '/follow' => 'friends#follow_user'
  post '/unfollow' => 'friends#unfollow_user'

  get '/chatrooms' => 'chatroom#read_chatrooms'
  get '/chatroom/:id' => 'chatroom#read_chatroom'



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
