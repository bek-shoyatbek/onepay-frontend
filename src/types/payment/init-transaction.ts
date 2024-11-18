import { PaymentProvider, Terminal } from "../../constants";

export interface InitTransactionDto {
  orderId: string;
  userId: string;
  amount: number;
  spotId: string;
  provider: PaymentProvider;
  terminal: Terminal;
  tip: number;
}
