import { __awaiter } from '../../_virtual/_tslib.js';
import { BaseAPI, RequiredError, JSONApiResponse, VoidApiResponse } from '../runtime.js';
import '../models/ExchangeKeyEnum.js';
import '../models/AttestationConveyancePreference.js';
import '../models/AuthModeEnum.js';
import '../models/AuthStorageEnum.js';
import '../models/AuthenticatorAttachment.js';
import '../models/ResidentKeyRequirement.js';
import '../models/UserVerificationRequirement.js';
import '../models/AuthenticatorTransportProtocol.js';
import '../models/WaasBackupOptionsEnum.js';
import '../models/ThresholdSignatureScheme.js';
import '../models/JwtVerifiedCredentialFormatEnum.js';
import '../models/ProviderEnum.js';
import '../models/WalletAddressType.js';
import '../models/EcdsaValidatorOptions.js';
import '../models/EmbeddedWalletVersionEnum.js';
import '../models/HardwareWalletEnum.js';
import '../models/PasswordSourceTypeEnum.js';
import '../models/ProviderEntryPointVersionEnum.js';
import '../models/ProviderKernelVersionEnum.js';
import '../models/WalletProviderEnum.js';
import '../models/MfaBackupCodeAcknowledgement.js';
import '../models/CustomFieldType.js';
import '../models/KycFieldType.js';
import '../models/ChainEnum.js';
import '../models/CoinbaseOnrampFeeType.js';
import '../models/CoinbaseOnrampOrderPaymentMethod.js';
import '../models/CoinbaseOnrampOrderStatus.js';
import '../models/CoinbaseOnrampOrderPaymentLinkType.js';
import '../models/EmbeddedWalletChainEnum.js';
import '../models/EmbeddedWalletProviderEnum.js';
import '../models/RoomTypeEnum.js';
import '../models/UserIdentifierTypeEnum.js';
import '../models/WaasChainEnum.js';
import '../models/CurrencyType.js';
import '../models/DelegatedAccessEncryptionPublicKey.js';
import { DelegatedAccessEncryptionPublicKeyResponseFromJSON } from '../models/DelegatedAccessEncryptionPublicKeyResponse.js';
import '../models/DelegatedShareDeliveryResponse.js';
import '../models/TimeUnitEnum.js';
import '../models/EmbeddedWalletAuthType.js';
import '../models/EmbeddedWalletSecurityMethod.js';
import '../models/EnvironmentEnum.js';
import '../models/ExternalWalletFundingDefaultChain.js';
import '../models/ExternalWalletFundingTokenRule.js';
import '../models/OnrampProviders.js';
import '../models/PasskeyTransport.js';
import '../models/PasskeyCredentialHint.js';
import '../models/PasskeyCredentialType.js';
import '../models/PublicKeyCredentialType.js';
import '../models/GlobalWalletAccessControlTypeEnum.js';
import '../models/GlobalWalletConnectionStatusEnum.js';
import '../models/HealthcheckStatus.js';
import '../models/MFAAction.js';
import '../models/MFADeviceType.js';
import '../models/Network.js';
import '../models/NextViewEnum.js';
import '../models/OauthResultStatus.js';
import '../models/SignInProviderEnum.js';
import '../models/SocialSignInProviderEnum.js';
import '../models/SdkViewSectionAlignment.js';
import '../models/SdkViewSectionType.js';
import '../models/SdkViewType.js';
import '../models/ZerodevBundlerProvider.js';
import '../models/PublishEventsEvents.js';
import '../models/SsoProviderEnum.js';
import '../models/SsoProviderCheckResponse.js';
import '../models/UnprocessableEntityErrorCode.js';
import '../models/UserFieldsCheckEnum.js';
import '../models/WaasDelegatedAccessEncryptionPublicKeyType.js';

/* tslint:disable */
/**
 *
 */
class WaasApi extends BaseAPI {
    /**
     * Fetches the encryption public key used for delegated access in a WAAS environment. By default, returns only the latest active key.
     * Get delegated access encryption public key for an environment
     */
    getDelegatedAccessEncryptionPublicKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling getDelegatedAccessEncryptionPublicKey.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/waas/delegatedAccess/encryptionPublicKey`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => DelegatedAccessEncryptionPublicKeyResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetches the encryption public key used for delegated access in a WAAS environment. By default, returns only the latest active key.
     * Get delegated access encryption public key for an environment
     */
    getDelegatedAccessEncryptionPublicKey(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDelegatedAccessEncryptionPublicKeyRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Returns the allowed HTTP methods and CORS headers for this endpoint.
     * Get CORS and allowed methods for delegated access encryption public keys endpoint
     */
    optionsDelegatedAccessEncryptionPublicKeyRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.environmentId === null || requestParameters.environmentId === undefined) {
                throw new RequiredError('environmentId', 'Required parameter requestParameters.environmentId was null or undefined when calling optionsDelegatedAccessEncryptionPublicKey.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/sdk/{environmentId}/waas/delegatedAccess/encryptionPublicKey`.replace(`{${"environmentId"}}`, encodeURIComponent(String(requestParameters.environmentId))),
                method: 'OPTIONS',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new VoidApiResponse(response);
        });
    }
    /**
     * Returns the allowed HTTP methods and CORS headers for this endpoint.
     * Get CORS and allowed methods for delegated access encryption public keys endpoint
     */
    optionsDelegatedAccessEncryptionPublicKey(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.optionsDelegatedAccessEncryptionPublicKeyRaw(requestParameters, initOverrides);
        });
    }
}

export { WaasApi };
