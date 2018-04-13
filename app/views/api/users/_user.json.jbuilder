json.extract! user, :id, :username, :email, :followed_playlists, :followed_users, :followed_artists

json.followed_playlists user.followed_playlists.pluck(:id)
json.followed_users user.followed_users.pluck(:id)
json.followed_artists user.followed_artists.pluck(:id)
json.playlistIds user.playlists.pluck(:id)

albumIds = []
user.playlists.each { |playlist| albumIds << playlist.songs.map{ |song| song.album.id} }
json.albumIds albumIds.flatten.uniq

artistIds = []
user.playlists.each { |playlist| artistIds << playlist.songs.map{ |song| song.artist.id} }
json.artistIds artistIds.flatten.uniq

json.profile_picture asset_path(user.profile_picture)