import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";
class Posts extends Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount = () => {
  //   this.fetchPosts();
  // };

  // fetchPosts = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(
  //       data => this.props.setPosts(data)
  //       //   this.setState({ posts: data })
  //     );
  // };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    let { posts } = this.props;
    const postItems = posts.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.postData.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    setPosts: data =>
      dispatch({ type: "ADD_POST", payload: { data: data, single: false } })
  };
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { fetchPosts }
)(Posts);
