import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/view/:postId" component={Single} />
    </Router>
  </Provider>
);
ReactDOM.render(router, document.getElementById('root'));
