# == Schema Information
#
# Table name: follows
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  followable_type :string
#  followable_id   :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
