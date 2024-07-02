# frozen_string_literal: true

module Api
  class AlbumsController < ApplicationController
    def index
      @albums = Album.all.includes(:songs, :artist)
      render :index
    end

    def show
      @album = Album.find(params[:id])
      render :show
    end
  end
end
