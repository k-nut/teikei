set :application, 'teikei'
set :repo_url, 'git@github.com:teikei/teikei.git'
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml', '.env')
set :rails_env, 'production'

Airbrussh.configure do |config|
  config.banner = 'Teikei Deployment'
end

task :build_client do
  on roles(:app) do
    within release_path do
      execute './teikei.sh build_client'
    end
  end
end

before 'deploy:updated', 'build_client'
