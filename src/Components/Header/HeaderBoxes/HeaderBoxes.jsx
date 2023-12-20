import "./HeaderBoxes.scss";
import {
  NavLink,
} from "react-router-dom";
export default function HeaderBoxes({ name, img, style, path }) {
  return (
    <>
        <NavLink to={path}>
          <div className={style}>
            <img src={img} alt="" />
            <p>{name}</p>
          </div>
        </NavLink>
    </>
  );
}
