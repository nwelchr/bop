# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    get 'searches/index'
  end

  namespace :api, defaults: { format: :json } do
    resources :albums, only: %i[index show]
    resources :artists, only: %i[index show]
    resources :playlists
    resources :songs, only: %i[index show]
    resources :searches, only: [:index]
    resources :users, only: %i[index show create destroy]
    resource :session, only: %i[new create destroy]

    %w[users playlists artists].each do |type|
      # get "#{type}/:id/follows/#{type}", to: "#{type}#followed_#{type}"
      post "#{type}/:followable_id/follow", to: "#{type}#follow"
      delete "#{type}/:followable_id/unfollow", to: "#{type}#unfollow"
    end

    # get "users/:id/follows/users", to: "api/users#followed_users"
    # post "users/:followable_id/follow", to: "api/users#follow"
    # delete "users/:followable_id/unfollow", to: "api/users#unfollow"

    # get "playlists/:id/follows/playlists", to: "api/playlists#followed_playlists"
    # post "playlists/:followable_id/follow", to: "api/playlists#follow"
    # delete "playlists/:followable_id/unfollow", to: "api/playlists#unfollow"

    # get "artists/:id/follows/artists", to: "api/artists#followed_artists"
    # post "artists/:followable_id/follow", to: "api/artists#follow"
    # delete "artists/:followable_id/unfollow", to: "api/artists#unfollow"

    post 'playlists/:id/songs', to: 'playlists#add_song'
    delete 'playlists/:id/songs', to: 'playlists#remove_song'
  end

  root 'static_pages#root'
end

# ['users', 'playlists', 'artists'].each do |type|
#   get "#{type}/:id/follows/#{type}", to: "api/#{type}$followed_#{type}", defaults: { format: :json }
#   post "#{type}/:followable_id/follow", to: "api/#{type}#follow", defaults: { format: :json }
#   delete "#{type}/:followable_id/unfollow", to: "api/#{type}#unfollow", defaults: { format: :json }
#   end
