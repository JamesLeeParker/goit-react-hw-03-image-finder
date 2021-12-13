import s from "./Modal.module.scss";

export default function Modal({ largeImg }) {
  return (
    <div className={s.Overlay} data-overlay="open">
      <div className={s.Modal}>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
}
