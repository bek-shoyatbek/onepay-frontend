export interface InitTransactionDto {
  orderId: string;
  userId: string;
  amount: number;
  spotId?: string;
  provider: "uzum" | "payme" | "click";
  tip: number;
}
