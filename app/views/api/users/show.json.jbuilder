json.partial! 'api/users/user', user: @user

json.playlists @user.playlists.sort_by{ |playlist| playlist.updated_at }.reverse.map do |playlist|
    json.partial! 'api/playlists/playlist', playlist: playlist
end