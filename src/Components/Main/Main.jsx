import { useState } from "react";
import "./Main.scss";
import burgersArr from '../../../burgers.json'
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from './FoodCards/FoodCards.jsx';


export default function Main() {
  const [burgersArrActive, setBurgersArrActive] = useState(burgersArr.burgersActive)
  const [burgersArrAll, setBurgersArrAll] = useState(burgersArr.burgersAll)

  
  return (
    <>
      <main>
        <div className="main_container">
          <div className="main_container-left">
              <FoodBox burgersArrActive={burgersArrActive} setBurgersArrActive={setBurgersArrActive}/>
          </div>
          <div className="main_container-right">
              <h1>Бургеры</h1>
              <FoodCards burgersArrAll={burgersArrAll} setBurgersArrAll={setBurgersArrAll}/>
          </div>
        </div>
      </main>
    </>
  );

}


