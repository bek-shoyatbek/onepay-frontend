import { RedirectParams } from "../../types/payment/redirect-params";
import { generateBase64ForPayme } from "../hash/generateBase64-for-payme";
import { initTransaction } from "./init-transaction";

export async function redirectPayme({
  orderId,
  spotId,
  userId,
  total,
  tip,
}: RedirectParams) {
  const baseUrl = "https://checkout.paycom.uz";
  const newTransaction = await initTransaction({
    orderId,
    spotId,
    userId,
    amount: total,
    tip,
    provider: "payme",
  });

  const paymeBase64 = generateBase64ForPayme({
    merchantId: newTransaction.merchantId,
    ac: {
      transactionId: newTransaction.transactionId,
    },
    amount: total,
    lang: "ru",
    cancelTime: 60,
  });

  const url = new URL(`${baseUrl}/checkout/${paymeBase64}`);
  window.location.href = url.toString();
}

// export function redirectClick({ provider }: RedirectParams) {
//   const baseUrl = "https://my.click.uz/services/pay";
//   const url = new URL(baseUrl);
//   url.searchParams.set("total", (bill.total + bill.tip).toFixed(2));
//   url.searchParams.set("orderId", getQueryParam("orderId"));
//   url.searchParams.set("userId", getQueryParam("userId"));
//   window.location.href = url.toString();
// }

// export function redirectUzum({ provider }: RedirectParams) {
//   const baseUrl = "https://www.apelsin.uz/open-service";
//   const url = new URL(baseUrl);

//   window.location.href = url.toString();
// }
