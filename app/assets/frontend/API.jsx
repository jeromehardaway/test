import ServerAction from "./actions/ServerActions";

export default {
  getAllTweets() {
    // console.log(2, "API.$get");
    $.get({
      url: "/tweets",
      dataType: "json"
    })
    .success( rawTweets => ServerAction.receivedTweets(rawTweets) )
    .error(error => console.log(error))
  },

  createTweet(body) {
    $.post({
      url: "/tweets",
      data: { tweet: { body: body } },
      dataType: "json"
    })
    .success(rawTweet => ServerAction.receivedOneTweet(rawTweet))
    .error(error => console.log(error))
  },

  getAllUsers() {
    $.get({
      url: "/followers/random",
      dataType: "json"
    })
    .success( rawUsers => ServerAction.receivedUsers(rawUsers) )
    .error(error => console.log(error));
  },

  followUser(userId) {
    $.post({
      url: "/followers",
      dataType: "json",
      data: { user: { user_id: userId } }
    })
    .success(rawFollower => ServerAction.followedOneFollower(rawFollower))
    .error(error => console.log(error))
  }
}
