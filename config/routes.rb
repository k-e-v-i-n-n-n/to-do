Rails.application.routes.draw do
  # resources :sessions

  scope :api do

    post "/signup", to: "users#create"

    post "/login", to: "sessions#create"
  
    delete "/logout", to: "sessions#destroy"
  
    get "/me", to: "users#show"
    
  resources :todos
  resources :users
  resources :modes



  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
