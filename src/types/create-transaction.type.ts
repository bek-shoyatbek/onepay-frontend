import {Terminal} from "./enums/terminals.enum.ts";
import {PaymentProvider} from "./enums/provider.enum.ts";

export type CreateTransaction = {
    orderId: string;
    userId: string;
    total: number;
    spotId: string;
    tableId: string;
    isTipOnly: boolean;
    provider: PaymentProvider;
    terminal: Terminal;
    tip: number;
}
