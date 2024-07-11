import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BillingPage.css";
import { RedirectParams } from "../types/payment/redirect-params";
import { redirectPayme } from "../helpers/payment/redirectors";
import {
  PaymentProviders,
  paymentProviders,
} from "../constants/payment-services/payment-providers";

interface QueryParams {
  orderId: string;
  userId: string;
  spotId: string;
  total: string;
}

const BillingPage: React.FC = () => {
  const [restaurant, setRestaurant] = useState({ name: "", image: "" });
  const [bill, setBill] = useState({ total: 0, tip: 0 });
  const [tipPercentage, setTipPercentage] = useState(15);
  const [showTip, setShowTip] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const getQueryParam = (key: keyof QueryParams): string =>
    queryParams.get(key) || "";

  useEffect(() => {
    const total = parseFloat(getQueryParam("total")) || 0;
    setBill({ total: total, tip: 0 });

    setRestaurant({
      name: "The Restaurant",
      image:
        "https://www.phillymag.com/wp-content/uploads/sites/3/2023/12/wellness-fee-in-restaurants-philadelphia.jpg",
    });
  }, []);

  const handleTipChange = (percentage: number) => {
    setTipPercentage(percentage);
    setBill((prev) => ({ ...prev, tip: (prev.total * percentage) / 100 }));
  };

  const handlePayBillOnly = () => {
    setShowTip(false);
    setBill((prev) => ({ ...prev, tip: 0 }));
    setTipPercentage(0);
  };

  const handlePayWithTip = () => {
    setShowTip(true);
    if (bill.tip === 0) {
      handleTipChange(15); // Default to 15% if no tip was selected
    }
  };

  const handleRedirectPayment = (provider: string) => {
    const redirectParams: RedirectParams = {
      orderId: getQueryParam("orderId"),
      userId: getQueryParam("userId"),
      total: bill.total + bill.tip,
      spotId: getQueryParam("spotId"),
      tip: bill.tip,
      provider: provider as PaymentProviders,
    };

    switch (provider) {
      // case "uzum":
      //   redirectUzum(redirectParams);
      //   break;
      case PaymentProviders.PAYME:
        redirectPayme(redirectParams);
      default:
        console.log("Invalid payment provider");
        break;
    }
  };

  return (
    <div className="billing-page">
      <div className="restaurant-info">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="restaurant-image"
        />
        <h1>{restaurant.name}</h1>
        <p>Order ID: {getQueryParam("orderId")}</p>
      </div>

      <div className="bill-details">
        <h2>Bill Details</h2>
        <p>Total Cost: ${bill.total.toFixed(2)}</p>
        {showTip && (
          <p>
            Tip (Waiter ID: {getQueryParam("userId")}): ${bill.tip.toFixed(2)} (
            {tipPercentage}%)
          </p>
        )}

        <div className="payment-type-buttons">
          <button
            onClick={handlePayBillOnly}
            className={!showTip ? "active" : ""}
          >
            Pay Bill Only
          </button>
          <button
            onClick={handlePayWithTip}
            className={showTip ? "active" : ""}
          >
            Pay Bill with Tip
          </button>
        </div>

        {showTip && (
          <>
            <h3>Select Tip Amount</h3>
            <div className="tip-buttons">
              <button
                onClick={() => handleTipChange(10)}
                className={tipPercentage === 10 ? "active" : ""}
              >
                10%
              </button>
              <button
                onClick={() => handleTipChange(15)}
                className={tipPercentage === 15 ? "active" : ""}
              >
                15%
              </button>
              <button
                onClick={() => handleTipChange(18)}
                className={tipPercentage === 18 ? "active" : ""}
              >
                18%
              </button>
              <button
                onClick={() => handleTipChange(20)}
                className={tipPercentage === 20 ? "active" : ""}
              >
                20%
              </button>
              <button
                onClick={() => handleTipChange(25)}
                className={tipPercentage === 25 ? "active" : ""}
              >
                25%
              </button>
            </div>
          </>
        )}
      </div>
      <p className="total-with-tip">
        Total: ${(bill.total + bill.tip).toFixed(2)}
      </p>

      <div className="payment-providers">
        <h2>Choose Payment Method</h2>
        {paymentProviders.map((provider) => (
          <button
            key={provider.name}
            onClick={() => handleRedirectPayment(provider.name)}
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

      <footer>
        <p>Powered by BillEase - Simple, Fair, Fast.</p>
      </footer>
    </div>
  );
};

export default BillingPage;
