class Api::UsersController < ApplicationController
  include FollowActions
  
  def new
  end

  def index
    @users = User.all.includes(:playlists)
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_image)
  end
end
