# frozen_string_literal: true

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

if %w[development test].include?(ENV['RAILS_ENV'])
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new do |task|
    task.patterns = ['**/*.rb']
    task.fail_on_error = true
  end
end