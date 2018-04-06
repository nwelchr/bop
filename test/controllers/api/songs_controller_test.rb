require 'test_helper'

class Api::SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_songs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_songs_show_url
    assert_response :success
  end

end
