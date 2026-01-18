import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostList } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const post_TitleElement = useRef();
  const post_contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user_Id = useridElement.current.value;
    const post_Title = post_TitleElement.current.value;
    const post_Content = post_contentElement.current.value;
    const [likes, dislikes] = reactionsElement.current.value.split(" ");
    const tags = tagsElement.current.value.split(" ");

    useridElement.current.value = "";
    post_TitleElement.current.value = "";
    post_contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: post_Title,
        body: post_Content,
        reactions: {
          likes,
          dislikes,
        },
        userId: user_Id,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Your UserId
          </label>

          <input
            type="text"
            ref={useridElement}
            className="form-control"
            id="user-id"
            placeholder="Enter your id here."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>

          <input
            type="text"
            ref={post_TitleElement}
            className="form-control"
            id="title"
            placeholder="Enter your post title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="post-content" className="form-label">
            Post Content
          </label>

          <textarea
            type="text"
            ref={post_contentElement}
            className="form-control"
            id="post-content"
            placeholder="Enter your post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of Reactions
          </label>

          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="Please enter likes and dislike post using space"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tags
          </label>

          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please Enter your tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
