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

require 'test_helper'

class SavedSongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
