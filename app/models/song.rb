# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  ord        :integer          not null
#  mp3_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

    validates :title, :album_id, :ord, :mp3_url, presence: true

    belongs_to :album

    has_many :saved_songs

    has_many :playlists,
        through: :saved_songs,
        source: :playlist
    
    has_one :artist,
        through: :album
end
