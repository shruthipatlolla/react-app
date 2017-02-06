import React from 'react';


class LikeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);

  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  

  render() {
    return (
      <div>
        <span>{this.state.likesCount} </span> Likes
        <div>
          <button bsStyle="primary" bsSize="small" onClick={this.onLike}>Like</button>
          &nbsp;
          
        </div>
      </div>
    );
  }
}

export default LikeComponent;