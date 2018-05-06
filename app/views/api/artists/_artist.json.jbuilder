json.extract! artist, :id, :name, :genre_id, :about
json.artist_artwork_url asset_path(artist.artist_artwork_url)
json.background_artwork_url asset_path(artist.background_artwork_url)
 
json.followerIds artist.follower_ids

if artist.songs.length > 0
    json.songIds artist.songs.sort_by{ |song| song.album.year }.reverse.take(5).pluck(:id)
end