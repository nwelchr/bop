class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all.includes(:songs)
        render :index
    end

    def show
        @album = Album.find(params[:id])
        render :show
    end

end
