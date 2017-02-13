import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

/*
Example which fetches a list of item from REST API and
renders if on the screen.
Also, logs and renders the error message if any error occurs in the
REST API call.
*/

class RedditListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.reloadPosts = this.reloadPosts.bind(this);
    // Set the initial state. You can also set the initial state in the
    // setState mentod.
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }

  getSubreddits() {
    const baseURL = 'http://www.reddit.com/r';
    return axios.get(`${baseURL}/reactjs.json`); //Using the axios lib to call the REST endpoint
  }

  setPosts() {
    this.getSubreddits()
      .then((res) => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  componentDidMount() {
    // This method is invoked immediately before mounting occurs.
    // It is called before render().
    this.setPosts();
  }

  renderLoading() {
    return (<div>Loading...</div>);
  }

  renderError() {
    return (<div> Uh oh: {this.state.error.message}</div>);
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }
    return (
      <ul>
        {this.state.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
  }

  reloadPosts() {
    this.setState({
      posts: [],
      loading: true,
      error: null
    });
    this.setPosts();
    this.renderPosts();
  }

  render() {
    // The render() method is required.
    // When called, it should examine this.props and this.state and return a single React element
    return (
      <div>
        <h2>Reddit Topic List for Reactjs</h2>
        {this.state.loading ? this.renderLoading() : this.renderPosts()}
        <div>
          <Button bsStyle="primary" bsSize="small" onClick={this.reloadPosts}>Reload Post</Button>
        </div>
      </div>
    );
  }
}

export default RedditListComponent;
