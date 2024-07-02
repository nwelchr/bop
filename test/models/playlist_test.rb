# frozen_string_literal: true

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

require 'test_helper'

class PlaylistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
