import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST")
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
}

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (user_Id, post_Title, post_Content, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: post_Title,
        body: post_Content,
        reactions: reactions,
        userId: user_Id,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

export default PostListProvider;
