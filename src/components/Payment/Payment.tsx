import { ASSETS } from "../../constants/assets/assets";
import { paymentProviders } from "../../constants/payment-services/payment-providers";
import "./Payment.css";

export function Payment() {
  return (
    <>
      <div className="main">
        <div className="background_image">
          <img src={ASSETS.backgroundImage} alt="background-image" />
        </div>
        <div className="waiter_info">
          <img src={ASSETS.waiterImage} alt="waiter-image" />
          <div className="waiter_details">
            <span className="waiter_status">Waiter</span>
            <h1>Waiter Name</h1>
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
            <button className="bill_and_tip">Bill and Tip</button>
            <button className="bill_only">Bill Only</button>
          </div>
        </div>
        <div className="total_amount">
          <h1>Total Amount</h1>
          <h2>$0.00</h2>
        </div>
        <div className="tip_container">
          <h1 className="tip_percentage_title"> Tip Percentage</h1>
          <div className="tip_percentage">
            <ul className="percentage">
              <li className="percentage">15%</li>
              <li className="percentage">20%</li>
              <li className="percentage">25%</li>
              <li className="percentage">30%</li>
            </ul>
          </div>
          <form action="/" className="rate_service">
            <p className="rate">Good Rate</p>
            <div className="stars_container">
              <ul className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <li key={star} className="star star_rate">
                    ★
                  </li>
                ))}
              </ul>
            </div>
            <div className="text">
              <textarea placeholder="Rate Service" />
            </div>
            <button type="submit">Rate Service</button>
          </form>
        </div>
        <div className="bill_details">
          <table>
            <tr>
              <th>Total: </th>
              <th>Tip: </th>
              <th>Service commission: </th>
            </tr>
            <tr>
              <td>$50.00</td>
              <td>$6.00</td>
              <td>$2.00</td>
            </tr>
          </table>
          <h2 className="total_amount">Total Amount</h2>
          <h1>$58</h1>
        </div>
        <div className="payment_providers_container1">
          <div className="payment-providers1">
            <h2>Choose Payment Method</h2>
            {paymentProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => alert(provider.name)}
                className="provider-button1"
              >
                <img
                  src={provider.icon}
                  alt={provider.name}
                  className="provider-icon1"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="add_card_container">
          <button type="button">Add Card +</button>
        </div>
        <button className="pay_btn">Pay Now</button>
      </div>
    </>
  );
}
