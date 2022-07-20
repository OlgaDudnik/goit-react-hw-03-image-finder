import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "../styles/styles.module.css";
import Notiflix from "notiflix";

export class Searchbar extends Component {
  state = { value: "" };

  handleSubmit = (e) => {
    const { value } = this.state;
    e.preventDefault();

    if (value.trim() === "") {
      Notiflix.Notify.warning("Please enter something!");
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: "" });
  };

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_icon}></span>
          </button>
          <input
            className={styles.SearchForm_input}
            onChange={this.handleChangeValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
