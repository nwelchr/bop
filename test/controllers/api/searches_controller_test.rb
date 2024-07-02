# frozen_string_literal: true

require 'test_helper'

module Api
  class SearchesControllerTest < ActionDispatch::IntegrationTest
    test 'should get index' do
      get api_searches_index_url
      assert_response :success
    end
  end
end
