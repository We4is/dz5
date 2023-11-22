import { useState } from 'react'
import './FoodBox.scss'

function FoodBox({ name, weight, price, img, editCount, id, deleteFood, changeSum }) {
    const [number, setNumber] = useState(1)
    function changeNum(amper, price) {
        if (number == 1 && String(amper) === '-1') {
            deleteFood(id, number)
        }
        console.log(price);
        setNumber(number + amper)
        editCount(amper,price)
    }

    return (
        <>
            <div className="food_box">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className='close_btn' onClick={() =>{
                    deleteFood(id, -price, -number)
                }}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <div className='food_info'>
                    <img src={img} alt="" />
                    <div className="food_info-text">
                        <h5>{name}</h5>
                        <span>{weight}</span>
                        <p>{price}Р</p>
                    </div>
                </div>
                <div className="calc">
                    <button onClick={() => {
                        changeNum(-1,-price)
                    }}>-</button>
                    <p>{number}</p>
                    <button onClick={() => {
                        changeNum(+1,+price)
                    }}>+</button>
                </div>
            </div>
        </>
    )
}

export default FoodBox
