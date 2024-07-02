# frozen_string_literal: true

# == Schema Information
#
# Table name: saved_songs
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SavedSong < ApplicationRecord
  belongs_to :playlist
  belongs_to :song
end
