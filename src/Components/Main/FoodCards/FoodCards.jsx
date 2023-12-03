//import { useState } from 'react'
import './FoodCards.scss'



export default function FoodCards({burgersArrAll, openModalWindow, addActiveBurger}) {
    
    return (
        <>
            {burgersArrAll.map(item =>{
                return (
                <div className="main_container-all-block" key={item.id}  onClick={()=>{openModalWindow(item.id)}}>
                    <img src={item.img} alt="" />
                    <div className="main_container-all-block-text">
                        <h3>{item.price}Р</h3>
                        <h4>{item.name}</h4>
                        <p>{item.weight}</p>
                        <div className="main_container-all-block-text-button" onClick={(e)=>e.stopPropagation()}>
                            <button onClick={() => {addActiveBurger(item)}}>Добавить</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </>
    )
}