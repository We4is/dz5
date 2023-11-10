import { useState } from 'react'
import FoodBox from './FoodBox/FoodBox.jsx'
import '../Style/app.css'
import burderImg from '../assets/burger.png'
import potatoImg from '../assets/potato.png'
import sausageImg from '../assets/sausage.png'

function App() {
  const [FoodInfo, setFoodInfo] = useState([
    {
      name: 'Супер сырный',
      weight: '512г',
      price: '550Р',
      img: burderImg
    },
    {
      name: 'Картошка фри',
      weight: '180г',
      price: '245Р',
      img: potatoImg
    },
    {
      name: 'Жгучий хот-дог',
      weight: '245г',
      price: '239Р',
      img: sausageImg
    }
  ])

  return (
    <>
      {FoodInfo.map((item) =>{
        return <FoodBox {...item}/>
      })}
    </>
  )
}

export default App
