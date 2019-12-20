class ChatroomUsersController < ApplicationController
  before_action :authenticate_user
  before_action :set_chatroom_user, only: [:show, :update, :destroy]

  # GET /chatroom_users
  # GET /chatroom_users.json
  def index
    @chatroom_users = ChatroomUser.all
  end

  # GET /chatroom_users/1
  # GET /chatroom_users/1.json
  def show
  end

  # POST /chatroom_users
  # POST /chatroom_users.json
  def create
    @chatroom_user = ChatroomUser.new(chatroom_user_params)

    if @chatroom_user.save
      render :show, status: :created, location: @chatroom_user
    else
      render json: @chatroom_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chatroom_users/1
  # PATCH/PUT /chatroom_users/1.json
  def update
    if @chatroom_user.update(chatroom_user_params)
      render :show, status: :ok, location: @chatroom_user
    else
      render json: @chatroom_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chatroom_users/1
  # DELETE /chatroom_users/1.json
  def destroy
    @chatroom_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chatroom_user
      @chatroom_user = ChatroomUser.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def chatroom_user_params
      params.fetch(:chatroom_user, {})
    end
end
