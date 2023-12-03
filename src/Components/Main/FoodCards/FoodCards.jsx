//import { useState } from 'react'
import './FoodCards.scss'



export default function FoodCards({burgersArrAll, openModalWindow}) {
    
    return (
        <>
            {burgersArrAll.map(item =>{
                return (
                <div className="main_container-all-block" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="main_container-all-block-text">
                        <h3>{item.price}Р</h3>
                        <h4>{item.name}</h4>
                        <p>{item.weight}</p>
                        <button onClick={()=>{openModalWindow(item.id)}}>Добавить</button>
                    </div>
                </div>
                )
            })}
        </>
    )
}