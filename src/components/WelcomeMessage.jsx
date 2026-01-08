import styles from "./WelcomeMessage.module.css";
function WelcomeMessage() {
  return (
    <center>
      <h1 className={styles.message}>There is no posts.</h1>;
    </center>
  );
}

export default WelcomeMessage;
