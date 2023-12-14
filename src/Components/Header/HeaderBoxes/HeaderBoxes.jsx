import "./HeaderBoxes.scss";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
export default function HeaderBoxes({ name, img, style, path }) {
  return (
    <>
      <Router>
        <NavLink to={path}>
          <div className={style}>
            <img src={img} alt="" />
            <p>{name}</p>
          </div>
        </NavLink>
      </Router>
    </>
  );
}
