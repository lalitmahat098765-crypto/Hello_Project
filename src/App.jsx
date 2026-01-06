import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import styles from "./App.module.css";
import Post from "./components/Post";
import PostList from "./components/PostList";
function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Sidebar />
        <div className={styles.content}>
          <Header />
          <CreatePost />
          <PostList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
