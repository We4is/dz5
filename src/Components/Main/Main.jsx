import { useState } from "react";
import "./Main.scss";
import burgersArr from "../../../burgers.json";
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from "../../Pages/Burgers/FoodCards.jsx";
import FoodModal from "./FoodModal/FoodModal.jsx";
import Error from "../../Pages/Error/Error.jsx";
import { Route, Routes } from "react-router-dom";
import Basket from './../../Pages/Basket/Basket';

export default function Main() {
  // Main
  
  const [foodArrAll] = useState(burgersArr.AllFood);
  const [burgersArrActive, setBurgersArrActive] = useState(burgersArr.burgersActive);
  const [indexUser, setIndexUser] = useState(0);
  const [indexArr, setIndexArr] = useState(0);

  // Modal

  const [showModal, setShowModal] = useState(false);

  function openModalWindow(id, arrId) {
    setShowModal(true);
    setIndexUser(id);
    setIndexArr(arrId)

  }

  // FoodBox

  let sum = 0;
  burgersArrActive.forEach((item) => {
    sum += item.resultPrice;
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
    setEndPrice(endPrice + activeBurger.price * copyActiveBurger.resultCount);
    setBurgersValue(burgersValue + copyActiveBurger.resultCount);
    if (trueUser) {
      // burgersArrActive.forEach(item =>{
      //   if(item.name == copyActiveBurger.name){
      //     copyActiveBurger.resultCount += 1;
      //   }
      // })
      // setBurgersArrActive((prevstate) => [...prevstate, copyActiveBurger]);
      return
    }
    copyActiveBurger.resultCount = countModal;
    setBurgersArrActive((prevstate) => [...prevstate, copyActiveBurger]);
  }




  return (
    <>
        <main>
          {showModal && (
            <FoodModal
              item={(foodArrAll[indexArr - 1].foodInfo[indexUser - 1])}
              setShowModal={setShowModal}
              addActiveBurger={addActiveBurger}
            />
          )}
          <div className="main_container">
            <div className="main_container-left">
              <FoodBox
                burgersArrActive={burgersArrActive}
                setBurgersArrActive={setBurgersArrActive}
                setEndPrice={setEndPrice}
                setBurgersValue={setBurgersValue}
                endPrice={endPrice}
                burgersValue={burgersValue}
              />
            </div>
            <div className="main_container-right">
              
                <Routes>
                  {foodArrAll.map((item) => {
                    return <Route
                      path={item.foodId.path}
                      key={item.foodId.id}
                      element={
                        <FoodCards
                          item={item.foodInfo}
                          openModalWindow={openModalWindow}
                          addActiveBurger={addActiveBurger}
                          id={item.foodId.id}
                          name={item.foodId.h1}
                        />
                      }
                    />;
                  })}
                  <Route path="/basket" element={<Basket />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              
            </div>
          </div>
        </main>
    </>
  );
}
