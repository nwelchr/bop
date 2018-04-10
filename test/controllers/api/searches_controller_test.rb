require 'test_helper'

class Api::SearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_searches_index_url
    assert_response :success
  end

end
