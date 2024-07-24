import { CONFIGS } from "../../configs";
import { InitTransactionDto } from "../../types/payment/init-transaction";
import axios from "axios";

const apiBackend = CONFIGS.api;

export async function initTransaction(initTrans: InitTransactionDto) {
  try {
    const response = await axios.post(`${apiBackend}/payment/init`, initTrans);
    const redirectURL = response.data?.url;
    console.log("redirectURL", redirectURL);
    return redirectURL;
  } catch (err) {
    console.error("Error while initializing transaction:\n", err);
    throw err;
  }
}
