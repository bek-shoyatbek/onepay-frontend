import { ASSETS } from "../../constants/assets/assets";
import { paymentProviders } from "../../constants/payment-services/payment-providers";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faPaperPlane, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import bgImage from "../../assets/background.png";

export function Payment() {
  const [activeButton, setActiveButton] = useState("bill_and_tip");
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [billAmount, _] = useState(1000000); // Initial bill amount
  const [totalAmount, setTotalAmount] = useState(billAmount);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [rateText, setRateText] = useState("Оцените обслуживание");

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  const addSpaceIntoAmount = (amount: number) => {
    return amount.toLocaleString().split(",").join(" ");
  };

  const handleStarClick = (starRating: number) => {
    setRating(starRating);

    // Update rate text based on tip percentage
    if (starRating === 0) {
      setRateText("Плохо 😞");
    } else if (starRating == 1) {
      setRateText("Нормально 😐");
    } else if (starRating <= 2) {
      setRateText("Хорошо 🙂");
    } else if (starRating <= 3) {
      setRateText("Очень хорошо 😊");
    } else {
      setRateText("Отлично 😃");
    }
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
          <img src={bgImage} alt="background-image" />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                      ></path>
                    </svg>
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
          <h2>{addSpaceIntoAmount(totalAmount)}</h2>
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
            <h2 className="rate_title">Оцените заведение</h2>
            <p className="rate_p">{rateText}</p>
            <div className="stars_container">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? "active" : ""}`}
                  onClick={() => handleStarClick(star)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                    ></path>
                  </svg>
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
                    rotate={180}
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
                <td>{addSpaceIntoAmount(billAmount)} сум</td>
              </tr>
              <tr>
                <th>Чаевые(5%)</th>
                <td>{addSpaceIntoAmount(totalAmount - billAmount)} сум</td>
              </tr>
              <tr>
                <th>Комиссия сервиса(5%)</th>
                <td>{addSpaceIntoAmount(totalAmount * 0.1)} сум</td>
              </tr>
            </tbody>
          </table>
          <div className="total_amount">
            <h2>Итоговая оплата</h2>
            <h1>{totalAmount.toLocaleString().split(",").join(" ")}</h1>
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
