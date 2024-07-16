import { ASSETS } from "../../constants/assets/assets";
import { paymentProviders } from "../../constants/payment-services/payment-providers";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPaperPlane, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function Payment() {
  const [activeButton, setActiveButton] = useState("bill_and_tip");
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [billAmount, _] = useState(1000000); // Initial bill amount
  const [totalAmount, setTotalAmount] = useState(billAmount);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleTipClick = (tipPercentage: number) => {
    setSelectedTip(tipPercentage);
    const tipAmount = billAmount * (tipPercentage / 100);
    setTotalAmount(billAmount + tipAmount);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} color="white" />
      </button>
      <div className="main">
        <div className="background_image">
          <img src={ASSETS.backgroundImage} alt="background-image" />
        </div>
        <div className="waiter_info">
          <img src={ASSETS.waiterImage} alt="waiter-image" />
          <div className="waiter_details">
            <span className="waiter_status">Официант</span>
            <h1>Бекиев Андрей</h1>
            <div className="waiter_stars">
              <ul className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <li key={star} className="star">
                    ★
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="billing_type">
          <div className="btn_container">
            <button
              className={`bill_and_tip ${
                activeButton === "bill_and_tip" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("bill_and_tip")}
            >
              Счет и чаевые
            </button>
            <button
              className={`bill_only ${
                activeButton === "bill_only" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("bill_only")}
            >
              Только чаевые
            </button>
          </div>
        </div>
        <div className="total_amount">
          <h1>Сумма счета</h1>
          <h2>{totalAmount.toLocaleString()}</h2>
        </div>

        <div className="second_section">
          <h1 className="tip_percentage_title">Оставьте чаевые</h1>
          <div className="tip_percentage">
            <ul className="percentage">
              {[0, 5, 10, 15, 20].map((percentage) => (
                <li
                  key={percentage}
                  className={`percentage ${
                    selectedTip === percentage ? "active" : ""
                  }`}
                  onClick={() => handleTipClick(percentage)}
                >
                  {percentage}%
                </li>
              ))}
            </ul>
          </div>

          <div className="rate_service">
            <p className="rate">Отлично 😊</p>
            <div className="stars_container">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "active" : ""}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="feedback_container">
              <input
                type="text"
                placeholder="Оставить свой отзыв"
                className="feedback_input"
              />
              <button type="submit" className="send_button">
                <span className="send_icon">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    size="xl"
                    color="white"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="bill_details">
          <table>
            <tbody>
              <tr>
                <th>Счет:</th>
                <td>{billAmount.toLocaleString()} сум</td>
              </tr>
              <tr>
                <th>Чаевые(5%)</th>
                <td>{(totalAmount - billAmount).toLocaleString()} сум</td>
              </tr>
              <tr>
                <th>Комиссия сервиса(5%)</th>
                <td>{(totalAmount * 0.1).toLocaleString()} сум</td>
              </tr>
            </tbody>
          </table>
          <div className="total_amount">
            <h2>Итоговая оплата</h2>
            <h1>{totalAmount.toLocaleString()}</h1>
          </div>
        </div>

        <div className="payment_providers_container">
          <h2>Выберите способ оплаты</h2>
          <div className="payment-providers">
            {paymentProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => alert(provider.name)}
                className="provider-button"
              >
                <img
                  src={provider.icon}
                  alt={provider.name}
                  className="provider-icon"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="btns">
          <div className="add_card_container">
            <button type="button">
              Добавить карту <span className="plus">+</span>{" "}
            </button>
          </div>
          <button className="pay_btn">Оплатить</button>
        </div>
        <footer className="footer">
          <p className="footer_text">
            Нажимая “Оплатить” вы соглашаетесь с{" "}
            <a href="http://google.com" className="footer_link">
              условиями публичной оферты
            </a>{" "}
            и{" "}
            <a href="http://google.com" className="footer_link">
              политикой персональных данных и конфиденциальности
            </a>
          </p>
          <a href="http://google.com" className="chat_manager">
            Связаться с менеджером
          </a>
        </footer>
      </div>
    </>
  );
}
