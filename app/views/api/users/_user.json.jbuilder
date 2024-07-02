json.extract! user, :id, :username, :email, :followed_playlists, :followed_users, :followed_artists

json.playlistIds user.playlists.pluck(:id)
json.followed_playlists user.followed_playlists.pluck(:id)
json.followed_users user.followed_users.pluck(:id)
json.followed_artists user.followed_artists.pluck(:id)

json.profile_picture asset_path(user.profile_picture)
