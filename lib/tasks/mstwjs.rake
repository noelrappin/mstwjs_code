namespace :mstwjs do

  desc "install and set up bundler"
  task :init_bundler do
    `gem install bundler`
    `bundle install`
  end

  desc "Setup the task"
  task :setup => [:init_bundler, :"db:drop:all", :"db:create:all",
    :"db:migrate", :"db:seed", "db:test:prepare"] do
  end
end
