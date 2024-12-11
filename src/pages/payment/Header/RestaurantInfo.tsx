import bgImage from "../../../assets/bg.png";
import "./RestaurantInfo.css";
import { WaiterInfo } from "../WaiterSection/WaiterInfo.tsx";

export type RestaurantInfoProps = {
  title: string;
  location: string;
  image: string;
};

export const RestaurantInfo = ({
  title,
  location,
  image,
}: RestaurantInfoProps) => (
  <div className="restaurant-info-container">
    <img
      className="restaurant-info-bg-image"
      src={image ?? bgImage}
      alt="background-image"
    />
    <div className="restaurant-info-round-number">
      <p className="restaurant-info-round-text">9,8</p>
    </div>
    <div className="restaurant-info-details">
      <h2 className="restaurant-info-name">{title}</h2>
      <p className="restaurant-info-address">{location}</p>
      <div className="restaurant-info-buttons">
        <button className="restaurant-info-award-button">
          <span className="res_info_text_1">1 Ресторанная премия</span>
        </button>
        <button className="restaurant-info-vote-button">
          <span className="res_info_text_2">Голосуй за наше заведение</span>
        </button>
      </div>
      <WaiterInfo />
    </div>
  </div>
);

export default RestaurantInfo;
