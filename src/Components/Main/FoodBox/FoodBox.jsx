//import { useState } from "react";
import "./FoodBox.scss";
import FoodBoxCard from "./FoodBoxCard/FoodBoxCard.jsx";
import skuter from "../../../assets/skuter.png";

export default function FoodBox({
  burgersValue,
  setBurgersValue,
  burgersArrActive,
  setBurgersArrActive,
  setEndPrice,
  endPrice
}) {
  function sumCount(solveElem) {
    setBurgersValue(burgersValue + solveElem);
  }
  function deleteActiveBlock(id, solveElem, price) {
    const newArr = [...burgersArrActive];
    const newFoodArr = newArr.filter((item) => item.id !== id);
    setBurgersArrActive(newFoodArr);
    sumCount(-solveElem);
    getEndPrice(-(solveElem * price));
  }

  function getEndPrice(price) {
    setEndPrice(endPrice + price);
  }
  return (
    <>
      <div className="main_container-active">
        <div className="main_container-active-text">
          <h2>Корзина</h2>
          <p>{burgersValue}</p>
        </div>
        <div className="main_container-active-blocks">
          {burgersArrActive.map((item) => {
            return (
              <FoodBoxCard
                {...item}
                key={item.id}
                sumCount={sumCount}
                deleteActiveBlock={deleteActiveBlock}
                getEndPrice={getEndPrice}
              />
            );
          })}
        </div>
        <div className="main_container-active-footer">
          <p>Итого</p>
          <span>{endPrice}Р</span>
        </div>
        <div className="main_container-active-button">
          <button>Оформить заказ</button>
          <div className="main_container-active-button-text">
            <img src={skuter} alt="" /> <p>Бесплатная доставка</p>
          </div>
        </div>
      </div>
    </>
  );
}
