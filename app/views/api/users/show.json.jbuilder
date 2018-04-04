json.extract! @user, :username, :email
json.image_url asset_path(@user.profile_picture)
