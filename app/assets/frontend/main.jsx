import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Index from './components/Index'
import Follow from './components/Follow'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    // // render directly... or
    // R.render(<h1>Hello World</h1>,reactNode);

    // render from a component (inline or separate file)
    ReactDOM.render(
      <Router history={browserHistory}>
        <Router component={App}>
          <Router path="/" component={Index} />
          <Router path="/follow" component={Follow} />
        </Router>
      </Router>
      , reactNode
    );
  }
}
$(documentReady);
