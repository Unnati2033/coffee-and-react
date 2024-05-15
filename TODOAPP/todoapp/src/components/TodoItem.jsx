import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  function handleDelete() {
    console.log("delete button clicked for item", item);
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line}></hr>
    </div>
  );
}
