// import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/styles.module.css";
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({ images, largeImage }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => {
      const handleItemClick = () => largeImage(largeImageURL);
      return (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={handleItemClick}
        />
      );
    })}
  </ul>
);
