json.extract! chatroom_message, :id, :message, :created_at, :updated_at
json.url chatroom_message_url(chatroom_message, format: :json)
