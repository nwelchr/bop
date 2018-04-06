Rails.application.routes.draw do
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists
    resource :session, only: [:new, :create, :destroy]
  end

  root "static_pages#root"
end
