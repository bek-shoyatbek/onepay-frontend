interface PaymentButtonsProps {
  onPayClick: () => void;
  isAllowed: boolean;
}

export const PaymentButtons = ({ onPayClick , isAllowed}: PaymentButtonsProps) => (
  <div className="btns">
    <div className="add_card_container">
      <button type="button">
        Добавить карту <span className="plus">+</span>
      </button>
    </div>
    <button className="pay_btn" onClick={onPayClick} disabled={!isAllowed}>
      Оплатить
    </button>
  </div>
);
