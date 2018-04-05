json.extract! user, :username, :email
json.profile_picture asset_path(user.profile_picture)