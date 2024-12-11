import {Terminal} from "./enums/terminals.enum.ts";

export type QueryParams = {
    orderId: string;
    userId: string;
    spotId: string;
    tableId: string;
    terminal: Terminal;
    total: string;
}