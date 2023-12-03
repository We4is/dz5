//import { useState } from "react";
import "./FoodModal.scss";
import close from "../../../assets/close.png";

export default function FoodModal({item, setShowModal}) {
  return (
    <>
      <div className="modal">
        <div className="modal_container">
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
              <div className="modal_container-main-footer">
                <p>{item.weight}, {item.weight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
