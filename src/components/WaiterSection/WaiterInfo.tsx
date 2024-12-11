import "./WaiterInfo.css";
import { ASSETS } from "../../assets";

export const WaiterInfo = () => (
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
);
