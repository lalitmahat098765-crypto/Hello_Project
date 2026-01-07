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
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    useridElement.current.value = "";
    post_TitleElement.current.value = "";
    post_contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(user_Id, post_Title, post_Content, reactions, tags);
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
            placeholder="How are you feeling today?"
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
            placeholder="How you are feeling?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            No of Reactions
          </label>

          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post?"
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
