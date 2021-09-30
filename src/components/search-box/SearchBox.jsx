import React from "react";
import styles from './SearchBox.module.css'

export const SearchBox = (props) => {
  const { handleChange, placeholder } = props
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
