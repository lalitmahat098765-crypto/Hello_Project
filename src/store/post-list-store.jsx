import { createContext, useReducer } from "react";
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList, action) {
  return currPostList;
}

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = () => {};
  const deletePost = () => {};

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

const Post_List_Defaul = [
  {
    id: "1",
    title: "Going to Nepal",
    body: "I am going to Nepal for my vacation. There is peace in heart of Himalaya.",
    reactions: 2,
    userId: "user-4",
    tags: ["Vacation", "Enjoying", "Peace"],
  },
];

export default PostListProvider;
