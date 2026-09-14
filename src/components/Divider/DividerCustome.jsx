import React from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Divider.module.css";

export default function DividerCustom({ theme = "light" }) {
  const themeClass = styles[theme] || styles.light;
  return (
    <div className={`${styles.dividerCustom} ${themeClass}`}>
      <div className={styles.dividerLine}></div>
      <div className={styles.dividerIcon}>
        <FaStar className={styles.starIcon} />
      </div>
      <div className={styles.dividerLine}></div>
    </div>
  );
}
