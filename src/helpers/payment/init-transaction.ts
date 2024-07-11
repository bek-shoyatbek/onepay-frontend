import { InitTransactionDto } from "../../types/payment/init-transaction";
const API = import.meta.env.VITE_API;

export async function initTransaction(initTrans: InitTransactionDto) {
  const response = await fetch(`${API}/api/v1/payment-services/init`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(initTrans),
  });
  const data = await response.json();
  console.log("initTransaction", data);
  return data;
}
