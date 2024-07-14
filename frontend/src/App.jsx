import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const modalIsVisibleHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <>
      <MainHeader onCreatePost={modalIsVisibleHandler} />
      <main>
        <PostsList
          onCloseModal={modalIsVisibleHandler}
          modalIsVisible={modalIsVisible}
        />
      </main>
    </>
  );
}

export default App;
