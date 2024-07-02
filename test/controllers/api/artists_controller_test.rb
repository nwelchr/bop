# frozen_string_literal: true

require 'test_helper'

module Api
  class ArtistsControllerTest < ActionDispatch::IntegrationTest
    test 'should get index' do
      get api_artists_index_url
      assert_response :success
    end

    test 'should get show' do
      get api_artists_show_url
      assert_response :success
    end
  end
end
