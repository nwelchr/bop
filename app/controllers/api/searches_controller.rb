class Api::SearchesController < ApplicationController
  def index
    render json: ['Must enter a search query'], status: 422 if params[:query].empty?

    @playlists = Playlist.where("name ~* ?", query_string)
    @albums = Album.where("title ~* ?", query_string)
    @artists = Artist.where("name ~* ?", query_string)
    @songs = Song.where("title ~* ?", query_string)
    @users = User.where("username ~* ?", query_string)

  end

  private

  def query_string
    # Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
    # /#{Regexp.escape params[:query]}/i
    # %r(#{Regexp.escape(params[:query])})i
    "^#{params[:query].downcase}|\s#{params[:query].downcase}"
  end

  def weight(query)
    res = thing_you_compare_it_to.downcase.scan(/query/) # will return an array of all matches, count up matches??? or sort by array that has longest string?
  end
end
