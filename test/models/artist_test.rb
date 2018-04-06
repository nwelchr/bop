# == Schema Information
#
# Table name: artists
#
#  id                     :integer          not null, primary key
#  name                   :string           not null
#  artist_artwork_url     :string           not null
#  background_artwork_url :string
#  genre_id               :integer          not null
#  about                  :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

require 'test_helper'

class ArtistTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
