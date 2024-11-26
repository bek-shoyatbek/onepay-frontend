import {TipSelectorProps} from "./tip-selector.props.ts";
import "./TipSelector.css";


export const TipSelector = ({ selectedTip, onTipClick }: TipSelectorProps) => (
  <div className="tip_percentage">
    <h1 className="tip_percentage_title">Оставьте чаевые</h1>
    <ul className="percentage">
      {[0, 5, 10, 15, 20].map((percentage) => (
        <li
          key={percentage}
          className={`percentage ${selectedTip === percentage ? "active" : ""}`}
          onClick={() => onTipClick(percentage)}
        >
          {percentage}%
        </li>
      ))}
    </ul>
  </div>
);
