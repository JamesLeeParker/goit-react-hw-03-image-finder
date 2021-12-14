import { Component } from "react";
import s from "./ImageGalleryItem.module.scss";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
  state = {
    modalOpen: false,
    largeImg: "",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalByEscape);
  }

  openModal = (e) => {
    if (e.target === e.currentTarget) {
      return;
    }

    if (!this.state.modalOpen) {
      const currentId = e.target.closest("li").getAttribute("largimage");
      this.setState({ largeImg: currentId });
      this.setState({ modalOpen: true });
    }

    if (e.target.closest("div").dataset.overlay === "open") {
      this.setState({ modalOpen: false });
    }
  };

  closeModalByEscape = (e) => {
    if (e.code === "Escape") this.setState({ modalOpen: false });
  };

  render() {
    return (
      <ul
        className={s.gallery}
        onClick={this.openModal}
        onKeyDown={this.closeModal}
      >
        {this.state.modalOpen && <Modal largeImg={this.state.largeImg} />}
        <ImageGalleryItem images={this.props.images} />
      </ul>
    );
  }
}
