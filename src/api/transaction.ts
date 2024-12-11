import { api } from "../configs/index.ts";
import { CreateTransaction } from "../types/create-transaction.type.ts";


export async function createTransaction(transaction: CreateTransaction) {
    try {
        const response = await api.post(`/transactions`, transaction);
        return response.data?.url;
    } catch (err) {
        console.error("Error while initializing transaction:\n", err);
        throw err;
    }
}
