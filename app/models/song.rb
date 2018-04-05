class Song < ApplicationRecord

    validates :title, :artist_id, :album_id, :year, :ord, presence: true
    
end
