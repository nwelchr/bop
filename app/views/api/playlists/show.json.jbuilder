# frozen_string_literal: true

json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @playlist.songs.length.positive?
  json.songs do
    # access songs by most recently saved in frontend, leverage association
    @playlist.saved_songs.sort_by(&:updated_at).each do |saved_song|
      json.set! saved_song.song_id do
        json.partial! 'api/songs/song', song: Song.find(saved_song.song_id)
      end
    end
  end
end
