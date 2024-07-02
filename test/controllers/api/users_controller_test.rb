# frozen_string_literal: true

require 'test_helper'

module Api
  class UsersControllerTest < ActionDispatch::IntegrationTest
    test 'should get new' do
      get api_users_new_url
      assert_response :success
    end

    test 'should get create' do
      get api_users_create_url
      assert_response :success
    end
  end
end
