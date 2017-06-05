import React from 'react';
import TweetActions from '../actions/TweetActions'

class TweetBox extends React.Component {
// or write as
// export default class TweetBox extends React.Component
// excluding the export line at the bottom

  // React ES6 class syntax
  // component fn are not automatically bound to 'this'
  // manual binding is necessary to for usability
  sendTweet(event) {
    event.preventDefault();
    // call parent prop which in turn calls
    // the method to add the tweet in the list
    // this.props.sendTweet(this.refs.tweetTextArea.value);

    // flux way... call an action from view
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }

  render () {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field" >
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>What's new?</label>
            <button type="submit" className="btn right">Send</button>
          </div>

        </form>
      </div>
    );
  }
}
// this causes type to be of TweetBox()
export default TweetBox;

// while below results to fn()
// var TweetBox = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <form>
//           <div className="input-field" >
//             <textarea className="materialize-textarea" />
//             <label>What's new?</label>
//             <button className="btn right">Tweet</button>
//           </div>
//
//         </form>
//       </div>
//     );
//   }
// });
// module.exports = TweetBox;
