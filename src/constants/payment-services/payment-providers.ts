import uzum from "../../assets/uzum.png";
import payme from "../../assets/payme.png";
import click from "../../assets/click.png";
export const paymentProviders = [
  {
    id: "uzum",
    name: "uzum",
    // icon: "https://drive.google.com/thumbnail?id=1h8LtyzeO4eqK09y7yOCE6RAAH4IY1k57",
    icon: uzum,
  },
  {
    id: "payme",
    name: "payme",
    // icon: "https://api.logobank.uz/media/logos_png/payme-01.png",
    icon: payme,
  },
  {
    id: "click",
    name: "click",
    // icon: "https://api.logobank.uz/media/logos_png/Click-01.png",
    icon: click,
  },
  {
    id: "payme1",
    name: "payme1",
    // icon: "https://api.logobank.uz/media/logos_png/payme-01.png",
    icon: payme,
  },
];

export enum PaymentProviders {
  UZUM = "uzum",
  PAYME = "payme",
  CLICK = "click",
}
