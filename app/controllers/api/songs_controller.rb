# frozen_string_literal: true

module Api
  class SongsController < ApplicationController
    def index
      @songs = Song.all.includes(:artist, :album)
      render :index
    end

    def show
      @song = Song.find(params[:id])
      render :show
    end
  end
end
