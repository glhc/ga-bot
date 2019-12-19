json.extract! chatroom, :id, :user_id, :room_name, :created_at, :updated_at
json.url chatroom_url(chatroom, format: :json)
