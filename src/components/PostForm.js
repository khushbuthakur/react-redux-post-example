import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import PropTypes from "prop-types";
class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let { title, body } = this.state;

    const post = {
      title,
      body
    };

    this.props.createPost(post);

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(
    //     data => this.sendDataToRedux(data)
    //     // console.log(data)
    //   );
  };

  sendDataToRedux = data => {
    this.props.addPost(data);
    this.setState({ title: "", body: "" });
  };

  render() {
    let { title, body } = this.state;
    return (
      <div>
        <h1>Add Posts </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title : </label> <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Body : </label> <br />
            <textarea name="body" value={body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Add Posts</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: data =>
      dispatch({ type: "ADD_POST", payload: { data: data, single: true } })
  };
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  // mapDispatchToProps
  { createPost }
)(PostForm);
