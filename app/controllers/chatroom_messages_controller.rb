class ChatroomMessagesController < ApplicationController
  before_action :authenticate_user
  

  # GET /chatroom_messages
  # GET /chatroom_messages.json
  def index
    @chatroom_messages = ChatroomMessage.all
  end

  # GET /chatroom_messages/1
  # GET /chatroom_messages/1.json
  def show
  end

  # POST /chatroom_messages
  # POST /chatroom_messages.json
  def create
    @chatroom_message = ChatroomMessage.new(chatroom_message_params)

    if @chatroom_message.save
    else
      render json: @chatroom_message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chatroom_messages/1
  # PATCH/PUT /chatroom_messages/1.json
  def update
    if @chatroom_message.update(chatroom_message_params)
      render :show, status: :ok, location: @chatroom_message
    else
      render json: @chatroom_message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chatroom_messages/1
  # DELETE /chatroom_messages/1.json
  def destroy
    @chatroom_message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chatroom_message
      @chatroom_message = ChatroomMessage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def chatroom_message_params
      params.require(:chatroom_messages).permit(:user_id, :chatroom_id, :message)
    end
end
