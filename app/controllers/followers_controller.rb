class FollowersController < ApplicationController
  def random
    @users = User.random(current_user.id)

    respond_to do |f|
      f.html
      f.json { render json: @users }
    end
  end

  def create
    @follower = Follower.create(follower_params)
    respond_to do |f|
      f.html
      f.json {
        render json: @follower, status: :created, location: follower_path(@follower)
      }
    end
  end

  private

  def follower_params
    params.require(:user).permit(:user_id)
      .merge(:followed_by => current_user.id)
  end
end
