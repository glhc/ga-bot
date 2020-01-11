# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

include BCrypt

user1 = User.create(email: 'sean@email.com', password_digest: Password.create('password'), first_name: 'Sean', last_name: 'Simpson', username: 'Glord', age: 23);
user2 = User.create(email: 'patrick@email.com', password_digest: Password.create('password'), first_name: 'Patrick', last_name: 'Riley', username: 'Sk8erboi', age: 25);
user3 = User.create(email: 'seoh@email.com', password_digest: Password.create('password'), first_name: 'Se', last_name: 'Griffin', username: 'President', age: 24);
user4 = User.create(email: 'meg@email.com', password_digest: Password.create('password'), first_name: 'Meg', last_name: 'Fong', username: 'Meirry', age: 30);
user5 = User.create(email: 'kel@email.com', password_digest: Password.create('password'), first_name: 'Kel', last_name: 'Chan', username: 'KTPI', age: 38);
user6 = User.create(email: 'josh@email.com', password_digest: Password.create('password'), first_name: 'Josh', last_name: 'Van Cleef', username: 'jvc', age: 40);
user7 = User.create(email: 'tim@email.com', password_digest: Password.create('password'), first_name: 'Tim', last_name: 'Smith', username: 'generic', age: 27);
user8 = User.create(email: 'jim@email.com', password_digest: Password.create('password'), first_name: 'Jim', last_name: 'Schrute', username: 'beets', age: 28);
user9 = User.create(email: 'pam@email.com', password_digest: Password.create('password'), first_name: 'Pam', last_name: 'Kapur', username: 'Mindy', age: 31);
user10 = User.create(email: 'sandy@email.com', password_digest: Password.create('password'), first_name: 'Sandy', last_name: 'Saunders', username: 'Squirrel', age: 22);

Friend.create(user_id: user1.id, friend_id: user2.id);
Friend.create(user_id: user1.id, friend_id: user3.id);
Friend.create(user_id: user1.id, friend_id: user4.id);
Friend.create(user_id: user1.id, friend_id: user5.id);
Friend.create(user_id: user1.id, friend_id: user6.id);
Friend.create(user_id: user1.id, friend_id: user7.id);
Friend.create(user_id: user1.id, friend_id: user8.id);
Friend.create(user_id: user1.id, friend_id: user9.id);
Friend.create(user_id: user1.id, friend_id: user10.id);
Friend.create(user_id: user2.id, friend_id: user1.id);
Friend.create(user_id: user2.id, friend_id: user3.id);
Friend.create(user_id: user2.id, friend_id: user4.id);
Friend.create(user_id: user2.id, friend_id: user6.id);
Friend.create(user_id: user2.id, friend_id: user8.id);
Friend.create(user_id: user3.id, friend_id: user2.id);
Friend.create(user_id: user3.id, friend_id: user4.id);
Friend.create(user_id: user3.id, friend_id: user5.id);
Friend.create(user_id: user3.id, friend_id: user6.id);
Friend.create(user_id: user4.id, friend_id: user5.id);
Friend.create(user_id: user4.id, friend_id: user6.id);
Friend.create(user_id: user4.id, friend_id: user7.id);
Friend.create(user_id: user4.id, friend_id: user8.id);
Friend.create(user_id: user4.id, friend_id: user9.id);
Friend.create(user_id: user5.id, friend_id: user6.id);
Friend.create(user_id: user5.id, friend_id: user8.id);
Friend.create(user_id: user5.id, friend_id: user10.id);
Friend.create(user_id: user6.id, friend_id: user1.id);
Friend.create(user_id: user6.id, friend_id: user10.id);
Friend.create(user_id: user7.id, friend_id: user1.id);
Friend.create(user_id: user7.id, friend_id: user10.id);
Friend.create(user_id: user8.id, friend_id: user1.id);
Friend.create(user_id: user8.id, friend_id: user10.id);
Friend.create(user_id: user9.id, friend_id: user1.id);
Friend.create(user_id: user9.id, friend_id: user10.id);
Friend.create(user_id: user10.id, friend_id: user1.id);
Friend.create(user_id: user10.id, friend_id: user8.id);


room1 = Chatroom.create(user_id: user1.id, room_name: 'room1');
room2 = Chatroom.create(user_id: user2.id, room_name: 'room2');
room3 = Chatroom.create(user_id: user3.id, room_name: 'room3');
room4 = Chatroom.create(user_id: user4.id, room_name: 'the boys');
room5 = Chatroom.create(user_id: user5.id, room_name: 'essential');
room6 = Chatroom.create(user_id: user6.id, room_name: 'choc fiends');
room7 = Chatroom.create(user_id: user7.id, room_name: 'Uni assignment 2');

ChatroomUser.create(user_id: user1.id, chatroom_id: room1.id, is_admin: true);
ChatroomUser.create(user_id: user2.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user3.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user4.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user5.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user6.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user7.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user8.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user9.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user10.id, chatroom_id: room1.id, is_admin: false);
ChatroomUser.create(user_id: user2.id, chatroom_id: room2.id, is_admin: true);
ChatroomUser.create(user_id: user1.id, chatroom_id: room2.id, is_admin: false);
ChatroomUser.create(user_id: user3.id, chatroom_id: room3.id, is_admin: true);
ChatroomUser.create(user_id: user4.id, chatroom_id: room3.id, is_admin: true);
ChatroomUser.create(user_id: user4.id, chatroom_id: room4.id, is_admin: true);
ChatroomUser.create(user_id: user5.id, chatroom_id: room4.id, is_admin: true);
ChatroomUser.create(user_id: user5.id, chatroom_id: room5.id, is_admin: true);
ChatroomUser.create(user_id: user6.id, chatroom_id: room5.id, is_admin: true);
ChatroomUser.create(user_id: user6.id, chatroom_id: room6.id, is_admin: true);
ChatroomUser.create(user_id: user7.id, chatroom_id: room6.id, is_admin: true);
ChatroomUser.create(user_id: user7.id, chatroom_id: room7.id, is_admin: true);

ChatroomMessage.create(user_id: user1.id, chatroom_id: room1.id, message: 'hello');
ChatroomMessage.create(user_id: user1.id, chatroom_id: room1.id, message: 'i like trains');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room1.id, message: 'i dont like trains');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room1.id, message: 'we cannot be friends');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room2.id, message: 'can you believe some guy likes trains?');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room2.id, message: 'no way');
ChatroomMessage.create(user_id: user2.id, chatroom_id: room2.id, message: 'yes way');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room2.id, message: 'im calling the police');
ChatroomMessage.create(user_id: user3.id, chatroom_id: room3.id, message: 'ello');
ChatroomMessage.create(user_id: user5.id, chatroom_id: room4.id, message: 'ello');
ChatroomMessage.create(user_id: user6.id, chatroom_id: room5.id, message: 'ello');
ChatroomMessage.create(user_id: user6.id, chatroom_id: room6.id, message: 'ello');
ChatroomMessage.create(user_id: user7.id, chatroom_id: room7.id, message: 'ello');
ChatroomMessage.create(user_id: user4.id, chatroom_id: room4.id, message: 'yes');
ChatroomMessage.create(user_id: user5.id, chatroom_id: room5.id, message: 'yes');
ChatroomMessage.create(user_id: user7.id, chatroom_id: room6.id, message: 'yes');

Post.create(user_id: user2.id, post_title: "Just bought this App!!!", post_content: "I am the captain now")
Post.create(user_id: user1.id, post_title: "yoooooo", post_content: "hello world")
Post.create(user_id: user1.id, post_title: "Going to Syd JS!!!", post_content: ".")
Post.create(user_id: user4.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user3.id, post_title: "GTX2080ti is overpriced", post_content: "dont @ me")
Post.create(user_id: user2.id, post_title: "todo list", post_content: "1. make money")
Post.create(user_id: user6.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user8.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user3.id, post_title: "Python is ok", post_content: "just ok")
Post.create(user_id: user3.id, post_title: "Valve index", post_content: "why does valve not want Australians to buy it?")
Post.create(user_id: user1.id, post_title: "check out my github", post_content: "something.git")
Post.create(user_id: user5.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user5.id, post_title: "kbbq when?", post_content: "Shinara or bust")
Post.create(user_id: user7.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user9.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user10.id, post_title: "hello world", post_content: "I've just signed up!")
Post.create(user_id: user7.id, post_title: "hey Alexa", post_content: "play despacito")
