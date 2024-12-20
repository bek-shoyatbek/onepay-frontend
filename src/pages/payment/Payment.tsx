import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ThemeToggle,
  RestaurantInfo,
  BillingType,
  TipSelector,
  BillDetails,
  PaymentProviders,
  PaymentButtons,
  Footer,
  RatingSelector,
} from "../../components";
import {
  Restaurant,
  Terminal,
  QueryParams,
  PaymentProvider,
} from "../../types";
import bgDefault from "../../assets/bg-default.png";
import { getRestaurants, createTransaction } from "../../api";
import "./Payment.css";

export function Payment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const getQueryParam = (key: keyof QueryParams): string =>
    queryParams.get(key) || "";

  const [activeButton, setActiveButton] = useState<"bill_and_tip" | "tip_only">(
    "bill_and_tip"
  );
  const [rating, setRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [billAmount] = useState(parseFloat(getQueryParam("total")));
  const [totalAmount, setTotalAmount] = useState(billAmount);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [rateText, setRateText] = useState("Оцените обслуживание");
  const [provider, setProvider] = useState<PaymentProvider>(
    PaymentProvider.PAYME
  );
  const [restaurantInfo, setRestaurantInfo] = useState<
    Restaurant & { createdAt: string; updatedAt: string }
  >();

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      const data = await getRestaurants(getQueryParam("spotId"));

      setRestaurantInfo(data.restaurants[0]);
    };
    fetchRestaurantInfo();
  }, []);

  const handleButtonClick = (buttonType: "bill_and_tip" | "tip_only") => {
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
    const tipAmount = Math.floor(billAmount * (selectedTip / 100));
    setTotalAmount(
      activeButton === "tip_only"
        ? tipAmount > 1000
          ? tipAmount
          : 1000
        : billAmount + tipAmount
    );
  };

  const handlePayBtnClick = async () => {
    console.log("Paying:", totalAmount);

    const newTransaction = {
      orderId: getQueryParam("orderId"),
      userId: getQueryParam("userId") || "",
      total: totalAmount,
      spotId: getQueryParam("spotId") || "",
      provider: provider,
      isTipOnly: activeButton === "tip_only",
      tableId: getQueryParam("tableId") || "",
      terminal: getQueryParam("terminal") as Terminal,
      tip: selectedTip,
    };

    window.location.href = await createTransaction(newTransaction);
  };

  useEffect(() => {
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const tipAmount = Math.floor(billAmount * (selectedTip / 100));
    if (activeButton === "tip_only") {
      setTotalAmount(tipAmount > 1000 ? tipAmount : 1000);
    } else {
      setTotalAmount(billAmount + tipAmount);
    }
  }, [activeButton, billAmount, selectedTip]);

  return (
    <>
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <div className="main">
        <RestaurantInfo
          title={restaurantInfo?.title || "BON"}
          location={restaurantInfo?.location || "TASHKENT, UZBEKISTAN"}
          image={(restaurantInfo?.image as string) || bgDefault}
        />
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
          tip={selectedTip}
          addSpaceIntoAmount={addSpaceIntoAmount}
        />

        <PaymentProviders
          onProviderSelect={setProvider}
          selectedProvider={provider}
        />
        <PaymentButtons
          onPayClick={handlePayBtnClick}
          isAllowed={totalAmount !== 0}
        />
        <Footer />
      </div>
    </>
  );
}
