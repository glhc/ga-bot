class ChatroomController < ApplicationController
    skip_before_action :verify_authenticity_token
    protect_from_forgery with: :null_session
    before_action :authenticate_user

    def read_chatrooms
        userid = 1
        chatrooms = Chatroom.where(user_id: userid)
        render json: chatrooms
    end

    def read_chatroom
        userid = 1
        chatrooms = Chatroom.where(user_id: userid)
        room_id = params[:id]
        room_info = Chatroom.find_by :id => room_id
        room_participants = ChatroomUser.where(chatroom_id: room_id)
        room_participants_detail = []
        room_participants.each do |user| 
            room_participants_detail.push(User.find_by :id => user.id)
        end
        room_messages = ChatroomMessage.where(chatroom_id: room_id)
        @query = {
            "chatrooms": chatrooms,
            "info": room_info, 
            "users": room_participants_detail, 
            "messages": room_messages,
        }
        render json: @query
    end

end
