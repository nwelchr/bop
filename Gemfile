# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.2.0'

gem 'bcrypt', '~> 3.1.7'
gem 'coffee-rails', '~> 5.0'
gem 'jbuilder', '~> 2.10'
gem 'jquery-rails', '~> 4.4'
gem 'nokogiri', '>= 1.11.1'
gem 'pg', '>= 1.1', '< 2.0'
gem 'puma', '>= 6.0'
gem 'rails', '~> 7.0'
gem 'sassc-rails', '>= 2.0.0'
gem 'uglifier', '>= 4.2.0'
gem 'webpacker', '~> 5.0'

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'annotate'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capybara', '~> 3.35'
  gem 'jquery-ui-rails'
  gem 'pry-rails'
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-performance', require: false
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '~> 3.2'
  gem 'web-console', '>= 4.0.1'
  gem 'guard'
  gem 'guard-livereload', require: false
  gem 'guard-rspec', require: false
  gem 'rack-livereload'
  gem 'rb-fsevent', require: false
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
