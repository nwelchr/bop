Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists
    resources :songs, only: [:index, :show]
    resources :users, only: [:create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

  root "static_pages#root"
end
