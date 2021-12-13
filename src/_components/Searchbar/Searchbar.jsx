import { Component } from "react";
import s from "./Searchbar.module.scss";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  onChangeValue = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  getValue = (e) => {
    e.preventDefault();
    this.props.getQuery(this.state.value);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.getValue}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.onChangeValue}
            value={this.state.value}
            className={s.SearchFormInput}
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
