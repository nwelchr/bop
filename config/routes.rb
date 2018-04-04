Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

  root "static_pages#root"
end
