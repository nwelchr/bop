class Api::SearchesController < ApplicationController
  def index
    render json: ['Must enter a search query'], status: 422 if params[:query].empty?

    debugger
    @playlists = Playlist.where("lower(name) ~* ?", query_string)
    @albums = Album.where("lower(title) ~* ?", query_string)
    @artists = Artist.where("lower(name) ~* ?", query_string)
    @songs = Song.where("lower(title) ~* ?", query_string)
    @users = User.where("lower(username) ~* ?", query_string)

  end

  private

  def query_string
    # Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
    # /#{Regexp.escape params[:query]}/i
    # %r(#{Regexp.escape(params[:query])})i
    "^#{params[:query].downcase}|\s#{params[:query].downcase}"
  end

  def match_weight(obj)
    obj.name.downcase.scan(Regexp.new(query_string)).count
  end
end
