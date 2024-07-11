export interface RedirectParams {
  orderId: string;
  userId: string;
  total: number;
  spotId: string;
  tip: number;
  provider: "uzum" | "payme" | "click";
}
