class User < ApplicationRecord
  has_secure_password
  has_many :chatrooms
  has_many :chatroom_messages
  has_many :chatroom_users
  has_many :friends
  has_many :relationships
  has_many :posts
end
