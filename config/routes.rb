Rails.application.routes.draw do
  namespace :api do
    get 'searches/index'
  end

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists
    resources :songs, only: [:index, :show]
    resources :searches, only: [:index]
    resources :users, only: [:index, :show, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]

    post 'playlists/:id/songs', to: 'playlists#add_song'
    delete 'playlists/:id/songs', to: 'playlists#remove_song'
  end

  root "static_pages#root"
end
