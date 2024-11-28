interface BillingTypeProps {
  activeButton: string;
  onButtonClick: (buttonType: 'bill_and_tip' | 'tip_only') => void;
}

export const BillingType = ({
  activeButton,
  onButtonClick,
}: BillingTypeProps) => (
  <div className="billing_type">
    <div className="btn_container">
      <button
        className={`bill_and_tip ${
          activeButton === "bill_and_tip" ? "active" : ""
        }`}
        onClick={() => onButtonClick("bill_and_tip")}
      >
        Счет и чаевые
      </button>
      <button
        className={`bill_only ${activeButton === "tip_only" ? "active" : ""}`}
        onClick={() => onButtonClick("tip_only")}
      >
        Только чаевые
      </button>
    </div>
  </div>
);
