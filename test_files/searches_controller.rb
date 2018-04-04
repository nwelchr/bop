class SearchesController < ApplicationController
  def index
    search do
      @albums = Album.where(title: params[:query_string])
      @artists = Artist.where(name: params[:query_string])
      @songs = Song.where(title: params[:query_string])
      @tracks = Track.where(title: params[:query_string])

      sort_by_popularity(concat(@albums, @artists, @songs, @tracks))
      sort_by_num_plays(concat(@albums, @artists, @songs, @tracks))
      sort_by_relevance(concat(@albums, @artists, @songs, @tracks))
      sort_by_query_exactness(concat(@albums, @artists, @songs, @tracks))
    end

  end

  private
  def query_string
    Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
    /#{Regexp.escape params[:query]}/i
    %r(#{Regexp.escape(params[:query])})i
    /#{params[:query]}/i
  end

  def search(&prc)
    if params[:query]
      @search_results = yield
  end

end

##############################

class SearchesController < ApplicationController

  def index
    Album
      .joins(:artist, :playlist, :song)
      .where(album.title    =~ :query_string or
             artist.title   =~ :query_string or
             playlist.title =~ :query_string or
             song.title     =~ :query_string)
      .order(num_plays: 'DESC') # Stored in local state or... in database? Constantly persisted when someone listens to a new song? Trying to figure out some way to filter the results or show the 'best'/'most relevant' result
  end

  private

  def query_string
    Regexp.new(Regexp.escape(params[:query]), Regexp::IGNORECASE)
    /#{Regexp.escape params[:query]}/i
    %r(#{Regexp.escape(input_str)})i
    /#{params[:query]}/i
  end


end
