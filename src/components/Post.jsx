import { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card" style={{ width: "30rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className={`badge text-bg-primary ${styles.tag}`}>
            {tag}
          </span>
        ))}
      </div>
      <div
        className="alert alert-success"
        style={{ margin: "0px 10px 10px 10px" }}
        role="alert"
      >
        This post is reacted by {post.reactions} people.
      </div>
    </div>
  );
}
export default Post;
