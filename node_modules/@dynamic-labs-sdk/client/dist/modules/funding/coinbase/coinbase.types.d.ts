import type { CoinbaseOnrampFeeType as CoinbaseOnrampFeeTypeEnum, CoinbaseOnrampOrderPaymentLinkType as CoinbaseOnrampOrderPaymentLinkTypeEnum, CoinbaseOnrampOrderPaymentMethod as CoinbaseOnrampOrderPaymentMethodEnum, CoinbaseOnrampOrderStatus as CoinbaseOnrampOrderStatusEnum, UserFields } from '@dynamic-labs/sdk-api-core';
export type { CoinbaseOnrampGetBuyUrlRequest, CoinbaseOnrampGetBuyUrlResponse, } from '@dynamic-labs/sdk-api-core';
export type CoinbaseOnrampFeeType = `${CoinbaseOnrampFeeTypeEnum}`;
export type CoinbaseOnrampOrderPaymentLinkType = `${CoinbaseOnrampOrderPaymentLinkTypeEnum}`;
export type CoinbaseOnrampOrderPaymentMethod = `${CoinbaseOnrampOrderPaymentMethodEnum}`;
export type CoinbaseOnrampOrderStatus = `${CoinbaseOnrampOrderStatusEnum}`;
export type CoinbaseOnrampFee = {
    /**
     * The amount of the fee.
     *
     * @example "0.95"
     */
    amount: string;
    /**
     * The currency of the fee.
     *
     * @example "USD"
     */
    currency: string;
    /**
     * The type of the fee.
     *
     * @example "FEE_TYPE_NETWORK"
     */
    type: CoinbaseOnrampFeeType;
};
export type CoinbaseOnrampOrderResponse = {
    order: {
        /**
         * The date and time the order was created.
         *
         * @example "2025-04-24T00:00:00Z"
         */
        createdAt: Date;
        /**
         * The address the purchased crypto will be sent to.
         *
         * @example "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
         */
        destinationAddress: string;
        /**
         * The network the purchased crypto will be sent on.
         *
         * @example "base"
         */
        destinationNetwork: string;
        /**
         * The exchange rate used to convert fiat to crypto i.e. the crypto value of one fiat.
         *
         * @example "1"
         */
        exchangeRate: string;
        /**
         * The fees associated with the order.
         *
         * @example
         * [
         *   {
         *     "type": "FEE_TYPE_EXCHANGE",
         *     "amount": "0.5",
         *     "currency": "USD"
         *   },
         *   {
         *     "type": "FEE_TYPE_NETWORK",
         *     "amount": "0.25",
         *     "currency": "USD"
         *   }
         * ]
         */
        fees: CoinbaseOnrampFee[];
        /**
         * The ID of the onramp order.
         *
         * @example "123e4567-e89b-12d3-a456-426614174000"
         */
        orderId: string;
        /**
         * The partner user reference ID.
         *
         * @example "user123"
         */
        partnerUserRef?: string;
        /**
         * The fiat currency to be converted to crypto.
         *
         * @example "USD"
         */
        paymentCurrency: string;
        /**
         * The type of payment method to be used to complete an onramp order.
         *
         * @example "GUEST_CHECKOUT_APPLE_PAY"
         */
        paymentMethod: CoinbaseOnrampOrderPaymentMethod;
        /**
         * The amount of fiat to be converted to crypto.
         *
         * @example "100"
         */
        paymentSubtotal: string;
        /**
         * The total amount of fiat to be paid, inclusive of any fees.
         *
         * @example "100.75"
         */
        paymentTotal: string;
        /**
         * The amount of crypto to be purchased.
         *
         * @example "100.000000"
         */
        purchaseAmount: string;
        /**
         * The crypto currency to be purchased.
         *
         * @example "USDC"
         */
        purchaseCurrency: string;
        /**
         * The status of an onramp order.
         *
         * @example "ONRAMP_ORDER_STATUS_COMPLETED"
         */
        status: CoinbaseOnrampOrderStatus;
        /**
         * The transaction hash of the order (only available once crypto has been sent).
         *
         * @example "0x363cd3b3d4f49497cf5076150cd709307b90e9fc897fdd623546ea7b9313cecb"
         */
        txHash?: string;
        /**
         * The date and time the order was last updated.
         *
         * @example "2025-04-24T00:00:00Z"
         */
        updatedAt: Date;
    };
    paymentLink?: {
        /**
         * The type of payment link.
         *
         * @example "PAYMENT_LINK_TYPE_APPLE_PAY"
         */
        paymentLinkType: CoinbaseOnrampOrderPaymentLinkType;
        /**
         * The URL to the hosted widget the user should be redirected to.
         * For certain payment link types you can append your own redirect_url query parameter
         * to this URL to ensure the user is redirected back to your app after the widget completes.
         *
         * @example "https://pay.coinbase.com/1234567890"
         */
        url: string;
    };
};
export type CoinbaseCreateOnrampOrderRequest = {
    /**
     * The timestamp of when the user acknowledged that by using Coinbase Onramp they are accepting the
     * Coinbase Terms (https://www.coinbase.com/legal/guest-checkout/us), User Agreement (https://www.coinbase.com/legal/user_agreement),
     * and Privacy Policy (https://www.coinbase.com/legal/privacy).
     *
     * @example "2025-04-24T00:00:00Z"
     */
    agreementAcceptedAt: Date;
    /**
     * The address the purchased crypto will be sent to.
     *
     * @example "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
     */
    destinationAddress: string;
    /**
     * The name of the crypto network the purchased currency will be sent on.
     * Use the [Onramp Buy Options API](https://docs.cdp.coinbase.com/api-reference/rest-api/onramp-offramp/get-buy-options)
     * to discover the supported networks for your user's location.
     *
     * @example "base"
     */
    destinationNetwork: string;
    /**
     * The domain that the Apple Pay button will be rendered on.
     * Required when embedding the payment link in an iframe.
     *
     * @example "pay.coinbase.com"
     */
    domain?: string;
    /**
     * If true, this API will return a quote without creating any transaction.
     *
     * @default false
     */
    isQuote?: boolean;
    /**
     * Whether to create a sandbox order for testing.
     *
     * This value will be ignored if you provide a partnerUserRef parameter.
     *
     * @default false
     */
    isSandbox?: boolean;
    /**
     * A unique string that represents the user in your app.
     * This can be used to link individual transactions together so you can retrieve the transaction history for your users.
     * Prefix this string with “sandbox-” (e.g. "sandbox-user-1234") to perform a sandbox transaction which will allow you to
     * test your integration without any real transfer of funds.
     *
     * If you do not provide a partnerUserRef, the order will be created with the user's Dynamic user ID, and the order will be created in sandbox mode
     * depending on the value of the isSandbox parameter.
     *
     * @example "user-1234"
     */
    partnerUserRef?: string;
    /**
     * A string representing the amount of fiat the user wishes to pay in exchange for crypto.
     * When using this parameter, the returned quote will be inclusive of fees i.e. the user will pay this exact amount of the payment currency.
     *
     * @example "100.00"
     */
    paymentAmount?: string;
    /**
     * The fiat currency to be converted to crypto.
     *
     * @example "USD"
     */
    paymentCurrency: string;
    /**
     * The type of payment method to be used to complete an onramp order.
     *
     * @example "GUEST_CHECKOUT_APPLE_PAY"
     */
    paymentMethod: CoinbaseOnrampOrderPaymentMethod;
    /**
     * A string representing the amount of crypto the user wishes to purchase.
     * When using this parameter the returned quote will be exclusive of fees i.e. the user will receive this exact amount of the purchase currency.
     *
     * @example "10.000000"
     */
    purchaseAmount?: string;
    /**
     * The ticker (e.g. BTC, USDC, SOL) or the Coinbase UUID (e.g. d85dce9b-5b73-5c3c-8978-522ce1d1c1b4) of the crypto asset to be purchased.
     *
     * Use the [Onramp Buy Options API](https://docs.cdp.coinbase.com/api-reference/rest-api/onramp-offramp/get-buy-options) to discover the
     * supported purchase currencies for your user's location.
     *
     * @example "USDC"
     */
    purchaseCurrency: string;
};
/**
 * The error code for a missing verification for a Coinbase onramp order.
 *
 * - "MISSING_INFORMATION": The data still needs to be collected from the user.
 * - "MISSING_VERIFICATION": The data has been collected from the user but it has not been verified.
 * - "VERIFICATION_EXPIRED": The data has been collected from the user and has been verified in the past,
 * but needs to be verified again.
 */
export type CoinbaseOnrampMissingVerificationErrorCode = 'MISSING_INFORMATION' | 'MISSING_VERIFICATION' | 'VERIFICATION_EXPIRED';
export type FieldMissingVerificationForCoinbaseOnramp = {
    field: Extract<keyof UserFields, 'email' | 'phoneNumber'>;
} & ({
    errorCode: 'MISSING_INFORMATION';
} | {
    /**
     * The data that is missing verification.
     *
     * @example "test@test.com"
     */
    data: string;
    errorCode: Exclude<CoinbaseOnrampMissingVerificationErrorCode, 'MISSING_INFORMATION'>;
});
//# sourceMappingURL=coinbase.types.d.ts.map