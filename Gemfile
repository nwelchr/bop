source 'https://rubygems.org'

ruby '3.2.0'

gem 'rails', '~> 7.0'
gem 'pg', '>= 1.1', '< 2.0'
gem 'puma', '>= 6.0'
gem 'sassc-rails', '>= 2.0.0'
gem 'uglifier', '>= 4.2.0'
gem 'coffee-rails', '~> 5.0'
gem 'jbuilder', '~> 2.10'
gem 'bcrypt', '~> 3.1.7'
gem 'nokogiri', '>= 1.11.1'
gem 'jquery-rails', '~> 4.4'
gem 'webpacker', '~> 5.0'

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 3.35'
  gem 'selenium-webdriver'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'annotate'
  gem 'jquery-ui-rails'
  gem 'rspec-rails'
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
end

group :development do
  gem 'web-console', '>= 4.0.1'
  gem 'listen', '~> 3.2'
  # gem 'spring'
  # gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'guard'
  gem 'guard-livereload', require: false
  gem 'guard-rspec', require: false
  gem 'rack-livereload'
  gem 'rb-fsevent', require: false
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
