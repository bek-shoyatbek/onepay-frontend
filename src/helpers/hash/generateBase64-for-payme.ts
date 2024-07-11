export interface GenerateBase64ForPaymeParams {
  merchantId: string;
  ac: {
    transactionId: string;
  };
  amount: number;
  lang?: "ru" | "en" | "uz";
  cancelUrl?: string;
  cancelTime?: number;
}

export function generateBase64ForPayme({
  merchantId,
  ac: { transactionId },
  amount,
  lang = "ru",
}: GenerateBase64ForPaymeParams) {
  return btoa(
    `m=${merchantId};ac.transactionId=${transactionId};a=${amount};l=${lang}`
  );
}
