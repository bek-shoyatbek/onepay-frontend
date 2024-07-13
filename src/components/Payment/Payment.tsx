import { ASSETS } from "../../constants/assets/assets";
import { paymentProviders } from "../../constants/payment-services/payment-providers";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
              <li className="percentage">0%</li>
              <li className="percentage">5%</li>
              <li className="percentage">10%</li>
              <li className="percentage">15%</li>
              <li className="percentage">20%</li>
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
            <div className="feedback_container">
              <input
                type="text"
                placeholder="Write your feedback..."
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
          </form>
        </div>
        <div className="bill_details">
          <table>
            <tbody>
              <tr>
                <th>Total:</th>
                <td>$50.00</td>
              </tr>
              <tr>
                <th>Tip:</th>
                <td>$6.00</td>
              </tr>
              <tr>
                <th>Service commission:</th>
                <td>$2.00</td>
              </tr>
            </tbody>
          </table>
          <div className="total_amount">
            <h2>Total Amount</h2>
            <h1>$58</h1>
          </div>
        </div>
        <div className="payment_providers_container">
          <h2>Choose Payment Method</h2>
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
        <div className="add_card_container">
          <button type="button">Add Card +</button>
        </div>
        <button className="pay_btn">Pay Now</button>
      </div>
    </>
  );
}
