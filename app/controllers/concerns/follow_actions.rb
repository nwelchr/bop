module FollowActions
    extend ActiveSupport::Concern

    # def followed_users
    #     @follows = User.find(params[:id]).follows.where('followable_type = ?', 'User')
    # end

    # def followed_playlists
    #     @follows = User.find(params[:id]).follows.where('followable_type = ?', 'Playlist')
    # end

    # def followed_artists
    #     @follows = User.find(params[:id]).follows.where('followable_type = ?', 'Artist')
    # end

    # def followed_albums
    #     @follows = User.find(params[:id]).follows.where('followable_type = ?', 'Album')
    # end

    def follow
        @follow = Follow.new(
            user_id: current_user.id,
            followable_type: params[:followable_type],
            followable_id: params[:followable_id],
        )

        if @follow.save
            render json: 'api/follows/follow'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end 

    def unfollow
        followable_type = params[:followable_type]

        @follow = Follow.find_by(
            user_id: current_user.id,
            followable_type: followable_type,
            followable_id: params[:followable_id]
        )

        if @follow
            @follow.destroy
            render json: [`Successfully unfollowed #{followable_type}.downcase!`]
        end
    end



end