import { useState } from 'react'
import './FoodBox.scss'

function FoodBox({ name, weight, price, img }) {
    const [number, setNumber] = useState(1)
    function changeNumDown() {
        if (number !== 1) {
            setNumber(number - 1)
        }
    }
    function changeNumUp() {
        setNumber(number + 1)
    }
    return (
        <>
            <div className="food_box">
                <div className='food_info'>
                    <img src={img} alt="" />
                    <div className="food_info-text">
                        <h5>{name}</h5>
                        <span>{weight}</span>
                        <p>{price}</p>
                    </div>
                </div>
                <div className="calc">
                    <button onClick={changeNumDown}>-</button>
                    <p>{number}</p>
                    <button onClick={changeNumUp}>+</button>
                </div>
            </div>
        </>
    )
}

export default FoodBox
