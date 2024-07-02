# frozen_string_literal: true

module Api
  class PlaylistsController < ApplicationController
    include FollowActions

    def new; end

    def create
      @playlist = Playlist.new(playlist_params)
      @playlist.creator_id = current_user.id
      if @playlist.save
        render 'api/playlists/show'
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @playlists = if params[:shouldFetchAll]
                     Playlist.all.includes(:songs,
                                           :creator)
                   else
                     current_user.playlists.includes(:songs,
                                                     :creator)
                   end
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
      if @playlist.update(playlist_params)
        render 'api/playlists/show'
      else
        render json: @playlist.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @playlist = Playlist.find(params[:id])
      if current_user.playlists.include?(@playlist)
        @playlist.destroy!
        render 'api/playlists/show'
      else
        render json: ['You do not own this playlist.']
      end
    end

    def add_song
      @playlist = Playlist.find(params[:id])
      if current_user.playlists.include?(@playlist)
        @song_id = params[:songId]
        @saved_song = SavedSong.new(playlist_id: @playlist.id, song_id: @song_id)
        if @saved_song.save
          render :show
        else
          render json: @saved_song.errors.full_messages, status: :unprocessable_entity
        end
      else
        render json: ['Cannot add song to other user\'s playlist']
      end
    end

    def remove_song
      @playlist = Playlist.find(params[:id])
      if current_user.playlists.include?(@playlist)
        playlist_id = params[:id]
        song_id = params[:songId]

        @saved_song = SavedSong.where('playlist_id = :playlist_id AND song_id = :song_id', playlist_id:,
                                                                                           song_id:).first

        if @saved_song.destroy
          render :show
        else
          render json: ['Issue with removing song']
        end
      else
        render json: ['Cannot remove song from other user\'s playlist']
      end
    end

    private

    def add_song_params
      { playlist_id: @playlist_id, song_id: @song_id }
    end

    def playlist_params
      params.require(:playlist).permit(:name, :creator_id)
    end
  end
end
