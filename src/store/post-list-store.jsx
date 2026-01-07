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
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    POST_LIST_DEFAULT
  );
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

const POST_LIST_DEFAULT = [
  {
    id: "1",
    title: "Going to Nepal",
    body: "I am going to Nepal for my vacation. There is peace in heart of Himalaya.",
    reactions: 2,
    userId: "user-4",
    tags: ["Vacation", "Enjoying", "Peace"],
  },
  {
    id: "2",
    title: "Paas ho gaya bhaiya",
    body: "Chalo B-Tech me santi se pass hogay. Itni masti karne ke badh bhi.",
    reactions: 15,
    userId: "user-2",
    tags: ["Graduation", "Unbelievable", "Astoning"],
  },
];

export default PostListProvider;
