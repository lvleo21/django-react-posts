import { MdPostAdd, MdMessage } from "react-icons/md";

import styles from "./style.module.css";

const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        Django React Posts
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Nova publicação
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
