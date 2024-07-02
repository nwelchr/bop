# frozen_string_literal: true

module Api
  class SearchesController < ApplicationController
    def index
      render json: ['Must enter a search query'], status: :unprocessable_entity if params[:query].empty?

      @playlists = Playlist.where('lower(name) ~* ?', query_string).sort_by do |playlist|
        match_weight(playlist.name)
      end.reverse
      @albums = Album.where('lower(title) ~* ?', query_string).sort_by { |album| match_weight(album.title) }.reverse
      @artists = Artist.where('lower(name) ~* ?', query_string).sort_by { |artist| match_weight(artist.name) }.reverse
      @songs = Song.where('lower(title) ~* ?', query_string).sort_by { |song| match_weight(song.title) }.reverse
      @users = User.where('lower(username) ~* ?', query_string).sort_by { |user| match_weight(user.username) }.reverse
    end

    private

    def query_string
      # Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
      # /#{Regexp.escape params[:query]}/i
      # %r(#{Regexp.escape(params[:query])})i
      "^#{params[:query].downcase}|\s#{params[:query].downcase}"
    end

    def match_weight(obj)
      obj.downcase.scan(Regexp.new(params[:query])).count
    end
  end
end
