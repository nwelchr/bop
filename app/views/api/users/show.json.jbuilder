# frozen_string_literal: true

json.partial! 'api/users/user', user: @user

# albumIds = []
# @user.playlists.each { |playlist| albumIds << playlist.songs.map{ |song| song.album.id} }
# json.albumIds albumIds.flatten.uniq

# artistIds = []
# @user.playlists.each { |playlist| artistIds << playlist.songs.map{ |song| song.artist.id} }
# json.artistIds artistIds.flatten.uniq

json.followerIds @user.follower_ids

json.playlists (@user.playlists + @user.followed_playlists).sort_by(&:updated_at).reverse.map do |playlist|
  json.partial! 'api/playlists/playlist', playlist:
end

json.followers @user.followers
json.followedUsers @user.followed_users

json.followedArtists @user.followed_artists do |artist|
  json.partial!('api/artists/artist', artist:)
  json.songIds(artist.songs.sort_by { |song| song.album.year }.reverse.take(5).map(&:id))
end
