import { useState } from "react";
import "./FoodBox.scss";
import FoodBoxCard from "./FoodBoxCard/FoodBoxCard.jsx";
import skuter from '../../../assets/skuter.png'
let sum = 0

export default function FoodBox(foodArr) {
    foodArr.burgersArrActive.forEach(item =>{
      sum += item.price
    })
    const [count, setCount] = useState(foodArr.burgersArrActive.length);
    const [endPrice, setEndPrice] = useState(sum);


    function sumCount(solveElem){
        setCount(count + solveElem)
    }


    function deleteActiveBlock(id, number, price){
      const newArr = [...foodArr.burgersArrActive]
      const newFoodArr = newArr.filter(item => item.id !== id)
      foodArr.setBurgersArrActive(newFoodArr)
      sumCount(-number)
      getEndPrice(-(number*price))
    }


    function getEndPrice(price){
        setEndPrice(endPrice + price)
    }

    return (
    <>
      <div className="main_container-active">
        <div className="main_container-active-text">
          <h2>Корзина</h2>
          <p>{count}</p>
        </div>
        <div className="main_container-active-blocks">
          {foodArr.burgersArrActive.map((item) => {
            return <FoodBoxCard {...item} key={item.id} sumCount={sumCount} deleteActiveBlock={deleteActiveBlock} getEndPrice={getEndPrice}/>
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
