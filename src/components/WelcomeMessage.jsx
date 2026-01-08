import styles from "./WelcomeMessage.module.css";
function WelcomeMessage({ onGetPostClick }) {
  return (
    <center>
      <h1 className={styles.message}>There are no posts.</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
}

export default WelcomeMessage;
