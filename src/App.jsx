import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import styles from "./App.module.css";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [selecetedTab, setSelectedTab] = useState("Home");
  return (
    <>
      <PostListProvider>
        <div className={styles.appContainer}>
          <Sidebar
            selecetedTab={selecetedTab}
            setSelecetedTab={setSelectedTab}
          />
          <div className={styles.content}>
            <Header />
            {selecetedTab === "Home" ? <PostList /> : <CreatePost />}
            {PostList.length === 0 && <WelcomeMessage />}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
