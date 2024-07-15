import { useState, useEffect } from "react";

import styles from "./style.module.css";

import Post from "../Post";
import PostAdd from "../PostAdd";
import Modal from "../Modal";

import { createPost, getPosts } from "../../api/posts";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const PostsList = ({ modalIsVisible, onCloseModal }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
  });

  useEffect(() => {
    setLoading(true);
    getPosts(pagination.currentPage).then((response) => {
      setPosts(response.results);
      setPagination({
        count: response.count,
        currentPage: response.current_page,
        numPages: response.num_pages,
        links: response.links,
      });
      setLoading(false);
      console.log(pagination);
    });
  }, [pagination.currentPage]);

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

  const paginationHandler = (operator) => {
    setPagination({
      ...pagination,
      currentPage: pagination.currentPage + operator,
    });
  };

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={onCloseModal}>
          <PostAdd onCancel={onCloseModal} onAddPost={addPostHandler} />
        </Modal>
      )}
      {loading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Carregando...</p>
        </div>
      )}
      {!loading && posts.length > 0 && (
        <ul className={styles.posts}>{renderPosts()}</ul>
      )}
      {!loading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Ainda não há postagens</h2>
          <p>Comece a adicionar algumas</p>
        </div>
      )}

      {!loading && (
        <div className={styles.pagination}>
          <button
            className={styles.button}
            disabled={pagination.links.previous === null}
            onClick={() => paginationHandler(-1)}
          >
            <MdArrowBackIosNew />
          </button>
          <p>
            {pagination.currentPage}/{pagination.numPages}
          </p>
          <button
            className={styles.button}
            disabled={pagination.links.next === null}
            onClick={() => paginationHandler(+1)}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      )}
    </>
  );
};

export default PostsList;
