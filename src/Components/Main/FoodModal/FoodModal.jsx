import { useState } from "react";
import "./FoodModal.scss";
import close from "../../../assets/close.png";

export default function FoodModal({item, setShowModal, addActiveBurger}) {
  const [countModal, setCountModal] = useState(1);


  function solveCount(solveElem) {
    if (countModal === 1 && solveElem === -1) {
      setShowModal(false)
    }
    setCountModal(countModal + solveElem);
  }



  return (
    <>
      <div className="modal" onClick={()=>{setShowModal(false)}} >
        <div className="modal_container"  onClick={(e)=>e.stopPropagation()}>
          <div className="modal_container-upper">
            <h1>{item.name}</h1>
            <img src={close} alt="" onClick={()=>{setShowModal(false)}}/>
          </div>
          <div className="modal_container-main">
            <img src={item.img} alt="" />
            <div className="modal_container-main-text">
              <p>{item.info}</p>
              <ul>
                <ul>Состав:</ul>
                {item.ul.map(item =>{
                  return <li key={item.id}>{item}</li>
                })}
              </ul>
              <div className="modal_container-main-text-footer">
                <p>{item.weight}, {item.weight}</p>
              </div>
            </div>
          </div>
          <div className="modal_container-footer">
                <div className="modal_container-footer-button-calc">
                    <button className="modal_container-footer-button" onClick={() => {addActiveBurger(item, countModal), setShowModal(false)}}>Добавить</button>
                    <div className="modal_container-footer-calc">
                        <button onClick={() => {solveCount(-1)}}>-</button>
                        <p>{countModal}</p>
                        <button onClick={() => {solveCount(+1)}}>+</button>
                    </div>
                </div>
                <p>{item.price}Р</p>
          </div>
        </div>
      </div>
    </>
  );
}
