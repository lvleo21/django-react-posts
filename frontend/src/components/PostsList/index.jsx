import { useState } from "react";

import styles from "./style.module.css";

import Post from "../Post";
import PostAdd from "../PostAdd";
import Modal from "../Modal";

import createPost from "../../api/posts";

const PostsList = ({ modalIsVisible, onCloseModal }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    createPost(postData);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  const renderPosts = () => {
    return posts.map((element, key) => {
      return (
        <Post key={key} author={element.author} message={element.message} />
      );
    });
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onCloseModal}>
          <PostAdd onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={styles.posts}>{renderPosts()}</ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Ainda não há postagens</h2>
          <p>Comece a adicionar algumas</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
