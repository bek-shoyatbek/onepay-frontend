import sendIcon from "../../assets/send-icon.svg";

interface RatingSelectorProps {
  rating: number;
  rateText: string;
  onStarClick: (rating: number) => void;
}

export const RatingSelector = ({
  rating,
  rateText,
  onStarClick,
}: RatingSelectorProps) => (
  <div className="rate_service">
    <h2 className="rate_title">Оцените сервис</h2>
    <p className="rate_p">{rateText}</p>
    <div className="stars_container">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "active" : ""}`}
          onClick={() => onStarClick(star)}
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
          <img src={sendIcon} alt="send-icon" />
        </span>
      </button>
    </div>
  </div>
);
