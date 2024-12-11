interface BillDetailsProps {
  billAmount: number;
  totalAmount: number;
  addSpaceIntoAmount: (amount: number) => string;
  tip: number;
}

export const BillDetails = ({
  billAmount,
  totalAmount,
  addSpaceIntoAmount,
    tip
}: BillDetailsProps) => (
  <div className="bill_details">
    <table>
      <tbody>
        <tr>
          <th>Счет:</th>
          <td>{addSpaceIntoAmount(billAmount)} сум</td>
        </tr>
        <tr>
          <th>Чаевые({tip}%)</th>
          <td>{addSpaceIntoAmount(totalAmount - billAmount)} сум</td>
        </tr>
        <tr>
          <th>Комиссия сервиса(5%)</th>
          <td>{addSpaceIntoAmount(totalAmount * 0.1)} сум</td>
        </tr>
      </tbody>
    </table>
    <div className="total_amount">
      <h2 className="total_amount_title">Итоговая оплата</h2>
      <h1>{totalAmount.toLocaleString().split(",").join(" ")}</h1>
    </div>
  </div>
);
