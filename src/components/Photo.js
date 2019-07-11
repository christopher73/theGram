import React from 'react';

class Photo extends React.Component {
  render() {
    const { post, i } = this.props; // missing comment implementation

    return (
      <div className="col-sm-4 my-3 ">
        {' '}
        <div className="card m-auto ">
          <img src={post.display_src} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{post.caption}</p>
            <button
              onClick={this.props.increment.bind(null, i)}
              className="btn btn-primary">
              &hearts; {post.likes}
            </button>
            {/* <button
              // onClick={this.props.b}
              className="btn btn-success btn-sm float-right">
              LIKE
              <span key={post.likes} className="badge badge-info mx-auto">
                {post.likes}
              </span>
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
