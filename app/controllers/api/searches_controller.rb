class Api::SearchesController < ApplicationController
  def index
    render json: ['Must enter a search query'], status: 422 if params[:query].empty?

    @playlists = Playlist.where("name ~* ?", params[:query])
    @albums = Album.where("title ~* ?", params[:query])
    @artists = Artist.where("name ~* ?", params[:query])
    @songs = Song.where("title ~* ?", params[:query])
    @users = User.where("username ~* ?", params[:query])

  end

  private

  def query_string
    # Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
    # /#{Regexp.escape params[:query]}/i
    # %r(#{Regexp.escape(params[:query])})i
    /#{params[:query]}/i
  end

  def weight(query)
    res = thing_you_compare_it_to.downcase.scan(/query/) # will return an array of all matches, count up matches??? or sort by array that has longest string?
  end
end
