//import { useState } from "react";
import "./Footer.scss";
import telegramFooter from "../../assets/telegramFooter.png";
import vkFooter from "../../assets/vkFooter.png";
import yourMealFooter from "../../assets/yourMealFooter.png";

export default function footer() {
  return (
    <>
      <footer>
        <div className="left_footer-block">
          <img src={yourMealFooter} alt="" />
          <p>© YouMeal, 2022</p>
          <p>Design: Anastasia Ilina</p>
        </div>
        <div className="right_footer-block">
          <div className="right_footer-block-phone">
            <h1>Номер для заказа</h1>
            <p>+7(930)833-38-11</p>
          </div>
          <div className="right_footer-block-mess">
            <h1>Мы в соцсетях</h1>
            <div className="footer_img-block">
              <a href="#"><img src={vkFooter} alt="" /></a>
              <a href="#"><img src={telegramFooter} alt="" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
