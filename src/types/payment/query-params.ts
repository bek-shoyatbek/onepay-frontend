import { Terminal } from "../../constants";

export interface QueryParams {
    orderId: string;
    userId: string;
    spotId: string;
    tableId: string;
    terminal: Terminal;
    total: string;
}