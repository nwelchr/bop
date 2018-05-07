# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           default("New Playlist"), not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord

    include Followable

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id

    has_many :saved_songs

    has_many :songs,
        through: :saved_songs,
        source: :song

    # def songs
    #     songs = []
    #     self.saved_songs.each do |saved_song|
    #         songs << Song.find(saved_song.song_id)
    #     end
    #     return songs
    # end
end
