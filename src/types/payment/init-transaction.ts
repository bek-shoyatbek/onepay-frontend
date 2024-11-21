import { PaymentProvider, Terminal } from "../../constants";

export interface InitTransactionDto {
  orderId: string;
  userId: string;
  total: number;
  spotId: string;
  tableId: string;
  provider: PaymentProvider;
  terminal: Terminal;
  tip: number;
}
