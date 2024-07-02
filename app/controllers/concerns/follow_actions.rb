# frozen_string_literal: true

module FollowActions
  extend ActiveSupport::Concern

  def follow
    @follow = Follow.new(
      user_id: current_user.id,
      followable_type: params[:followable_type],
      followable_id: params[:followable_id]
    )

    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unfollow
    followable_type = params[:followable_type]

    @follow = Follow.find_by(
      user_id: current_user.id,
      followable_type:,
      followable_id: params[:followable_id]
    )

    return unless @follow

    @follow.destroy
    render json: @follow
  end
end
