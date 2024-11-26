import bgImage from "../../../assets/bg.png";
import "./RestaurantInfo.css";
import {WaiterInfo} from "../WaiterSection/WaiterInfo.tsx";

export const RestaurantInfo = () => (
    <div className="restaurant-info-container">
        <img className="restaurant-info-bg-image" src={bgImage} alt="background-image" />
        <div className="restaurant-info-round-number">
            <p className="restaurant-info-round-text">9,8</p>
        </div>
        <div className="restaurant-info-details">
            <h2 className="restaurant-info-name">BON</h2>
            <p className="restaurant-info-address">
                <b>Westminster</b> ул. Овози 24
            </p>
            <div className="restaurant-info-buttons">
                <button className="restaurant-info-award-button"><span className='res_info_text_1'>1 Ресторанная премия</span></button>
                <button className="restaurant-info-vote-button"><span className='res_info_text_2'>Голосуй за наше заведение</span></button>
            </div>
        <WaiterInfo />
        </div>
    </div>
);

export default RestaurantInfo;