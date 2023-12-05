import { useState } from "react";
import "./Main.scss";
import burgersArr from "../../../burgers.json";
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from "./FoodCards/FoodCards.jsx";
import FoodModal from "./FoodModal/FoodModal.jsx";

export default function Main() {
  // Main
  const [burgersArrActive, setBurgersArrActive] = useState(burgersArr.burgersActive);
  const [burgersArrAll, setBurgersArrAll] = useState(burgersArr.burgersAll);
  const [indexUser, setIndexUser] = useState(0);
  

  // Modal
  const [countModal, setCountModal] = useState(1);
  const [showModal, setShowModal] = useState(false);
  function openModalWindow(id) {
    setShowModal(true);
    setIndexUser(id);
  }


  // FoodBox
  let sum = 0
  burgersArrActive.forEach(item =>{ sum += item.price})
  const [endPrice, setEndPrice] = useState(sum);
  const [count, setCount] = useState(burgersArrActive.length);



  
  function addActiveBurger(activeBurger) {
    if (burgersArrActive.length == 0) {
      setBurgersArrActive((prevstate) => [...prevstate, activeBurger]);
      setCount(1)
      setEndPrice(activeBurger.price)
      return
    }
    const trueUser = burgersArrActive.find(
      (item) => item.name === activeBurger.name
    );
    if (trueUser) {
      return;
    }
    const lastId = burgersArrActive[burgersArrActive.length - 1].id;
    const copyActiveBurger = { ...activeBurger };
    copyActiveBurger.id = lastId + 1;
    
    setBurgersArrActive((prevstate) => [...prevstate, copyActiveBurger]);
    setEndPrice(sum + activeBurger.price)
    setCount(burgersArrActive.length + 1)
  }
  return (
    <>
      <main>
        {showModal && (
          <FoodModal
            countModal={countModal}
            item={burgersArrAll[indexUser - 1]}
            setShowModal={setShowModal}
            addActiveBurger={addActiveBurger}
            setCountModal={setCountModal}
          />
        )}
        <div className="main_container">
          <div className="main_container-left">
            <FoodBox
              burgersArrActive={burgersArrActive}
              setBurgersArrActive={setBurgersArrActive}
              setEndPrice={setEndPrice}
              setCount={setCount}
              endPrice={endPrice}
              count={count}
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
