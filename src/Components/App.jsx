import { useState } from 'react'
import FoodBox from './FoodBox/FoodBox.jsx'
import FoodCards from './FoodCards/FoodCards.jsx'
import FoodModal from './FoodModal/FoodModal.jsx'
import '../Style/app.scss'
import cardArr from '../../burgers.json'
import cardsArr from '../../burgerCards.json'
const modalArr = []

function App() {

  const [count, setCount] = useState(3)
  const [sum, setSum] = useState(1034)
  const [foodInfo, setFoodInfo] = useState(cardArr)
  const [foodsInfo, setFoodsInfo] = useState(cardsArr)
  const [modalWindow, setModalWindow] = useState(modalArr)


  function editCount(amper, price) {
    setCount(count + amper)
    editSum(price)
  }

  function editSum(price) {
    setSum(sum + price)
  }

  function deleteFood(id, price, number) {
    const newArr = [...foodInfo]
    const newFoodArr = newArr.filter((item) => item.id != id)
    setFoodInfo(newFoodArr);
    editCount(number, price)
    editSum(-(price * number))
  }

  function modalFoodWindow(item) {
    const arr = [...modalArr]
    arr.push(item)
    setModalWindow(arr)
  }
  function closeModalWindow(){
    setModalWindow([])
  }
  return (
    <>

      {modalWindow.map(item => {
        return <div className="modal_block">
          <FoodModal {...item} key={item.id} closeModalWindow={closeModalWindow} />
        </div>
      })}


      <main>

        <div className="foodBlock">
          <div className="food_text">
            <h1>Корзина</h1>
            <p>{count}</p>
          </div>
          <div className="food_blocks">
            {foodInfo.map((item) => {
              return <FoodBox {...item} key={item.id} editCount={editCount} deleteFood={deleteFood} />
            })}
          </div>
          <div className='food_footer'>
            <p>Итого</p>
            <span>{sum}Р</span>
          </div>
        </div>



        <div className="food_right">
          <h1>Бургеры</h1>
          <div className='food_cards-right'>
            {foodsInfo.map(item => {
              return <FoodCards {...item} key={item.id} modalFoodWindow={modalFoodWindow} item={item} />
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
