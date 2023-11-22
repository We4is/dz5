import { useState } from 'react'
import FoodBox from './FoodBox/FoodBox.jsx'
import '../Style/app.scss'
import burderImg from '../assets/burger.png'
import potatoImg from '../assets/potato.png'
import sausageImg from '../assets/sausage.png'

function App() {
  const [count, setCount] = useState(3)
  const [sum, setSum] = useState(1034)
  const [FoodInfo, setFoodInfo] = useState([
    { 
      name: 'Супер сырный',
      weight: '512г',
      price: 550,
      img: burderImg,
      id: 1
    },
    {
      name: 'Картошка фри',
      weight: '180г',
      price: 245,
      img: potatoImg,
      id: 2
    },
    {
      name: 'Жгучий хот-дог',
      weight: '245г',
      price: 239,
      img: sausageImg,
      id: 3
    }
  ])



  function editCount(amper,price){
    setCount(count + amper)
    editSum(price)
  }

  function editSum(price){
    setSum(sum + price)
  }

  function deleteFood(id, price, number){
        const newArr = [...FoodInfo]
        const newFoodArr = newArr.filter((item) => item.id != id)
        setFoodInfo(newFoodArr);
        editCount(number,price)
        editSum(-(price * number))
  }


  return (
    <>
      <div className="foodBlock">
        <div className="food_text">
          <h1>Корзина</h1>
          <p>{count}</p>
        </div>
        <div className="food_blocks">
          {FoodInfo.map((item) => {
            return <FoodBox {...item} key={item.id} editCount={editCount} deleteFood={deleteFood}/>
          })}
        </div>
        <div className='food_footer'>
          <p>Итого</p>
          <span>{sum}</span>
        </div>

      </div>

    </>
  )
}

export default App
