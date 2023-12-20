import { useState } from "react";
import "./Main.scss";
import burgersArr from "../../../burgers.json";
import FoodBox from "./FoodBox/FoodBox.jsx";
import FoodCards from "../../Pages/Burgers/FoodCards.jsx";
import FoodModal from "./FoodModal/FoodModal.jsx";
import Error from "../../Pages/Error/Error.jsx";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  // Main
  const [foodArrAll, setFoodArrAll] = useState(burgersArr.AllFood);
  const [burgersArrActive, setBurgersArrActive] = useState(
    burgersArr.burgersActive
  );
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

    if (trueUser) {
      return;
    }
    
    copyActiveBurger.resultCount = countModal;
    setEndPrice(endPrice + activeBurger.price * copyActiveBurger.resultCount);
    setBurgersValue(burgersValue + copyActiveBurger.resultCount);
    setBurgersArrActive((prevstate) => [...prevstate, copyActiveBurger]);
  }
  console.log();
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
                          setFoodArrAll={setFoodArrAll}
                          openModalWindow={openModalWindow}
                          addActiveBurger={addActiveBurger}
                          id={item.foodId.id}
                          name={item.foodInfo.h1}
                        />
                      }
                    />;
                  })}
                  <Route path="*" element={<Error />} />
                </Routes>
              
            </div>
          </div>
        </main>
    </>
  );
}
