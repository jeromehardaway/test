import API from "../API";

export default {
  getAllTweets() {
    // console.log(1, "TweetActions.getAllTweets");
    API.getAllTweets();
  },

  sendTweet(body) {
    API.createTweet(body);
  }
}

// class TweetActions {
//   render () {
//     return (
//       <li className="collection-item avatar">
//         <img className="material-icons circle" src={this.props.gravatar} />
//         <span className="title">{this.props.name}</span>
//         <time>{this.props.formattedDate}</time>
//         <p>{this.props.body}</p>
//       </li>
//
//     )
//   }
// }
// export default TweetActions;
