import { createStore } from 'redux';
import rootReducer from './reducers/index';

import posts from './data/post';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};
const store = createStore(rootReducer, defaultState);

export default store;
