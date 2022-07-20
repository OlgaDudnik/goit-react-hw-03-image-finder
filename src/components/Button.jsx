import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/styles.module.css";

export const Button = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.Button}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
