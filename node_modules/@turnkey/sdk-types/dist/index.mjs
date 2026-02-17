var SessionType;
(function (SessionType) {
    SessionType["READ_ONLY"] = "SESSION_TYPE_READ_ONLY";
    SessionType["READ_WRITE"] = "SESSION_TYPE_READ_WRITE";
})(SessionType || (SessionType = {}));
var FiatOnRampProvider;
(function (FiatOnRampProvider) {
    FiatOnRampProvider["COINBASE"] = "FIAT_ON_RAMP_PROVIDER_COINBASE";
    FiatOnRampProvider["MOONPAY"] = "FIAT_ON_RAMP_PROVIDER_MOONPAY";
})(FiatOnRampProvider || (FiatOnRampProvider = {}));
var FiatOnRampCryptoCurrency;
(function (FiatOnRampCryptoCurrency) {
    FiatOnRampCryptoCurrency["BITCOIN"] = "FIAT_ON_RAMP_CRYPTO_CURRENCY_BTC";
    FiatOnRampCryptoCurrency["ETHEREUM"] = "FIAT_ON_RAMP_CRYPTO_CURRENCY_ETH";
    FiatOnRampCryptoCurrency["SOLANA"] = "FIAT_ON_RAMP_CRYPTO_CURRENCY_SOL";
    FiatOnRampCryptoCurrency["USDC"] = "FIAT_ON_RAMP_CRYPTO_CURRENCY_USDC";
})(FiatOnRampCryptoCurrency || (FiatOnRampCryptoCurrency = {}));
var FiatOnRampCurrency;
(function (FiatOnRampCurrency) {
    FiatOnRampCurrency["AUD"] = "FIAT_ON_RAMP_CURRENCY_AUD";
    FiatOnRampCurrency["BGN"] = "FIAT_ON_RAMP_CURRENCY_BGN";
    FiatOnRampCurrency["BRL"] = "FIAT_ON_RAMP_CURRENCY_BRL";
    FiatOnRampCurrency["CAD"] = "FIAT_ON_RAMP_CURRENCY_CAD";
    FiatOnRampCurrency["CHF"] = "FIAT_ON_RAMP_CURRENCY_CHF";
    FiatOnRampCurrency["COP"] = "FIAT_ON_RAMP_CURRENCY_COP";
    FiatOnRampCurrency["CZK"] = "FIAT_ON_RAMP_CURRENCY_CZK";
    FiatOnRampCurrency["DKK"] = "FIAT_ON_RAMP_CURRENCY_DKK";
    FiatOnRampCurrency["DOP"] = "FIAT_ON_RAMP_CURRENCY_DOP";
    FiatOnRampCurrency["EGP"] = "FIAT_ON_RAMP_CURRENCY_EGP";
    FiatOnRampCurrency["EUR"] = "FIAT_ON_RAMP_CURRENCY_EUR";
    FiatOnRampCurrency["GBP"] = "FIAT_ON_RAMP_CURRENCY_GBP";
    FiatOnRampCurrency["HKD"] = "FIAT_ON_RAMP_CURRENCY_HKD";
    FiatOnRampCurrency["IDR"] = "FIAT_ON_RAMP_CURRENCY_IDR";
    FiatOnRampCurrency["ILS"] = "FIAT_ON_RAMP_CURRENCY_ILS";
    FiatOnRampCurrency["JOD"] = "FIAT_ON_RAMP_CURRENCY_JOD";
    FiatOnRampCurrency["KES"] = "FIAT_ON_RAMP_CURRENCY_KES";
    FiatOnRampCurrency["KWD"] = "FIAT_ON_RAMP_CURRENCY_KWD";
    FiatOnRampCurrency["LKR"] = "FIAT_ON_RAMP_CURRENCY_LKR";
    FiatOnRampCurrency["MXN"] = "FIAT_ON_RAMP_CURRENCY_MXN";
    FiatOnRampCurrency["NGN"] = "FIAT_ON_RAMP_CURRENCY_NGN";
    FiatOnRampCurrency["NOK"] = "FIAT_ON_RAMP_CURRENCY_NOK";
    FiatOnRampCurrency["NZD"] = "FIAT_ON_RAMP_CURRENCY_NZD";
    FiatOnRampCurrency["OMR"] = "FIAT_ON_RAMP_CURRENCY_OMR";
    FiatOnRampCurrency["PEN"] = "FIAT_ON_RAMP_CURRENCY_PEN";
    FiatOnRampCurrency["PLN"] = "FIAT_ON_RAMP_CURRENCY_PLN";
    FiatOnRampCurrency["RON"] = "FIAT_ON_RAMP_CURRENCY_RON";
    FiatOnRampCurrency["SEK"] = "FIAT_ON_RAMP_CURRENCY_SEK";
    FiatOnRampCurrency["THB"] = "FIAT_ON_RAMP_CURRENCY_THB";
    FiatOnRampCurrency["TRY"] = "FIAT_ON_RAMP_CURRENCY_TRY";
    FiatOnRampCurrency["TWD"] = "FIAT_ON_RAMP_CURRENCY_TWD";
    FiatOnRampCurrency["USD"] = "FIAT_ON_RAMP_CURRENCY_USD";
    FiatOnRampCurrency["VND"] = "FIAT_ON_RAMP_CURRENCY_VND";
    FiatOnRampCurrency["ZAR"] = "FIAT_ON_RAMP_CURRENCY_ZAR";
})(FiatOnRampCurrency || (FiatOnRampCurrency = {}));
var FiatOnRampBlockchainNetwork;
(function (FiatOnRampBlockchainNetwork) {
    FiatOnRampBlockchainNetwork["BITCOIN"] = "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BITCOIN";
    FiatOnRampBlockchainNetwork["ETHEREUM"] = "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_ETHEREUM";
    FiatOnRampBlockchainNetwork["SOLANA"] = "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_SOLANA";
    FiatOnRampBlockchainNetwork["BASE"] = "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BASE";
})(FiatOnRampBlockchainNetwork || (FiatOnRampBlockchainNetwork = {}));
var FiatOnRampPaymentMethod;
(function (FiatOnRampPaymentMethod) {
    // Shared methods (supported by both MoonPay and Coinbase)
    FiatOnRampPaymentMethod["CREDIT_DEBIT_CARD"] = "FIAT_ON_RAMP_PAYMENT_METHOD_CREDIT_DEBIT_CARD";
    FiatOnRampPaymentMethod["APPLE_PAY"] = "FIAT_ON_RAMP_PAYMENT_METHOD_APPLE_PAY";
    // MoonPay-specific methods
    FiatOnRampPaymentMethod["GBP_BANK_TRANSFER"] = "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_BANK_TRANSFER";
    FiatOnRampPaymentMethod["GBP_OPEN_BANKING_PAYMENT"] = "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_OPEN_BANKING_PAYMENT";
    FiatOnRampPaymentMethod["GOOGLE_PAY"] = "FIAT_ON_RAMP_PAYMENT_METHOD_GOOGLE_PAY";
    FiatOnRampPaymentMethod["SEPA_BANK_TRANSFER"] = "FIAT_ON_RAMP_PAYMENT_METHOD_SEPA_BANK_TRANSFER";
    FiatOnRampPaymentMethod["PIX_INSTANT_PAYMENT"] = "FIAT_ON_RAMP_PAYMENT_METHOD_PIX_INSTANT_PAYMENT";
    FiatOnRampPaymentMethod["PAYPAL"] = "FIAT_ON_RAMP_PAYMENT_METHOD_PAYPAL";
    FiatOnRampPaymentMethod["VENMO"] = "FIAT_ON_RAMP_PAYMENT_METHOD_VENMO";
    FiatOnRampPaymentMethod["MOONPAY_BALANCE"] = "FIAT_ON_RAMP_PAYMENT_METHOD_MOONPAY_BALANCE";
    // Coinbase-specific methods
    FiatOnRampPaymentMethod["CRYPTO_ACCOUNT"] = "FIAT_ON_RAMP_PAYMENT_METHOD_CRYPTO_ACCOUNT";
    FiatOnRampPaymentMethod["FIAT_WALLET"] = "FIAT_ON_RAMP_PAYMENT_METHOD_FIAT_WALLET";
    FiatOnRampPaymentMethod["ACH_BANK_ACCOUNT"] = "FIAT_ON_RAMP_PAYMENT_METHOD_ACH_BANK_ACCOUNT";
})(FiatOnRampPaymentMethod || (FiatOnRampPaymentMethod = {}));

export { FiatOnRampBlockchainNetwork, FiatOnRampCryptoCurrency, FiatOnRampCurrency, FiatOnRampPaymentMethod, FiatOnRampProvider, SessionType };
//# sourceMappingURL=index.mjs.map
