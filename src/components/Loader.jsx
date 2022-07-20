import React from "react";
import styles from "../styles/styles.module.css";

export default function Loader() {
  return (
    <div className={styles.BoxLoader1}>
      <div className={styles.BoxLoader2}>
        <h2 className={styles.Loader} data-text="Loading...">
          Loading...
        </h2>
      </div>
    </div>
  );
}
