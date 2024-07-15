import styles from "./style.module.css";

function PostAdd({ onCancel, onAddPost }) {
  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      author: event.target.author.value,
      message: event.target.message.value,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="author">Autor</label>
        <input type="text" id="author" required />
      </p>
      <p>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" required rows={3} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button>Enviar</button>
      </p>
    </form>
  );
}

export default PostAdd;
