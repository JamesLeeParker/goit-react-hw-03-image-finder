import { Component } from "react";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "../_components/Searchbar/Searchbar";
import ImageGallery from "../_components/ImageGallery/ImageGallery";
import Button from "../_components/Button/Button";
import Loader from "../_components/Loader/Loader";
import s from "./App.module.scss";

const API_KEY = "24469926-df466a8874aa59a8d5a89b872";

export default class App extends Component {
  state = {
    query: "",
    images: [],
    perPage: 12,
    loadding: false,
  };

  componentDidMount() {
    this.getFetch();
  }

  componentDidUpdate() {
    this.getFetch();
  }

  clearState = () => {
    this.setState({ perPage: 12 });
  };

  getFetch = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ images: data.hits }));
  };

  getQuery = (value) => {
    this.setState({ query: value });
  };

  getLoadMore = () => {
    this.setState((prevState) => {
      prevState.perPage += 12;
    });
  };

  render() {
    return (
      <>
        <Searchbar getQuery={this.getQuery} />
        <ImageGallery images={this.state.images} />
        {/* {this.state.images.length > 0 && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={60}
            width={60}
            timeout={2000}
          /> */}
        {/* )} */}
        <Loader />
        <Button getLoadMore={this.getLoadMore} />
      </>
    );
  }
}
