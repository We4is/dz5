import { useState } from "react";
import "./Main.scss";
import burgersArr from "../../../burgers.json";
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from "./FoodCards/FoodCards.jsx";
import FoodModal from "./FoodModal/FoodModal.jsx";

export default function Main() {
  // Main
  const [burgersArrActive, setBurgersArrActive] = useState(
    burgersArr.burgersActive
  );

  const [burgersArrAll, setBurgersArrAll] = useState(burgersArr.burgersAll);
  const [indexUser, setIndexUser] = useState(0);

  // Modal
  const [showModal, setShowModal] = useState(false);

  function openModalWindow(id) {
    setShowModal(true);
    setIndexUser(id);
  }

  // FoodBox
  let sum = 0;
  burgersArrActive.forEach((item) => {
    sum += item.price;
  });

  const [endPrice, setEndPrice] = useState(sum);
  const [burgersValue, setBurgersValue] = useState(burgersArrActive.length);

  function addActiveBurger(activeBurger, countModal = 1) {
    const trueUser = burgersArrActive.find(
      (item) => item.name === activeBurger.name
    );

    const copyActiveBurger = { ...activeBurger };

    if (burgersArrActive.length !== 0) {
      const lastId = burgersArrActive[burgersArrActive.length - 1].id;
      copyActiveBurger.id = lastId + 1;
    } else {
      const lastId = 1;
      copyActiveBurger.id = lastId + 1;
    }

    
    if (trueUser) {
      const copyArr = [...burgersArrActive]
      copyArr.forEach(item =>{
        if(copyActiveBurger.id - 1 == item.id){
          item.resultCount += 1
        } 
      })
      setBurgersArrActive(copyArr)
      
      return;
    }

    copyActiveBurger.resultCount = countModal;
    setEndPrice(endPrice + activeBurger.price * copyActiveBurger.resultCount);
    setBurgersValue(burgersValue + copyActiveBurger.resultCount);
    setBurgersArrActive((prevstate) => [...prevstate, copyActiveBurger]);
  }

  return (
    <>
      <main>
        {showModal && (
          <FoodModal
            item={burgersArrAll[indexUser - 1]}
            setShowModal={setShowModal}
            addActiveBurger={addActiveBurger}
          />
        )}
        <div className="main_container">
          <div className="main_container-left">
            {console.log(burgersArrActive)}
            <FoodBox
              burgersArrActive={burgersArrActive}
              setBurgersArrActive={setBurgersArrActive}
              setEndPrice={setEndPrice}
              setburgersValue={setBurgersValue}
              endPrice={endPrice}
              burgersValue={burgersValue}
            />
          </div>
          <div className="main_container-right">
            <h1>Бургеры</h1>
            <div className="main_container-right-blocks">
              <FoodCards
                burgersArrAll={burgersArrAll}
                setBurgersArrAll={setBurgersArrAll}
                openModalWindow={openModalWindow}
                addActiveBurger={addActiveBurger}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
