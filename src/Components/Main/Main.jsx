import { useState } from "react";
import "./Main.scss";
import burgersArr from "../../../burgers.json";
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from "./FoodCards/FoodCards.jsx";
import FoodModal from "./FoodModal/FoodModal.jsx";


export default function Main() {
  const [burgersArrActive, setBurgersArrActive] = useState(burgersArr.burgersActive);
  const [burgersArrAll, setBurgersArrAll] = useState(burgersArr.burgersAll);
  const [showModal, setShowModal] = useState(false)
  const [indexUser, setIndexUser] = useState(0)

  function openModalWindow(id){
      setShowModal(true)
      setIndexUser(id)
  }

  return (
    <>
      <main>
        {showModal && <FoodModal item={burgersArrAll[indexUser - 1]} setShowModal={setShowModal}/>}
        <div className="main_container">
          <div className="main_container-left">
            <FoodBox
              burgersArrActive={burgersArrActive}
              setBurgersArrActive={setBurgersArrActive}
            />
          </div>
          <div className="main_container-right">
            <h1>Бургеры</h1>
            <div className="main_container-right-blocks">
                <FoodCards
                burgersArrAll={burgersArrAll}
                setBurgersArrAll={setBurgersArrAll}
                openModalWindow={openModalWindow}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
