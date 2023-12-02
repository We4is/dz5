import { useState } from "react";
import "./FoodBox.scss";
import FoodBoxCard from "./FoodBoxCard/FoodBoxCard.jsx";


export default function FoodBox(foodArr, setBurgersArrActive) {
    const [count, setCount] = useState(foodArr.burgersArrActive.length);

    function sumCount(solveElem){
        setCount(count + solveElem)
    }

    function deleteActiveBlock(id){
        const newArr = [...foodArr.burgersArrActive]
        const newFoodArr = newArr.filter(item => item.id !== id)
        setBurgersArrActive(newFoodArr)
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
            return <FoodBoxCard {...item} key={item.id} sumCount={sumCount} deleteActiveBlock={deleteActiveBlock}/>
          })}
        </div>
      </div>
    </>
  );
}
