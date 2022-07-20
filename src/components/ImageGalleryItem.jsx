import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/styles.module.css";

export const ImageGalleryItem = ({ webformatURL, onClick, value }) => (
  <li className={styles.ImageGalleryItem} onClick={onClick}>
    <img
      className={styles.ImageGalleryItemImage}
      src={webformatURL}
      alt={value}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
