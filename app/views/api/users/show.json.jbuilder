json.partial! 'api/users/user', user: @user

json.playlists (@user.playlists + @user.followed_playlists).sort_by{ |playlist| playlist.updated_at }.reverse.map do |playlist|
    json.partial! 'api/playlists/playlist', playlist: playlist
end

json.followers @user.followers
json.followedUsers @user.followed_users

json.followedArtists @user.followed_artists do |artist|
    json.partial! 'api/artists/artist', artist: artist
    json.songIds artist.songs.sort_by{ |song| song.album.year }.reverse.take(5).map{ |song| song.id }
end