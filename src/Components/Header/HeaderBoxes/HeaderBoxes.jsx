import "./HeaderBoxes.scss";

export default function HeaderBoxes({ name, img, style }) {
  return (
    <>
      <div className={style}>
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
    </>
  );
}
