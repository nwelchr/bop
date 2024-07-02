# frozen_string_literal: true

@songs.each do |song|
  json.set! song.id do
    json.partial! 'api/songs/song', song:
  end
end
