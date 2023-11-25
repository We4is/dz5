import { useState } from 'react'
import './FoodCards.scss'



export default function FoodCards({img, price, name, weight, id, modalFoodWindow, item} ) {

    return (
        <>
            <div className='food_card'>
                <img src={img} alt="" />
                <h2>{price}Р</h2>
                <p>{name}</p>
                <span>{weight}</span>
                <div className="button_block">
                    <button onClick={() =>{
                        modalFoodWindow(item)
                    }}>Добавить</button>
                </div>
            </div>
        </>
    )
}