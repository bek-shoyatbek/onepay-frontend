import { paymentProviders } from "../../../constants";
import { PaymentProvider } from "../../../constants";

interface PaymentProvidersProps {
  onProviderSelect: (provider: PaymentProvider) => void;
  selectedProvider: PaymentProvider;
}

export const PaymentProviders = ({
  onProviderSelect,
  selectedProvider,
}: PaymentProvidersProps) => (
  <div className="payment_providers_container">
    <h2>Выберите способ оплаты</h2>
    <div className="payment-providers">
      {paymentProviders.map((provider) => (
        <button
          key={provider.name}
          onClick={() => onProviderSelect(provider.name)}
          className={`provider-button ${selectedProvider === provider.name ? "active" : ""}`}
        >
          <img
            src={provider.icon}
            alt={provider.name}
            className="provider-icon"
          />
        </button>
      ))}
    </div>
  </div>
);
