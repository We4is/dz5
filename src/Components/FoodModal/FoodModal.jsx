import { useState } from 'react'
import './FoodModal.scss'

export default function FoodModal({ name, weight, price, img, id, info, kkal, ul, closeModalWindow}) {
    const [burgersUl, setBurgersUl] = useState(ul)
    const [number, setNumber] = useState(1)
    function changeNum(amper) {
        if (String(amper) === '-1' && number === 1) {
            return
        }
        setNumber(number + amper)
    }
    return (
        <>
            <div className="modal_window">
                <div className="upper_modal-text">
                    <h1>{name}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className='close_btn' onClick={() =>{
                        closeModalWindow()
                    }}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
                <div className="text_modal-box">
                    <img src={img} alt="" />
                    <div className="text_modal_text">
                        <p>{info}</p>
                        <ul className='modal_ul'>
                            <ul>Состав:</ul>
                            {burgersUl.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                        <span className='modal_weight'>{weight}, ккал {kkal}</span>
                    </div>
                </div>
                <div className="modal_button">
                    <div className="button_calc">
                        <button>Добавить</button>
                        <div className="calc">
                            <button onClick={() => {
                                changeNum(-1)
                            }}>-</button>
                            <p>{number}</p>
                            <button onClick={() => {
                                changeNum(+1)
                            }}>+</button>
                        </div>
                    </div>
                    <div className="price">{price}Р</div>
                </div>
            </div>
        </>
    )
}