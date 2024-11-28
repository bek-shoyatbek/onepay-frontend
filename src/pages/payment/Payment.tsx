import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {PaymentProvider, Terminal} from "../../constants";
import {QueryParams} from "../../types/payment/query-params";
import {initTransaction} from "../../helpers/payment/init-transaction";
import {ThemeToggle} from "./Header/ThemeToggle";
import {RestaurantInfo} from "./Header/RestaurantInfo";
import {BillingType} from "./BillingSection/BillingType";
import {TipSelector} from "./TipSection/TipSelector";
import {BillDetails} from "./BillSection/BillDetails";
import {PaymentProviders} from "./PaymentSection/PaymentProviders";
import {PaymentButtons} from "./PaymentSection/PaymentButtons";
import {Footer} from "./Footer/Footer";
import {RatingSelector} from "./RatingSection/RatingSection";
import "./Payment.css";

export function Payment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const getQueryParam = (key: keyof QueryParams): string =>
    queryParams.get(key) || "";

  const [activeButton, setActiveButton] = useState<'bill_and_tip' | 'tip_only'>("bill_and_tip");
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [billAmount] = useState(parseFloat(getQueryParam("total")));
  const [totalAmount, setTotalAmount] = useState(billAmount);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [rateText, setRateText] = useState("Оцените обслуживание");
  const [provider, setProvider] = useState<PaymentProvider>(
    PaymentProvider.PAYME
  );


  const handleButtonClick = (buttonType: 'bill_and_tip' | 'tip_only') => {
    setActiveButton(buttonType);
  };

  const addSpaceIntoAmount = (amount: number) => {
    return amount.toLocaleString().split(",").join(" ");
  };

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
    setRateText(
      starRating === 0
        ? "Плохо 😞"
        : starRating === 1
        ? "Нормально 😐"
        : starRating <= 2
        ? "Хорошо 🙂"
        : starRating <= 3
        ? "Очень хорошо 😊"
        : "Отлично 😃"
    );
  };

  const handleTipClick = (tipPercentage: number) => {
    setSelectedTip(tipPercentage);
    const tipAmount = Math.floor(billAmount * (tipPercentage / 100));
    setTotalAmount(billAmount + tipAmount);
  };

  const handlePayBtnClick = async () => {
    console.log("orderId: ", getQueryParam("orderId"));
    window.location.href = await initTransaction({
      orderId: getQueryParam("orderId"),
      userId: getQueryParam("userId") || "",
      total: totalAmount,
      spotId: getQueryParam("spotId") || "",
      provider: provider,
      isTipOnly: activeButton === "tip_only",
      tableId: getQueryParam("tableId") || "",
      terminal: getQueryParam("terminal") as Terminal,
      tip: selectedTip,
    });
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);




  return (
    <>
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <div className="main">
        <RestaurantInfo />
        <BillingType
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        />

        <div className="total_amount">
          <h1>Сумма счета</h1>
          <h2>{addSpaceIntoAmount(totalAmount)}</h2>
        </div>

        <div className="second_section">
          <TipSelector selectedTip={selectedTip} onTipClick={handleTipClick} />
          <RatingSelector
            rating={rating}
            rateText={rateText}
            onStarClick={handleStarClick}
          />
        </div>
        <BillDetails
          billAmount={billAmount}
          totalAmount={totalAmount}
          tip = {selectedTip}
          addSpaceIntoAmount={addSpaceIntoAmount}
        />

        <PaymentProviders onProviderSelect={setProvider} selectedProvider={provider} />
        <PaymentButtons onPayClick={handlePayBtnClick} />
        <Footer />
      </div>
    </>
  );
}
