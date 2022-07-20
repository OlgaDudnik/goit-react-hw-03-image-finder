import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "../styles/styles.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.onClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onClose);
  }

  render() {
    const { onClose, children } = this.props;
    return (
      <div className={styles.Overlay} onClick={onClose}>
        <div className={styles.Modal}>
          <img src={children} alt="" width={800} height={600} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
