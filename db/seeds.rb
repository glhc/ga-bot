# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

include BCrypt

# # Creates a user with a random name
# def create_user
#   user = User.create({
#   first_name: Faker::Name.first_name,
#   last_name: Faker::Name.last_name,
#   email: "admin@ga.com"
#   })
# end

user1 = User.create(email: 'sean@email.com', password_digest: Password.create('password'), first_name: 'Sean', last_name: 'Cooper', username: 'Godking-Overlord', age: 42);
user2 = User.create(email: 'patrick@email.com', password_digest: Password.create('password'), first_name: 'Patrick', last_name: 'Horne', username: 'Sk8erboi', age: 420);
user3 = User.create(email: 'seoh@email.com', password_digest: Password.create('password'), first_name: 'Se', last_name: 'Oh', username: 'President', age: 69);

Friend.create(user_id: user1.id, friend_id: user2.id);
Friend.create(user_id: user2.id, friend_id: user1.id);
Friend.create(user_id: user2.id, friend_id: user3.id);
Friend.create(user_id: user3.id, friend_id: user2.id);

Relationship.create(user_id: user1.id, friend_id: user2.id);
Relationship.create(user_id: user1.id, friend_id: user3.id);
Relationship.create(user_id: user2.id, friend_id: user1.id);
Relationship.create(user_id: user2.id, friend_id: user3.id);
Relationship.create(user_id: user3.id, friend_id: user2.id);

room1 = Chatroom.create(user_id: user1.id, room_name: 'room1');
room2 = Chatroom.create(user_id: user2.id, room_name: 'room2');
room3 = Chatroom.create(user_id: user3.id, room_name: 'room3');

ChatroomUser.create(user_id: user1.id, chatroom_id: room1.id, is_admin: true);
ChatroomUser.create(user_id: user2.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user3.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user2.id, chatroom_id: room2.id, is_admin: true);
ChatroomUser.create(user_id: user1.id, chatroom_id: room2.id, is_admin: false);
ChatroomUser.create(user_id: user3.id, chatroom_id: room3.id, is_admin: true);

ChatroomMessage.create(user_id: user1.id, chatroom_id: room1.id, message: 'hello');
ChatroomMessage.create(user_id: user1.id, chatroom_id: room1.id, message: 'i like trains');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room1.id, message: 'i dont like trains');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room1.id, message: 'we cannot be friends');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room2.id, message: 'can you believe some guy likes trains?');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room2.id, message: 'no way');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room2.id, message: 'yes way');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room2.id, message: 'im calling the police');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room3.id, message: 'no one wants to join my chatroom T.T');

Post.create(user_id: user1.id, post_title: "yoooooo", post_content: "hello world")
Post.create(user_id: user1.id, post_title: "Nothing personal kid", post_content: "lmao")
Post.create(user_id: user1.id, post_title: "omaewa", post_content: "shindeiru")
Post.create(user_id: user2.id, post_title: "i love league of legends", post_content: "Veigar players > normies")
Post.create(user_id: user2.id, post_title: "kbbq is just expensive bbq", post_content: "dont @ me")
Post.create(user_id: user2.id, post_title: "look at me", post_content: "i am the captain now")
Post.create(user_id: user3.id, post_title: "hey guys welcome to my profile", post_content: "lms to be rated ~<3")
Post.create(user_id: user3.id, post_title: "top 8 friends", post_content: "none of y'all lmao")
Post.create(user_id: user3.id, post_title: "this 1 time at band camp", post_content: "@Sk8erboi")

