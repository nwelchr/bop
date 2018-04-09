class Api::PlaylistsController < ApplicationController
  def new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = params[:shouldFetchAll] ? Playlist.all : current_user.playlists
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def edit
    @playlist = Playlist.find(params[:id])
    render :edit
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update_attributes(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy!
    render 'api/playlists/show'
  end

  private 

  def playlist_params
    params.require(:playlist).permit(:name, :creator_id)
  end
end
