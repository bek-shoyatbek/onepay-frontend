import uzum from "../../assets/uzum.png";
import payme from "../../assets/payme.png";
import click from "../../assets/click.png";
import { PaymentProvider } from "../payment-provider.constant";
export const paymentProviders: { id: string; name: PaymentProvider; icon: string }[] = [
  {
    id: "uzum",
    name: PaymentProvider.UZUM,
    icon: uzum,
  },
  {
    id: "payme",
    name: PaymentProvider.PAYME,
    icon: payme,
  },
  {
    id: "click",
    name: PaymentProvider.CLICK,
    icon: click,
  },
];
