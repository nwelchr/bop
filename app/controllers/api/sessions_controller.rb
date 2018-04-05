class Api::SessionsController < ApplicationController

  before_action :require_logged_out!, only: [:create]
  
  def new
  end

  def create
    debugger
    if session_params[:username] == "" && session_params[:email]
      session_params[:username] = User.find_by_email(session_params[:email]).username
      @user = User.find_by_credentials(session_params[:email], session_params[:password], "email")
    elsif session_params[:email] == "" && session_params[:username] 
        session_params[:email] = User.find_by_username(session_params[:username]).email
        @user = User.find_by_credentials(session_params[:username], session_params[:password], "username")
    end
    debugger
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
