import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  posts: []
};

const postReducer = (state = initialState, action) => {
  let posts = JSON.parse(JSON.stringify(state.posts));
  switch (action.type) {
    case FETCH_POSTS:
      let data = action.payload;
      posts = [...data];
      // if (action.payload.single) {
      //   posts = [data, ...posts];
      // } else {
      //   posts = [...data];
      // }
      return {
        ...state,
        posts: posts
      };

    case NEW_POSTS:
      let prevPost = [...state.posts];
      prevPost = [action.payload, ...prevPost];

      return {
        ...state,
        posts: prevPost
      };

    default:
      return state;
  }
};

export default postReducer;
