import { useState } from "react";
import Navigation from "./Navigation";
import styles from "./InfiniteScrollScreen.module.css";

const InfiniteScrollScreen = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)
  );

  const loadMore = () => {
    const newItems = Array.from(
      { length: 10 },
      (_, i) => `Item ${items.length + i + 1}`
    );
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <div className={styles.infinite_scroll}>
      <h2 className={styles.title}>Бесконечная лента</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.list_item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <button className={styles.btn} onClick={loadMore}>
        Загрузить еще
      </button>
      <Navigation />
    </div>
  );
};

export default InfiniteScrollScreen;
