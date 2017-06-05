class TweetsController < ApplicationController
  before_action :authenticate_user!

  def index
    @tweets = Tweet.stream_for(current_user.id)

    respond_to do |f|
      f.html
      f.json { render json: @tweets }
    end
  end

  def create
    @tweet = current_user.tweets.create(tweet_params)

    respond_to do |f|
      f.html
      f.json {
        render json: @tweet, status: :created, location: tweet_path(@tweet)
      }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body)
  end
end
