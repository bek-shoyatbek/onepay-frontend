interface PaymentButtonsProps {
  onPayClick: () => void;
}

export const PaymentButtons = ({ onPayClick }: PaymentButtonsProps) => (
  <div className="btns">
    <div className="add_card_container">
      <button type="button">
        Добавить карту <span className="plus">+</span>
      </button>
    </div>
    <button className="pay_btn" onClick={onPayClick}>
      Оплатить
    </button>
  </div>
);
