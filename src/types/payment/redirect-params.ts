import { PaymentProvider } from "../../constants";

export interface RedirectParams {
  orderId: string;
  userId: string;
  total: number;
  spotId: string;
  tip: number;
  provider: PaymentProvider;
}
