import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreator';
// import Main from './Main';
import PhotoGrid from './PhotoGrid';
const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};
const mapDispachToProps = dispach => {
  return bindActionCreators(actions, dispach);
};

const App = connect(
  mapStateToProps,
  mapDispachToProps
)(PhotoGrid);

export default App;
