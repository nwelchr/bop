Rails.application.routes.draw do

  namespace :api do
    get 'playlists/new'
  end

  namespace :api do
    get 'playlists/create'
  end

  namespace :api do
    get 'playlists/index'
  end

  namespace :api do
    get 'playlists/show'
  end

  namespace :api do
    get 'playlists/edit'
  end

  namespace :api do
    get 'playlists/update'
  end

  namespace :api do
    get 'playlists/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resource :session, only: [:new, :create, :destroy]
  end

  root "static_pages#root"
end
