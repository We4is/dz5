import { useState } from "react";
import "./FoodBoxCard.scss";


export default function FoodBoxCard({ name, img, weight, price, id, sumCount, deleteActiveBlock }) {
  const [count, setCount] = useState(1);
  function solveCount(solveElem) {
    if (count === 1 && solveElem === -1) {
      return
    }
    setCount(count + solveElem);
    sumCount(solveElem)
  }

  
  return (
    <>
      <div className="main_container-active-block" key={id}>
        <p className="cross" onClick={()=>{deleteActiveBlock(id)}}>+</p>
        <img src={img} alt="" />
        <div className="main_container-active-block-text">
          <h5>{name}</h5>
          <span>{weight}</span>
          <h4>{price}Р</h4>
        </div>
        <div className="main_container-acitve-block-calc">
            <button onClick={() => {solveCount(-1)}}>-</button>
            <p>{count}</p>
            <button onClick={() => {solveCount(+1)}}>+</button>
        </div>
      </div>
    </>
  );
}