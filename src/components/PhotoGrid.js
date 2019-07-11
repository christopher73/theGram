import React from 'react';
import Photo from './Photo';
import Main from './Main';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <Main />
        <div className="container">
          <div className="row ">
            {' '}
            {this.props.posts.map((post, i) => (
              <Photo {...this.props} key={i} i={i} post={post} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PhotoGrid;
