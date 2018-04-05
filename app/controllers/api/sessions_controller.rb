class Api::SessionsController < ApplicationController

  before_action :require_logged_out!, only: [:create]
  
  def new
  end

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :email, :password)
  end
end
