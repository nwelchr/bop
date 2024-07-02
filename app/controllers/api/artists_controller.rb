# frozen_string_literal: true

module Api
  class ArtistsController < ApplicationController
    include FollowActions

    def index
      @artists = Artist.all.includes(:songs)
      render :index
    end

    def show
      @artist = Artist.find(params[:id])
      render :show
    end
  end
end
