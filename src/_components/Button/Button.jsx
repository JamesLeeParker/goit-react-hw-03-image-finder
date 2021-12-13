import s from "./Button.module.scss";

export default function Button({ getLoadMore }) {
  return (
    <button className={s.Button} onClick={getLoadMore}>
      Load more
    </button>
  );
}
