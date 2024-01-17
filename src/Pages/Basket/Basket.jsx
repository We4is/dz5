import "./Basket.scss";
import { NavLink } from 'react-router-dom';
export default function Basket() {

  return (
    <>
      <div className="basket_container">
        <div className="basket_container-box">
            <h1>Оформление заказа</h1>
            <div className="basket_container-box-form">
                <input type="text" placeholder="Имя"/>
                <input type="email" placeholder="Почта"/>
                <input type="text" placeholder="Телефон"/>
                <NavLink to="/"><button>Оформить</button></NavLink>
            </div>
        </div>
      </div>
    </>
  );
}
