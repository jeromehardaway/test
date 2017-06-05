import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    // console.log(3, "ServerAction.receivedTweets (success)");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets // or ES6 rawTweets if rawTweets == rawTweets
    })
  },

  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },

  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    })
  },

  followedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower
    })
  }
}
