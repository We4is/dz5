import "./Header.scss";
import headerIcon from "../../assets/headerImg.png";
import upperBurger from "../../assets/upperBurger.png";
import headerImgArr from "../../../burgersSrc.json";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes.jsx";

export default function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-block">
            <div className="header_icon">
              <img src={headerIcon} alt="#" />
            </div>
            <div className="header_main">
              <img src={upperBurger} alt="#" />
              <div className="header_text">
                <h1>
                  Только самые <br />
                  <span>сочные бургеры!</span>
                </h1>
                <p>Бесплатная доставка от 599₽</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header_footer">
          {headerImgArr.map((item) => {
            return <HeaderBoxes {...item} key={item.id} />;
          })}
        </div>
      </header>
    </>
  );
}
