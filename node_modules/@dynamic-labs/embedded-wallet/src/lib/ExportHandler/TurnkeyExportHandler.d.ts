import { ApiKeyStamper } from '@turnkey/api-key-stamper';
import { ExportHandler } from '@dynamic-labs/wallet-connector-core';
import { BaseTurnkeyHandler } from '../BaseTurnkeyHandler';
export declare class TurnkeyExportHandler extends BaseTurnkeyHandler implements ExportHandler {
    static apiKeyStamper: ApiKeyStamper | undefined;
    initExport(iframeContainer: HTMLElement, iframeElementId: string): Promise<string | null>;
    verifyExportWallet({ exportBundle, organizationId, }: {
        exportBundle: string;
        organizationId: string;
    }): Promise<boolean>;
    verifyExportPrivateKey({ exportBundle, organizationId, chain, }: {
        exportBundle: string;
        organizationId: string;
        chain?: string;
    }): Promise<boolean>;
    exportPrivateKey({ privateKeyId, organizationId, }: {
        privateKeyId: string;
        organizationId: string;
    }): Promise<{
        id: string;
        organizationId: string;
        status: "ACTIVITY_STATUS_CREATED" | "ACTIVITY_STATUS_PENDING" | "ACTIVITY_STATUS_COMPLETED" | "ACTIVITY_STATUS_FAILED" | "ACTIVITY_STATUS_CONSENSUS_NEEDED" | "ACTIVITY_STATUS_REJECTED";
        type: "ACTIVITY_TYPE_EXPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_EXPORT_WALLET_ACCOUNT" | "ACTIVITY_TYPE_EXPORT_WALLET" | "ACTIVITY_TYPE_CREATE_API_KEYS" | "ACTIVITY_TYPE_CREATE_USERS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD" | "ACTIVITY_TYPE_CREATE_INVITATIONS" | "ACTIVITY_TYPE_ACCEPT_INVITATION" | "ACTIVITY_TYPE_CREATE_POLICY" | "ACTIVITY_TYPE_DISABLE_PRIVATE_KEY" | "ACTIVITY_TYPE_DELETE_USERS" | "ACTIVITY_TYPE_DELETE_API_KEYS" | "ACTIVITY_TYPE_DELETE_INVITATION" | "ACTIVITY_TYPE_DELETE_ORGANIZATION" | "ACTIVITY_TYPE_DELETE_POLICY" | "ACTIVITY_TYPE_CREATE_USER_TAG" | "ACTIVITY_TYPE_DELETE_USER_TAGS" | "ACTIVITY_TYPE_CREATE_ORGANIZATION" | "ACTIVITY_TYPE_SIGN_TRANSACTION" | "ACTIVITY_TYPE_APPROVE_ACTIVITY" | "ACTIVITY_TYPE_REJECT_ACTIVITY" | "ACTIVITY_TYPE_DELETE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_DELETE_PRIVATE_KEY_TAGS" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD" | "ACTIVITY_TYPE_ACTIVATE_BILLING_TIER" | "ACTIVITY_TYPE_DELETE_PAYMENT_METHOD" | "ACTIVITY_TYPE_CREATE_POLICY_V2" | "ACTIVITY_TYPE_CREATE_POLICY_V3" | "ACTIVITY_TYPE_CREATE_API_ONLY_USERS" | "ACTIVITY_TYPE_UPDATE_ROOT_QUORUM" | "ACTIVITY_TYPE_UPDATE_USER_TAG" | "ACTIVITY_TYPE_UPDATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS_V2" | "ACTIVITY_TYPE_CREATE_ORGANIZATION_V2" | "ACTIVITY_TYPE_CREATE_USERS_V2" | "ACTIVITY_TYPE_ACCEPT_INVITATION_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V2" | "ACTIVITY_TYPE_UPDATE_ALLOWED_ORIGINS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS_V2" | "ACTIVITY_TYPE_UPDATE_USER" | "ACTIVITY_TYPE_UPDATE_POLICY" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V3" | "ACTIVITY_TYPE_CREATE_WALLET" | "ACTIVITY_TYPE_CREATE_WALLET_ACCOUNTS" | "ACTIVITY_TYPE_INIT_USER_EMAIL_RECOVERY" | "ACTIVITY_TYPE_RECOVER_USER" | "ACTIVITY_TYPE_SET_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_REMOVE_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD_V2" | "ACTIVITY_TYPE_SIGN_TRANSACTION_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V4" | "ACTIVITY_TYPE_EMAIL_AUTH" | "ACTIVITY_TYPE_INIT_IMPORT_WALLET" | "ACTIVITY_TYPE_IMPORT_WALLET" | "ACTIVITY_TYPE_INIT_IMPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_IMPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_CREATE_POLICIES" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOADS" | "ACTIVITY_TYPE_CREATE_READ_ONLY_SESSION" | "ACTIVITY_TYPE_CREATE_OAUTH_PROVIDERS" | "ACTIVITY_TYPE_DELETE_OAUTH_PROVIDERS" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V5" | "ACTIVITY_TYPE_OAUTH" | "ACTIVITY_TYPE_CREATE_API_KEYS_V2" | "ACTIVITY_TYPE_CREATE_READ_WRITE_SESSION" | "ACTIVITY_TYPE_EMAIL_AUTH_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V6" | "ACTIVITY_TYPE_DELETE_PRIVATE_KEYS" | "ACTIVITY_TYPE_DELETE_WALLETS" | "ACTIVITY_TYPE_CREATE_READ_WRITE_SESSION_V2" | "ACTIVITY_TYPE_DELETE_SUB_ORGANIZATION" | "ACTIVITY_TYPE_INIT_OTP_AUTH" | "ACTIVITY_TYPE_OTP_AUTH" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V7" | "ACTIVITY_TYPE_UPDATE_WALLET" | "ACTIVITY_TYPE_UPDATE_POLICY_V2" | "ACTIVITY_TYPE_CREATE_USERS_V3" | "ACTIVITY_TYPE_INIT_OTP_AUTH_V2" | "ACTIVITY_TYPE_INIT_OTP" | "ACTIVITY_TYPE_VERIFY_OTP" | "ACTIVITY_TYPE_OTP_LOGIN" | "ACTIVITY_TYPE_STAMP_LOGIN" | "ACTIVITY_TYPE_OAUTH_LOGIN" | "ACTIVITY_TYPE_UPDATE_USER_NAME" | "ACTIVITY_TYPE_UPDATE_USER_EMAIL" | "ACTIVITY_TYPE_UPDATE_USER_PHONE_NUMBER" | "ACTIVITY_TYPE_INIT_FIAT_ON_RAMP" | "ACTIVITY_TYPE_CREATE_SMART_CONTRACT_INTERFACE" | "ACTIVITY_TYPE_DELETE_SMART_CONTRACT_INTERFACE" | "ACTIVITY_TYPE_ENABLE_AUTH_PROXY" | "ACTIVITY_TYPE_DISABLE_AUTH_PROXY" | "ACTIVITY_TYPE_UPDATE_AUTH_PROXY_CONFIG";
        intent: {
            createOrganizationIntent?: {
                organizationName: string;
                rootEmail: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                };
                rootUserId?: string | undefined;
            } | undefined;
            createAuthenticatorsIntent?: {
                authenticators: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                }[];
                userId: string;
            } | undefined;
            createUsersIntent?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        userId: string;
                        attestation: {
                            id: string;
                            type: "public-key";
                            rawId: string;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            response: {
                                clientDataJson: string;
                                attestationObject: string;
                                transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            };
                            clientExtensionResults: {
                                appid?: boolean | undefined;
                                appidExclude?: boolean | undefined;
                                credProps?: {
                                    rk: boolean;
                                } | undefined;
                            };
                        };
                        challenge: string;
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            createPrivateKeysIntent?: {
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            signRawPayloadIntent?: {
                privateKeyId: string;
                payload: string;
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            createInvitationsIntent?: {
                invitations: {
                    receiverUserName: string;
                    receiverUserEmail: string;
                    receiverUserTags: string[];
                    accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                    senderUserId: string;
                }[];
            } | undefined;
            acceptInvitationIntent?: {
                invitationId: string;
                userId: string;
                authenticator: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                };
            } | undefined;
            createPolicyIntent?: {
                policyName: string;
                selectors: {
                    subject?: string | undefined;
                    operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                    target?: string | undefined;
                }[];
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                notes?: string | undefined;
            } | undefined;
            disablePrivateKeyIntent?: {
                privateKeyId: string;
            } | undefined;
            deleteUsersIntent?: {
                userIds: string[];
            } | undefined;
            deleteAuthenticatorsIntent?: {
                userId: string;
                authenticatorIds: string[];
            } | undefined;
            deleteInvitationIntent?: {
                invitationId: string;
            } | undefined;
            deleteOrganizationIntent?: {
                organizationId: string;
            } | undefined;
            deletePolicyIntent?: {
                policyId: string;
            } | undefined;
            createUserTagIntent?: {
                userTagName: string;
                userIds: string[];
            } | undefined;
            deleteUserTagsIntent?: {
                userTagIds: string[];
            } | undefined;
            signTransactionIntent?: {
                privateKeyId: string;
                unsignedTransaction: string;
                type: "TRANSACTION_TYPE_ETHEREUM" | "TRANSACTION_TYPE_SOLANA" | "TRANSACTION_TYPE_TRON";
            } | undefined;
            createApiKeysIntent?: {
                apiKeys: {
                    apiKeyName: string;
                    publicKey: string;
                    expirationSeconds?: string | undefined;
                }[];
                userId: string;
            } | undefined;
            deleteApiKeysIntent?: {
                userId: string;
                apiKeyIds: string[];
            } | undefined;
            approveActivityIntent?: {
                fingerprint: string;
            } | undefined;
            rejectActivityIntent?: {
                fingerprint: string;
            } | undefined;
            createPrivateKeyTagIntent?: {
                privateKeyTagName: string;
                privateKeyIds: string[];
            } | undefined;
            deletePrivateKeyTagsIntent?: {
                privateKeyTagIds: string[];
            } | undefined;
            createPolicyIntentV2?: {
                policyName: string;
                selectors: {
                    subject?: string | undefined;
                    operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                    targets?: string[] | undefined;
                }[];
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                notes?: string | undefined;
            } | undefined;
            setPaymentMethodIntent?: {
                number: string;
                cvv: string;
                expiryMonth: string;
                expiryYear: string;
                cardHolderEmail: string;
                cardHolderName: string;
            } | undefined;
            activateBillingTierIntent?: {
                productId: string;
            } | undefined;
            deletePaymentMethodIntent?: {
                paymentMethodId: string;
            } | undefined;
            createPolicyIntentV3?: {
                policyName: string;
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                condition?: string | undefined;
                consensus?: string | undefined;
                notes?: string | undefined;
            } | undefined;
            createApiOnlyUsersIntent?: {
                apiOnlyUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    userTags: string[];
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                }[];
            } | undefined;
            updateRootQuorumIntent?: {
                threshold: number;
                userIds: string[];
            } | undefined;
            updateUserTagIntent?: {
                userTagId: string;
                newUserTagName?: string | undefined;
                addUserIds: string[];
                removeUserIds: string[];
            } | undefined;
            updatePrivateKeyTagIntent?: {
                privateKeyTagId: string;
                newPrivateKeyTagName?: string | undefined;
                addPrivateKeyIds: string[];
                removePrivateKeyIds: string[];
            } | undefined;
            createAuthenticatorsIntentV2?: {
                authenticators: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                }[];
                userId: string;
            } | undefined;
            acceptInvitationIntentV2?: {
                invitationId: string;
                userId: string;
                authenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
            } | undefined;
            createOrganizationIntentV2?: {
                organizationName: string;
                rootEmail: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
                rootUserId?: string | undefined;
            } | undefined;
            createUsersIntentV2?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            createSubOrganizationIntent?: {
                name: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
            } | undefined;
            createSubOrganizationIntentV2?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
            } | undefined;
            updateAllowedOriginsIntent?: {
                allowedOrigins: string[];
            } | undefined;
            createPrivateKeysIntentV2?: {
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            updateUserIntent?: {
                userId: string;
                userName?: string | undefined;
                userEmail?: string | undefined;
                userTagIds?: string[] | undefined;
                userPhoneNumber?: string | undefined;
            } | undefined;
            updatePolicyIntent?: {
                policyId: string;
                policyName?: string | undefined;
                policyEffect?: "EFFECT_ALLOW" | "EFFECT_DENY" | undefined;
                policyCondition?: string | undefined;
                policyConsensus?: string | undefined;
                policyNotes?: string | undefined;
            } | undefined;
            setPaymentMethodIntentV2?: {
                paymentMethodId: string;
                cardHolderEmail: string;
                cardHolderName: string;
            } | undefined;
            createSubOrganizationIntentV3?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            createWalletIntent?: {
                walletName: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
                mnemonicLength?: number | undefined;
            } | undefined;
            createWalletAccountsIntent?: {
                walletId: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
            } | undefined;
            initUserEmailRecoveryIntent?: {
                email: string;
                targetPublicKey: string;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
            } | undefined;
            recoverUserIntent?: {
                authenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
                userId: string;
            } | undefined;
            setOrganizationFeatureIntent?: {
                name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY";
                value: string;
            } | undefined;
            removeOrganizationFeatureIntent?: {
                name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY";
            } | undefined;
            signRawPayloadIntentV2?: {
                signWith: string;
                payload: string;
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            signTransactionIntentV2?: {
                signWith: string;
                unsignedTransaction: string;
                type: "TRANSACTION_TYPE_ETHEREUM" | "TRANSACTION_TYPE_SOLANA" | "TRANSACTION_TYPE_TRON";
            } | undefined;
            exportPrivateKeyIntent?: {
                privateKeyId: string;
                targetPublicKey: string;
            } | undefined;
            exportWalletIntent?: {
                walletId: string;
                targetPublicKey: string;
                language?: "MNEMONIC_LANGUAGE_ENGLISH" | "MNEMONIC_LANGUAGE_SIMPLIFIED_CHINESE" | "MNEMONIC_LANGUAGE_TRADITIONAL_CHINESE" | "MNEMONIC_LANGUAGE_CZECH" | "MNEMONIC_LANGUAGE_FRENCH" | "MNEMONIC_LANGUAGE_ITALIAN" | "MNEMONIC_LANGUAGE_JAPANESE" | "MNEMONIC_LANGUAGE_KOREAN" | "MNEMONIC_LANGUAGE_SPANISH" | undefined;
            } | undefined;
            createSubOrganizationIntentV4?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            emailAuthIntent?: {
                email: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                invalidateExisting?: boolean | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            exportWalletAccountIntent?: {
                address: string;
                targetPublicKey: string;
            } | undefined;
            initImportWalletIntent?: {
                userId: string;
            } | undefined;
            importWalletIntent?: {
                userId: string;
                walletName: string;
                encryptedBundle: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
            } | undefined;
            initImportPrivateKeyIntent?: {
                userId: string;
            } | undefined;
            importPrivateKeyIntent?: {
                userId: string;
                privateKeyName: string;
                encryptedBundle: string;
                curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
            } | undefined;
            createPoliciesIntent?: {
                policies: {
                    policyName: string;
                    effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                    condition?: string | undefined;
                    consensus?: string | undefined;
                    notes?: string | undefined;
                }[];
            } | undefined;
            signRawPayloadsIntent?: {
                signWith: string;
                payloads: string[];
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            createReadOnlySessionIntent?: {
                [key: string]: unknown;
            } | undefined;
            createOauthProvidersIntent?: {
                userId: string;
                oauthProviders: {
                    providerName: string;
                    oidcToken: string;
                }[];
            } | undefined;
            deleteOauthProvidersIntent?: {
                userId: string;
                providerIds: string[];
            } | undefined;
            createSubOrganizationIntentV5?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            oauthIntent?: {
                oidcToken: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            createApiKeysIntentV2?: {
                apiKeys: {
                    apiKeyName: string;
                    publicKey: string;
                    curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                    expirationSeconds?: string | undefined;
                }[];
                userId: string;
            } | undefined;
            createReadWriteSessionIntent?: {
                targetPublicKey: string;
                email: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
            } | undefined;
            emailAuthIntentV2?: {
                email: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                invalidateExisting?: boolean | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            createSubOrganizationIntentV6?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            deletePrivateKeysIntent?: {
                privateKeyIds: string[];
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            deleteWalletsIntent?: {
                walletIds: string[];
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            createReadWriteSessionIntentV2?: {
                targetPublicKey: string;
                userId?: string | undefined;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            deleteSubOrganizationIntent?: {
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            initOtpAuthIntent?: {
                otpType: string;
                contact: string;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            otpAuthIntent?: {
                otpId: string;
                otpCode: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            createSubOrganizationIntentV7?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    userPhoneNumber?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
                disableSmsAuth?: boolean | undefined;
                disableOtpEmailAuth?: boolean | undefined;
                verificationToken?: string | undefined;
            } | undefined;
            updateWalletIntent?: {
                walletId: string;
                walletName?: string | undefined;
            } | undefined;
            updatePolicyIntentV2?: {
                policyId: string;
                policyName?: string | undefined;
                policyEffect?: "EFFECT_ALLOW" | "EFFECT_DENY" | undefined;
                policyCondition?: string | undefined;
                policyConsensus?: string | undefined;
                policyNotes?: string | undefined;
            } | undefined;
            createUsersIntentV3?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    userPhoneNumber?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            initOtpAuthIntentV2?: {
                otpType: string;
                contact: string;
                otpLength?: number | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                alphanumeric?: boolean | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            initOtpIntent?: {
                otpType: string;
                contact: string;
                otpLength?: number | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                alphanumeric?: boolean | undefined;
                sendFromEmailSenderName?: string | undefined;
                expirationSeconds?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            verifyOtpIntent?: {
                otpId: string;
                otpCode: string;
                expirationSeconds?: string | undefined;
            } | undefined;
            otpLoginIntent?: {
                verificationToken: string;
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            stampLoginIntent?: {
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            oauthLoginIntent?: {
                oidcToken: string;
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            updateUserNameIntent?: {
                userId: string;
                userName: string;
            } | undefined;
            updateUserEmailIntent?: {
                userId: string;
                userEmail: string;
                verificationToken?: string | undefined;
            } | undefined;
            updateUserPhoneNumberIntent?: {
                userId: string;
                userPhoneNumber: string;
                verificationToken?: string | undefined;
            } | undefined;
            initFiatOnRampIntent?: {
                onrampProvider: "FIAT_ON_RAMP_PROVIDER_COINBASE" | "FIAT_ON_RAMP_PROVIDER_MOONPAY";
                walletAddress: string;
                network: "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BITCOIN" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_ETHEREUM" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_SOLANA" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BASE";
                cryptoCurrencyCode: "FIAT_ON_RAMP_CRYPTO_CURRENCY_BTC" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_ETH" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_SOL" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_USDC";
                fiatCurrencyCode?: "FIAT_ON_RAMP_CURRENCY_AUD" | "FIAT_ON_RAMP_CURRENCY_BGN" | "FIAT_ON_RAMP_CURRENCY_BRL" | "FIAT_ON_RAMP_CURRENCY_CAD" | "FIAT_ON_RAMP_CURRENCY_CHF" | "FIAT_ON_RAMP_CURRENCY_COP" | "FIAT_ON_RAMP_CURRENCY_CZK" | "FIAT_ON_RAMP_CURRENCY_DKK" | "FIAT_ON_RAMP_CURRENCY_DOP" | "FIAT_ON_RAMP_CURRENCY_EGP" | "FIAT_ON_RAMP_CURRENCY_EUR" | "FIAT_ON_RAMP_CURRENCY_GBP" | "FIAT_ON_RAMP_CURRENCY_HKD" | "FIAT_ON_RAMP_CURRENCY_IDR" | "FIAT_ON_RAMP_CURRENCY_ILS" | "FIAT_ON_RAMP_CURRENCY_JOD" | "FIAT_ON_RAMP_CURRENCY_KES" | "FIAT_ON_RAMP_CURRENCY_KWD" | "FIAT_ON_RAMP_CURRENCY_LKR" | "FIAT_ON_RAMP_CURRENCY_MXN" | "FIAT_ON_RAMP_CURRENCY_NGN" | "FIAT_ON_RAMP_CURRENCY_NOK" | "FIAT_ON_RAMP_CURRENCY_NZD" | "FIAT_ON_RAMP_CURRENCY_OMR" | "FIAT_ON_RAMP_CURRENCY_PEN" | "FIAT_ON_RAMP_CURRENCY_PLN" | "FIAT_ON_RAMP_CURRENCY_RON" | "FIAT_ON_RAMP_CURRENCY_SEK" | "FIAT_ON_RAMP_CURRENCY_THB" | "FIAT_ON_RAMP_CURRENCY_TRY" | "FIAT_ON_RAMP_CURRENCY_TWD" | "FIAT_ON_RAMP_CURRENCY_USD" | "FIAT_ON_RAMP_CURRENCY_VND" | "FIAT_ON_RAMP_CURRENCY_ZAR" | undefined;
                fiatCurrencyAmount?: string | undefined;
                paymentMethod?: "FIAT_ON_RAMP_PAYMENT_METHOD_CREDIT_DEBIT_CARD" | "FIAT_ON_RAMP_PAYMENT_METHOD_APPLE_PAY" | "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_BANK_TRANSFER" | "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_OPEN_BANKING_PAYMENT" | "FIAT_ON_RAMP_PAYMENT_METHOD_GOOGLE_PAY" | "FIAT_ON_RAMP_PAYMENT_METHOD_SEPA_BANK_TRANSFER" | "FIAT_ON_RAMP_PAYMENT_METHOD_PIX_INSTANT_PAYMENT" | "FIAT_ON_RAMP_PAYMENT_METHOD_PAYPAL" | "FIAT_ON_RAMP_PAYMENT_METHOD_VENMO" | "FIAT_ON_RAMP_PAYMENT_METHOD_MOONPAY_BALANCE" | "FIAT_ON_RAMP_PAYMENT_METHOD_CRYPTO_ACCOUNT" | "FIAT_ON_RAMP_PAYMENT_METHOD_FIAT_WALLET" | "FIAT_ON_RAMP_PAYMENT_METHOD_ACH_BANK_ACCOUNT" | undefined;
                countryCode?: string | undefined;
                countrySubdivisionCode?: string | undefined;
                sandboxMode?: boolean | undefined;
            } | undefined;
            createSmartContractInterfaceIntent?: {
                smartContractAddress: string;
                smartContractInterface: string;
                type: "SMART_CONTRACT_INTERFACE_TYPE_ETHEREUM" | "SMART_CONTRACT_INTERFACE_TYPE_SOLANA";
                label: string;
                notes?: string | undefined;
            } | undefined;
            deleteSmartContractInterfaceIntent?: {
                smartContractInterfaceId: string;
            } | undefined;
            enableAuthProxyIntent?: {
                [key: string]: unknown;
            } | undefined;
            disableAuthProxyIntent?: {
                [key: string]: unknown;
            } | undefined;
            updateAuthProxyConfigIntent?: {
                allowedOrigins?: string[] | undefined;
                allowedAuthMethods?: string[] | undefined;
                sendFromEmailAddress?: string | undefined;
                replyToEmailAddress?: string | undefined;
                emailAuthTemplateId?: string | undefined;
                otpTemplateId?: string | undefined;
                emailCustomizationParams?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomizationParams?: {
                    template?: string | undefined;
                } | undefined;
                walletKitSettings?: {
                    enabledSocialProviders?: string[] | undefined;
                } | undefined;
                otpExpirationSeconds?: number | undefined;
                verificationTokenExpirationSeconds?: number | undefined;
                sessionExpirationSeconds?: number | undefined;
                otpAlphanumeric?: boolean | undefined;
                otpLength?: number | undefined;
            } | undefined;
        };
        result: {
            createOrganizationResult?: {
                organizationId: string;
            } | undefined;
            createAuthenticatorsResult?: {
                authenticatorIds: string[];
            } | undefined;
            createUsersResult?: {
                userIds: string[];
            } | undefined;
            createPrivateKeysResult?: {
                privateKeyIds: string[];
            } | undefined;
            createInvitationsResult?: {
                invitationIds: string[];
            } | undefined;
            acceptInvitationResult?: {
                invitationId: string;
                userId: string;
            } | undefined;
            signRawPayloadResult?: {
                r: string;
                s: string;
                v: string;
            } | undefined;
            createPolicyResult?: {
                policyId: string;
            } | undefined;
            disablePrivateKeyResult?: {
                privateKeyId: string;
            } | undefined;
            deleteUsersResult?: {
                userIds: string[];
            } | undefined;
            deleteAuthenticatorsResult?: {
                authenticatorIds: string[];
            } | undefined;
            deleteInvitationResult?: {
                invitationId: string;
            } | undefined;
            deleteOrganizationResult?: {
                organizationId: string;
            } | undefined;
            deletePolicyResult?: {
                policyId: string;
            } | undefined;
            createUserTagResult?: {
                userTagId: string;
                userIds: string[];
            } | undefined;
            deleteUserTagsResult?: {
                userTagIds: string[];
                userIds: string[];
            } | undefined;
            signTransactionResult?: {
                signedTransaction: string;
            } | undefined;
            deleteApiKeysResult?: {
                apiKeyIds: string[];
            } | undefined;
            createApiKeysResult?: {
                apiKeyIds: string[];
            } | undefined;
            createPrivateKeyTagResult?: {
                privateKeyTagId: string;
                privateKeyIds: string[];
            } | undefined;
            deletePrivateKeyTagsResult?: {
                privateKeyTagIds: string[];
                privateKeyIds: string[];
            } | undefined;
            setPaymentMethodResult?: {
                lastFour: string;
                cardHolderName: string;
                cardHolderEmail: string;
            } | undefined;
            activateBillingTierResult?: {
                productId: string;
            } | undefined;
            deletePaymentMethodResult?: {
                paymentMethodId: string;
            } | undefined;
            createApiOnlyUsersResult?: {
                userIds: string[];
            } | undefined;
            updateRootQuorumResult?: {
                [key: string]: unknown;
            } | undefined;
            updateUserTagResult?: {
                userTagId: string;
            } | undefined;
            updatePrivateKeyTagResult?: {
                privateKeyTagId: string;
            } | undefined;
            createSubOrganizationResult?: {
                subOrganizationId: string;
                rootUserIds?: string[] | undefined;
            } | undefined;
            updateAllowedOriginsResult?: {
                [key: string]: unknown;
            } | undefined;
            createPrivateKeysResultV2?: {
                privateKeys: {
                    privateKeyId?: string | undefined;
                    addresses?: {
                        format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                        address?: string | undefined;
                    }[] | undefined;
                }[];
            } | undefined;
            updateUserResult?: {
                userId: string;
            } | undefined;
            updatePolicyResult?: {
                policyId: string;
            } | undefined;
            createSubOrganizationResultV3?: {
                subOrganizationId: string;
                privateKeys: {
                    privateKeyId?: string | undefined;
                    addresses?: {
                        format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                        address?: string | undefined;
                    }[] | undefined;
                }[];
                rootUserIds?: string[] | undefined;
            } | undefined;
            createWalletResult?: {
                walletId: string;
                addresses: string[];
            } | undefined;
            createWalletAccountsResult?: {
                addresses: string[];
            } | undefined;
            initUserEmailRecoveryResult?: {
                userId: string;
            } | undefined;
            recoverUserResult?: {
                authenticatorId: string[];
            } | undefined;
            setOrganizationFeatureResult?: {
                features: {
                    name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY" | undefined;
                    value?: string | undefined;
                }[];
            } | undefined;
            removeOrganizationFeatureResult?: {
                features: {
                    name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY" | undefined;
                    value?: string | undefined;
                }[];
            } | undefined;
            exportPrivateKeyResult?: {
                privateKeyId: string;
                exportBundle: string;
            } | undefined;
            exportWalletResult?: {
                walletId: string;
                exportBundle: string;
            } | undefined;
            createSubOrganizationResultV4?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            emailAuthResult?: {
                userId: string;
                apiKeyId: string;
            } | undefined;
            exportWalletAccountResult?: {
                address: string;
                exportBundle: string;
            } | undefined;
            initImportWalletResult?: {
                importBundle: string;
            } | undefined;
            importWalletResult?: {
                walletId: string;
                addresses: string[];
            } | undefined;
            initImportPrivateKeyResult?: {
                importBundle: string;
            } | undefined;
            importPrivateKeyResult?: {
                privateKeyId: string;
                addresses: {
                    format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                    address?: string | undefined;
                }[];
            } | undefined;
            createPoliciesResult?: {
                policyIds: string[];
            } | undefined;
            signRawPayloadsResult?: {
                signatures?: {
                    r: string;
                    s: string;
                    v: string;
                }[] | undefined;
            } | undefined;
            createReadOnlySessionResult?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                session: string;
                sessionExpiry: string;
            } | undefined;
            createOauthProvidersResult?: {
                providerIds: string[];
            } | undefined;
            deleteOauthProvidersResult?: {
                providerIds: string[];
            } | undefined;
            createSubOrganizationResultV5?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            oauthResult?: {
                userId: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            createReadWriteSessionResult?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            createSubOrganizationResultV6?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            deletePrivateKeysResult?: {
                privateKeyIds: string[];
            } | undefined;
            deleteWalletsResult?: {
                walletIds: string[];
            } | undefined;
            createReadWriteSessionResultV2?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            deleteSubOrganizationResult?: {
                subOrganizationUuid: string;
            } | undefined;
            initOtpAuthResult?: {
                otpId: string;
            } | undefined;
            otpAuthResult?: {
                userId: string;
                apiKeyId?: string | undefined;
                credentialBundle?: string | undefined;
            } | undefined;
            createSubOrganizationResultV7?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            updateWalletResult?: {
                walletId: string;
            } | undefined;
            updatePolicyResultV2?: {
                policyId: string;
            } | undefined;
            initOtpAuthResultV2?: {
                otpId: string;
            } | undefined;
            initOtpResult?: {
                otpId: string;
            } | undefined;
            verifyOtpResult?: {
                verificationToken: string;
            } | undefined;
            otpLoginResult?: {
                session: string;
            } | undefined;
            stampLoginResult?: {
                session: string;
            } | undefined;
            oauthLoginResult?: {
                session: string;
            } | undefined;
            updateUserNameResult?: {
                userId: string;
            } | undefined;
            updateUserEmailResult?: {
                userId: string;
            } | undefined;
            updateUserPhoneNumberResult?: {
                userId: string;
            } | undefined;
            initFiatOnRampResult?: {
                onRampUrl: string;
                onRampTransactionId: string;
            } | undefined;
            createSmartContractInterfaceResult?: {
                smartContractInterfaceId: string;
            } | undefined;
            deleteSmartContractInterfaceResult?: {
                smartContractInterfaceId: string;
            } | undefined;
            enableAuthProxyResult?: {
                userId: string;
            } | undefined;
            disableAuthProxyResult?: {
                [key: string]: unknown;
            } | undefined;
            updateAuthProxyConfigResult?: {
                configId?: string | undefined;
            } | undefined;
        };
        votes: {
            id: string;
            userId: string;
            user: {
                userId: string;
                userName: string;
                userEmail?: string | undefined;
                userPhoneNumber?: string | undefined;
                authenticators: {
                    transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    attestationType: string;
                    aaguid: string;
                    credentialId: string;
                    model: string;
                    credential: {
                        publicKey: string;
                        type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_SECP256K1" | "CREDENTIAL_TYPE_EMAIL_AUTH_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_ED25519" | "CREDENTIAL_TYPE_OTP_AUTH_KEY_P256" | "CREDENTIAL_TYPE_READ_WRITE_SESSION_KEY_P256" | "CREDENTIAL_TYPE_OAUTH_KEY_P256" | "CREDENTIAL_TYPE_LOGIN";
                    };
                    authenticatorId: string;
                    authenticatorName: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                }[];
                apiKeys: {
                    credential: {
                        publicKey: string;
                        type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_SECP256K1" | "CREDENTIAL_TYPE_EMAIL_AUTH_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_ED25519" | "CREDENTIAL_TYPE_OTP_AUTH_KEY_P256" | "CREDENTIAL_TYPE_READ_WRITE_SESSION_KEY_P256" | "CREDENTIAL_TYPE_OAUTH_KEY_P256" | "CREDENTIAL_TYPE_LOGIN";
                    };
                    apiKeyId: string;
                    apiKeyName: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                    expirationSeconds?: string | undefined;
                }[];
                userTags: string[];
                oauthProviders: {
                    providerId: string;
                    providerName: string;
                    issuer: string;
                    audience: string;
                    subject: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                }[];
                createdAt: {
                    seconds: string;
                    nanos: string;
                };
                updatedAt: {
                    seconds: string;
                    nanos: string;
                };
            };
            activityId: string;
            selection: "VOTE_SELECTION_APPROVED" | "VOTE_SELECTION_REJECTED";
            message: string;
            publicKey: string;
            signature: string;
            scheme: string;
            createdAt: {
                seconds: string;
                nanos: string;
            };
        }[];
        fingerprint: string;
        canApprove: boolean;
        canReject: boolean;
        createdAt: {
            seconds: string;
            nanos: string;
        };
        updatedAt: {
            seconds: string;
            nanos: string;
        };
        failure?: {
            code?: number | undefined;
            message?: string | undefined;
            details?: ({
                "@type"?: string | undefined;
            } & {
                [key: string]: unknown;
            })[] | undefined;
        } | undefined;
    }>;
    exportWallet({ walletId, organizationId, address, }: {
        walletId: string;
        organizationId: string;
        address?: string;
    }): Promise<{
        id: string;
        organizationId: string;
        status: "ACTIVITY_STATUS_CREATED" | "ACTIVITY_STATUS_PENDING" | "ACTIVITY_STATUS_COMPLETED" | "ACTIVITY_STATUS_FAILED" | "ACTIVITY_STATUS_CONSENSUS_NEEDED" | "ACTIVITY_STATUS_REJECTED";
        type: "ACTIVITY_TYPE_EXPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_EXPORT_WALLET_ACCOUNT" | "ACTIVITY_TYPE_EXPORT_WALLET" | "ACTIVITY_TYPE_CREATE_API_KEYS" | "ACTIVITY_TYPE_CREATE_USERS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD" | "ACTIVITY_TYPE_CREATE_INVITATIONS" | "ACTIVITY_TYPE_ACCEPT_INVITATION" | "ACTIVITY_TYPE_CREATE_POLICY" | "ACTIVITY_TYPE_DISABLE_PRIVATE_KEY" | "ACTIVITY_TYPE_DELETE_USERS" | "ACTIVITY_TYPE_DELETE_API_KEYS" | "ACTIVITY_TYPE_DELETE_INVITATION" | "ACTIVITY_TYPE_DELETE_ORGANIZATION" | "ACTIVITY_TYPE_DELETE_POLICY" | "ACTIVITY_TYPE_CREATE_USER_TAG" | "ACTIVITY_TYPE_DELETE_USER_TAGS" | "ACTIVITY_TYPE_CREATE_ORGANIZATION" | "ACTIVITY_TYPE_SIGN_TRANSACTION" | "ACTIVITY_TYPE_APPROVE_ACTIVITY" | "ACTIVITY_TYPE_REJECT_ACTIVITY" | "ACTIVITY_TYPE_DELETE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_DELETE_PRIVATE_KEY_TAGS" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD" | "ACTIVITY_TYPE_ACTIVATE_BILLING_TIER" | "ACTIVITY_TYPE_DELETE_PAYMENT_METHOD" | "ACTIVITY_TYPE_CREATE_POLICY_V2" | "ACTIVITY_TYPE_CREATE_POLICY_V3" | "ACTIVITY_TYPE_CREATE_API_ONLY_USERS" | "ACTIVITY_TYPE_UPDATE_ROOT_QUORUM" | "ACTIVITY_TYPE_UPDATE_USER_TAG" | "ACTIVITY_TYPE_UPDATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS_V2" | "ACTIVITY_TYPE_CREATE_ORGANIZATION_V2" | "ACTIVITY_TYPE_CREATE_USERS_V2" | "ACTIVITY_TYPE_ACCEPT_INVITATION_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V2" | "ACTIVITY_TYPE_UPDATE_ALLOWED_ORIGINS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS_V2" | "ACTIVITY_TYPE_UPDATE_USER" | "ACTIVITY_TYPE_UPDATE_POLICY" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V3" | "ACTIVITY_TYPE_CREATE_WALLET" | "ACTIVITY_TYPE_CREATE_WALLET_ACCOUNTS" | "ACTIVITY_TYPE_INIT_USER_EMAIL_RECOVERY" | "ACTIVITY_TYPE_RECOVER_USER" | "ACTIVITY_TYPE_SET_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_REMOVE_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD_V2" | "ACTIVITY_TYPE_SIGN_TRANSACTION_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V4" | "ACTIVITY_TYPE_EMAIL_AUTH" | "ACTIVITY_TYPE_INIT_IMPORT_WALLET" | "ACTIVITY_TYPE_IMPORT_WALLET" | "ACTIVITY_TYPE_INIT_IMPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_IMPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_CREATE_POLICIES" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOADS" | "ACTIVITY_TYPE_CREATE_READ_ONLY_SESSION" | "ACTIVITY_TYPE_CREATE_OAUTH_PROVIDERS" | "ACTIVITY_TYPE_DELETE_OAUTH_PROVIDERS" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V5" | "ACTIVITY_TYPE_OAUTH" | "ACTIVITY_TYPE_CREATE_API_KEYS_V2" | "ACTIVITY_TYPE_CREATE_READ_WRITE_SESSION" | "ACTIVITY_TYPE_EMAIL_AUTH_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V6" | "ACTIVITY_TYPE_DELETE_PRIVATE_KEYS" | "ACTIVITY_TYPE_DELETE_WALLETS" | "ACTIVITY_TYPE_CREATE_READ_WRITE_SESSION_V2" | "ACTIVITY_TYPE_DELETE_SUB_ORGANIZATION" | "ACTIVITY_TYPE_INIT_OTP_AUTH" | "ACTIVITY_TYPE_OTP_AUTH" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V7" | "ACTIVITY_TYPE_UPDATE_WALLET" | "ACTIVITY_TYPE_UPDATE_POLICY_V2" | "ACTIVITY_TYPE_CREATE_USERS_V3" | "ACTIVITY_TYPE_INIT_OTP_AUTH_V2" | "ACTIVITY_TYPE_INIT_OTP" | "ACTIVITY_TYPE_VERIFY_OTP" | "ACTIVITY_TYPE_OTP_LOGIN" | "ACTIVITY_TYPE_STAMP_LOGIN" | "ACTIVITY_TYPE_OAUTH_LOGIN" | "ACTIVITY_TYPE_UPDATE_USER_NAME" | "ACTIVITY_TYPE_UPDATE_USER_EMAIL" | "ACTIVITY_TYPE_UPDATE_USER_PHONE_NUMBER" | "ACTIVITY_TYPE_INIT_FIAT_ON_RAMP" | "ACTIVITY_TYPE_CREATE_SMART_CONTRACT_INTERFACE" | "ACTIVITY_TYPE_DELETE_SMART_CONTRACT_INTERFACE" | "ACTIVITY_TYPE_ENABLE_AUTH_PROXY" | "ACTIVITY_TYPE_DISABLE_AUTH_PROXY" | "ACTIVITY_TYPE_UPDATE_AUTH_PROXY_CONFIG";
        intent: {
            createOrganizationIntent?: {
                organizationName: string;
                rootEmail: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                };
                rootUserId?: string | undefined;
            } | undefined;
            createAuthenticatorsIntent?: {
                authenticators: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                }[];
                userId: string;
            } | undefined;
            createUsersIntent?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        userId: string;
                        attestation: {
                            id: string;
                            type: "public-key";
                            rawId: string;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            response: {
                                clientDataJson: string;
                                attestationObject: string;
                                transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            };
                            clientExtensionResults: {
                                appid?: boolean | undefined;
                                appidExclude?: boolean | undefined;
                                credProps?: {
                                    rk: boolean;
                                } | undefined;
                            };
                        };
                        challenge: string;
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            createPrivateKeysIntent?: {
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            signRawPayloadIntent?: {
                privateKeyId: string;
                payload: string;
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            createInvitationsIntent?: {
                invitations: {
                    receiverUserName: string;
                    receiverUserEmail: string;
                    receiverUserTags: string[];
                    accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                    senderUserId: string;
                }[];
            } | undefined;
            acceptInvitationIntent?: {
                invitationId: string;
                userId: string;
                authenticator: {
                    authenticatorName: string;
                    userId: string;
                    attestation: {
                        id: string;
                        type: "public-key";
                        rawId: string;
                        authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        response: {
                            clientDataJson: string;
                            attestationObject: string;
                            transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                        };
                        clientExtensionResults: {
                            appid?: boolean | undefined;
                            appidExclude?: boolean | undefined;
                            credProps?: {
                                rk: boolean;
                            } | undefined;
                        };
                    };
                    challenge: string;
                };
            } | undefined;
            createPolicyIntent?: {
                policyName: string;
                selectors: {
                    subject?: string | undefined;
                    operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                    target?: string | undefined;
                }[];
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                notes?: string | undefined;
            } | undefined;
            disablePrivateKeyIntent?: {
                privateKeyId: string;
            } | undefined;
            deleteUsersIntent?: {
                userIds: string[];
            } | undefined;
            deleteAuthenticatorsIntent?: {
                userId: string;
                authenticatorIds: string[];
            } | undefined;
            deleteInvitationIntent?: {
                invitationId: string;
            } | undefined;
            deleteOrganizationIntent?: {
                organizationId: string;
            } | undefined;
            deletePolicyIntent?: {
                policyId: string;
            } | undefined;
            createUserTagIntent?: {
                userTagName: string;
                userIds: string[];
            } | undefined;
            deleteUserTagsIntent?: {
                userTagIds: string[];
            } | undefined;
            signTransactionIntent?: {
                privateKeyId: string;
                unsignedTransaction: string;
                type: "TRANSACTION_TYPE_ETHEREUM" | "TRANSACTION_TYPE_SOLANA" | "TRANSACTION_TYPE_TRON";
            } | undefined;
            createApiKeysIntent?: {
                apiKeys: {
                    apiKeyName: string;
                    publicKey: string;
                    expirationSeconds?: string | undefined;
                }[];
                userId: string;
            } | undefined;
            deleteApiKeysIntent?: {
                userId: string;
                apiKeyIds: string[];
            } | undefined;
            approveActivityIntent?: {
                fingerprint: string;
            } | undefined;
            rejectActivityIntent?: {
                fingerprint: string;
            } | undefined;
            createPrivateKeyTagIntent?: {
                privateKeyTagName: string;
                privateKeyIds: string[];
            } | undefined;
            deletePrivateKeyTagsIntent?: {
                privateKeyTagIds: string[];
            } | undefined;
            createPolicyIntentV2?: {
                policyName: string;
                selectors: {
                    subject?: string | undefined;
                    operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                    targets?: string[] | undefined;
                }[];
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                notes?: string | undefined;
            } | undefined;
            setPaymentMethodIntent?: {
                number: string;
                cvv: string;
                expiryMonth: string;
                expiryYear: string;
                cardHolderEmail: string;
                cardHolderName: string;
            } | undefined;
            activateBillingTierIntent?: {
                productId: string;
            } | undefined;
            deletePaymentMethodIntent?: {
                paymentMethodId: string;
            } | undefined;
            createPolicyIntentV3?: {
                policyName: string;
                effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                condition?: string | undefined;
                consensus?: string | undefined;
                notes?: string | undefined;
            } | undefined;
            createApiOnlyUsersIntent?: {
                apiOnlyUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    userTags: string[];
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                }[];
            } | undefined;
            updateRootQuorumIntent?: {
                threshold: number;
                userIds: string[];
            } | undefined;
            updateUserTagIntent?: {
                userTagId: string;
                newUserTagName?: string | undefined;
                addUserIds: string[];
                removeUserIds: string[];
            } | undefined;
            updatePrivateKeyTagIntent?: {
                privateKeyTagId: string;
                newPrivateKeyTagName?: string | undefined;
                addPrivateKeyIds: string[];
                removePrivateKeyIds: string[];
            } | undefined;
            createAuthenticatorsIntentV2?: {
                authenticators: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                }[];
                userId: string;
            } | undefined;
            acceptInvitationIntentV2?: {
                invitationId: string;
                userId: string;
                authenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
            } | undefined;
            createOrganizationIntentV2?: {
                organizationName: string;
                rootEmail: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
                rootUserId?: string | undefined;
            } | undefined;
            createUsersIntentV2?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            createSubOrganizationIntent?: {
                name: string;
                rootAuthenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
            } | undefined;
            createSubOrganizationIntentV2?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
            } | undefined;
            updateAllowedOriginsIntent?: {
                allowedOrigins: string[];
            } | undefined;
            createPrivateKeysIntentV2?: {
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            updateUserIntent?: {
                userId: string;
                userName?: string | undefined;
                userEmail?: string | undefined;
                userTagIds?: string[] | undefined;
                userPhoneNumber?: string | undefined;
            } | undefined;
            updatePolicyIntent?: {
                policyId: string;
                policyName?: string | undefined;
                policyEffect?: "EFFECT_ALLOW" | "EFFECT_DENY" | undefined;
                policyCondition?: string | undefined;
                policyConsensus?: string | undefined;
                policyNotes?: string | undefined;
            } | undefined;
            setPaymentMethodIntentV2?: {
                paymentMethodId: string;
                cardHolderEmail: string;
                cardHolderName: string;
            } | undefined;
            createSubOrganizationIntentV3?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
                privateKeys: {
                    privateKeyName: string;
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    privateKeyTags: string[];
                    addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
                }[];
            } | undefined;
            createWalletIntent?: {
                walletName: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
                mnemonicLength?: number | undefined;
            } | undefined;
            createWalletAccountsIntent?: {
                walletId: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
            } | undefined;
            initUserEmailRecoveryIntent?: {
                email: string;
                targetPublicKey: string;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
            } | undefined;
            recoverUserIntent?: {
                authenticator: {
                    authenticatorName: string;
                    challenge: string;
                    attestation: {
                        credentialId: string;
                        clientDataJson: string;
                        attestationObject: string;
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    };
                };
                userId: string;
            } | undefined;
            setOrganizationFeatureIntent?: {
                name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY";
                value: string;
            } | undefined;
            removeOrganizationFeatureIntent?: {
                name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY";
            } | undefined;
            signRawPayloadIntentV2?: {
                signWith: string;
                payload: string;
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            signTransactionIntentV2?: {
                signWith: string;
                unsignedTransaction: string;
                type: "TRANSACTION_TYPE_ETHEREUM" | "TRANSACTION_TYPE_SOLANA" | "TRANSACTION_TYPE_TRON";
            } | undefined;
            exportPrivateKeyIntent?: {
                privateKeyId: string;
                targetPublicKey: string;
            } | undefined;
            exportWalletIntent?: {
                walletId: string;
                targetPublicKey: string;
                language?: "MNEMONIC_LANGUAGE_ENGLISH" | "MNEMONIC_LANGUAGE_SIMPLIFIED_CHINESE" | "MNEMONIC_LANGUAGE_TRADITIONAL_CHINESE" | "MNEMONIC_LANGUAGE_CZECH" | "MNEMONIC_LANGUAGE_FRENCH" | "MNEMONIC_LANGUAGE_ITALIAN" | "MNEMONIC_LANGUAGE_JAPANESE" | "MNEMONIC_LANGUAGE_KOREAN" | "MNEMONIC_LANGUAGE_SPANISH" | undefined;
            } | undefined;
            createSubOrganizationIntentV4?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            emailAuthIntent?: {
                email: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                invalidateExisting?: boolean | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            exportWalletAccountIntent?: {
                address: string;
                targetPublicKey: string;
            } | undefined;
            initImportWalletIntent?: {
                userId: string;
            } | undefined;
            importWalletIntent?: {
                userId: string;
                walletName: string;
                encryptedBundle: string;
                accounts: {
                    curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                    pathFormat: "PATH_FORMAT_BIP32";
                    path: string;
                    addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                }[];
            } | undefined;
            initImportPrivateKeyIntent?: {
                userId: string;
            } | undefined;
            importPrivateKeyIntent?: {
                userId: string;
                privateKeyName: string;
                encryptedBundle: string;
                curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP")[];
            } | undefined;
            createPoliciesIntent?: {
                policies: {
                    policyName: string;
                    effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                    condition?: string | undefined;
                    consensus?: string | undefined;
                    notes?: string | undefined;
                }[];
            } | undefined;
            signRawPayloadsIntent?: {
                signWith: string;
                payloads: string[];
                encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8" | "PAYLOAD_ENCODING_EIP712" | "PAYLOAD_ENCODING_EIP7702_AUTHORIZATION";
                hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
            } | undefined;
            createReadOnlySessionIntent?: {
                [key: string]: unknown;
            } | undefined;
            createOauthProvidersIntent?: {
                userId: string;
                oauthProviders: {
                    providerName: string;
                    oidcToken: string;
                }[];
            } | undefined;
            deleteOauthProvidersIntent?: {
                userId: string;
                providerIds: string[];
            } | undefined;
            createSubOrganizationIntentV5?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            oauthIntent?: {
                oidcToken: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            createApiKeysIntentV2?: {
                apiKeys: {
                    apiKeyName: string;
                    publicKey: string;
                    curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                    expirationSeconds?: string | undefined;
                }[];
                userId: string;
            } | undefined;
            createReadWriteSessionIntent?: {
                targetPublicKey: string;
                email: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
            } | undefined;
            emailAuthIntentV2?: {
                email: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                invalidateExisting?: boolean | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            createSubOrganizationIntentV6?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
            } | undefined;
            deletePrivateKeysIntent?: {
                privateKeyIds: string[];
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            deleteWalletsIntent?: {
                walletIds: string[];
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            createReadWriteSessionIntentV2?: {
                targetPublicKey: string;
                userId?: string | undefined;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            deleteSubOrganizationIntent?: {
                deleteWithoutExport?: boolean | undefined;
            } | undefined;
            initOtpAuthIntent?: {
                otpType: string;
                contact: string;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            otpAuthIntent?: {
                otpId: string;
                otpCode: string;
                targetPublicKey: string;
                apiKeyName?: string | undefined;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            createSubOrganizationIntentV7?: {
                subOrganizationName: string;
                rootUsers: {
                    userName: string;
                    userEmail?: string | undefined;
                    userPhoneNumber?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                }[];
                rootQuorumThreshold: number;
                wallet?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP";
                    }[];
                    mnemonicLength?: number | undefined;
                } | undefined;
                disableEmailRecovery?: boolean | undefined;
                disableEmailAuth?: boolean | undefined;
                disableSmsAuth?: boolean | undefined;
                disableOtpEmailAuth?: boolean | undefined;
                verificationToken?: string | undefined;
            } | undefined;
            updateWalletIntent?: {
                walletId: string;
                walletName?: string | undefined;
            } | undefined;
            updatePolicyIntentV2?: {
                policyId: string;
                policyName?: string | undefined;
                policyEffect?: "EFFECT_ALLOW" | "EFFECT_DENY" | undefined;
                policyCondition?: string | undefined;
                policyConsensus?: string | undefined;
                policyNotes?: string | undefined;
            } | undefined;
            createUsersIntentV3?: {
                users: {
                    userName: string;
                    userEmail?: string | undefined;
                    userPhoneNumber?: string | undefined;
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                        curveType: "API_KEY_CURVE_P256" | "API_KEY_CURVE_SECP256K1" | "API_KEY_CURVE_ED25519";
                        expirationSeconds?: string | undefined;
                    }[];
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    oauthProviders: {
                        providerName: string;
                        oidcToken: string;
                    }[];
                    userTags: string[];
                }[];
            } | undefined;
            initOtpAuthIntentV2?: {
                otpType: string;
                contact: string;
                otpLength?: number | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                alphanumeric?: boolean | undefined;
                sendFromEmailSenderName?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            initOtpIntent?: {
                otpType: string;
                contact: string;
                otpLength?: number | undefined;
                emailCustomization?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomization?: {
                    template?: string | undefined;
                } | undefined;
                userIdentifier?: string | undefined;
                sendFromEmailAddress?: string | undefined;
                alphanumeric?: boolean | undefined;
                sendFromEmailSenderName?: string | undefined;
                expirationSeconds?: string | undefined;
                replyToEmailAddress?: string | undefined;
            } | undefined;
            verifyOtpIntent?: {
                otpId: string;
                otpCode: string;
                expirationSeconds?: string | undefined;
            } | undefined;
            otpLoginIntent?: {
                verificationToken: string;
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            stampLoginIntent?: {
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            oauthLoginIntent?: {
                oidcToken: string;
                publicKey: string;
                expirationSeconds?: string | undefined;
                invalidateExisting?: boolean | undefined;
            } | undefined;
            updateUserNameIntent?: {
                userId: string;
                userName: string;
            } | undefined;
            updateUserEmailIntent?: {
                userId: string;
                userEmail: string;
                verificationToken?: string | undefined;
            } | undefined;
            updateUserPhoneNumberIntent?: {
                userId: string;
                userPhoneNumber: string;
                verificationToken?: string | undefined;
            } | undefined;
            initFiatOnRampIntent?: {
                onrampProvider: "FIAT_ON_RAMP_PROVIDER_COINBASE" | "FIAT_ON_RAMP_PROVIDER_MOONPAY";
                walletAddress: string;
                network: "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BITCOIN" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_ETHEREUM" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_SOLANA" | "FIAT_ON_RAMP_BLOCKCHAIN_NETWORK_BASE";
                cryptoCurrencyCode: "FIAT_ON_RAMP_CRYPTO_CURRENCY_BTC" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_ETH" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_SOL" | "FIAT_ON_RAMP_CRYPTO_CURRENCY_USDC";
                fiatCurrencyCode?: "FIAT_ON_RAMP_CURRENCY_AUD" | "FIAT_ON_RAMP_CURRENCY_BGN" | "FIAT_ON_RAMP_CURRENCY_BRL" | "FIAT_ON_RAMP_CURRENCY_CAD" | "FIAT_ON_RAMP_CURRENCY_CHF" | "FIAT_ON_RAMP_CURRENCY_COP" | "FIAT_ON_RAMP_CURRENCY_CZK" | "FIAT_ON_RAMP_CURRENCY_DKK" | "FIAT_ON_RAMP_CURRENCY_DOP" | "FIAT_ON_RAMP_CURRENCY_EGP" | "FIAT_ON_RAMP_CURRENCY_EUR" | "FIAT_ON_RAMP_CURRENCY_GBP" | "FIAT_ON_RAMP_CURRENCY_HKD" | "FIAT_ON_RAMP_CURRENCY_IDR" | "FIAT_ON_RAMP_CURRENCY_ILS" | "FIAT_ON_RAMP_CURRENCY_JOD" | "FIAT_ON_RAMP_CURRENCY_KES" | "FIAT_ON_RAMP_CURRENCY_KWD" | "FIAT_ON_RAMP_CURRENCY_LKR" | "FIAT_ON_RAMP_CURRENCY_MXN" | "FIAT_ON_RAMP_CURRENCY_NGN" | "FIAT_ON_RAMP_CURRENCY_NOK" | "FIAT_ON_RAMP_CURRENCY_NZD" | "FIAT_ON_RAMP_CURRENCY_OMR" | "FIAT_ON_RAMP_CURRENCY_PEN" | "FIAT_ON_RAMP_CURRENCY_PLN" | "FIAT_ON_RAMP_CURRENCY_RON" | "FIAT_ON_RAMP_CURRENCY_SEK" | "FIAT_ON_RAMP_CURRENCY_THB" | "FIAT_ON_RAMP_CURRENCY_TRY" | "FIAT_ON_RAMP_CURRENCY_TWD" | "FIAT_ON_RAMP_CURRENCY_USD" | "FIAT_ON_RAMP_CURRENCY_VND" | "FIAT_ON_RAMP_CURRENCY_ZAR" | undefined;
                fiatCurrencyAmount?: string | undefined;
                paymentMethod?: "FIAT_ON_RAMP_PAYMENT_METHOD_CREDIT_DEBIT_CARD" | "FIAT_ON_RAMP_PAYMENT_METHOD_APPLE_PAY" | "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_BANK_TRANSFER" | "FIAT_ON_RAMP_PAYMENT_METHOD_GBP_OPEN_BANKING_PAYMENT" | "FIAT_ON_RAMP_PAYMENT_METHOD_GOOGLE_PAY" | "FIAT_ON_RAMP_PAYMENT_METHOD_SEPA_BANK_TRANSFER" | "FIAT_ON_RAMP_PAYMENT_METHOD_PIX_INSTANT_PAYMENT" | "FIAT_ON_RAMP_PAYMENT_METHOD_PAYPAL" | "FIAT_ON_RAMP_PAYMENT_METHOD_VENMO" | "FIAT_ON_RAMP_PAYMENT_METHOD_MOONPAY_BALANCE" | "FIAT_ON_RAMP_PAYMENT_METHOD_CRYPTO_ACCOUNT" | "FIAT_ON_RAMP_PAYMENT_METHOD_FIAT_WALLET" | "FIAT_ON_RAMP_PAYMENT_METHOD_ACH_BANK_ACCOUNT" | undefined;
                countryCode?: string | undefined;
                countrySubdivisionCode?: string | undefined;
                sandboxMode?: boolean | undefined;
            } | undefined;
            createSmartContractInterfaceIntent?: {
                smartContractAddress: string;
                smartContractInterface: string;
                type: "SMART_CONTRACT_INTERFACE_TYPE_ETHEREUM" | "SMART_CONTRACT_INTERFACE_TYPE_SOLANA";
                label: string;
                notes?: string | undefined;
            } | undefined;
            deleteSmartContractInterfaceIntent?: {
                smartContractInterfaceId: string;
            } | undefined;
            enableAuthProxyIntent?: {
                [key: string]: unknown;
            } | undefined;
            disableAuthProxyIntent?: {
                [key: string]: unknown;
            } | undefined;
            updateAuthProxyConfigIntent?: {
                allowedOrigins?: string[] | undefined;
                allowedAuthMethods?: string[] | undefined;
                sendFromEmailAddress?: string | undefined;
                replyToEmailAddress?: string | undefined;
                emailAuthTemplateId?: string | undefined;
                otpTemplateId?: string | undefined;
                emailCustomizationParams?: {
                    appName?: string | undefined;
                    logoUrl?: string | undefined;
                    magicLinkTemplate?: string | undefined;
                    templateVariables?: string | undefined;
                    templateId?: string | undefined;
                } | undefined;
                smsCustomizationParams?: {
                    template?: string | undefined;
                } | undefined;
                walletKitSettings?: {
                    enabledSocialProviders?: string[] | undefined;
                } | undefined;
                otpExpirationSeconds?: number | undefined;
                verificationTokenExpirationSeconds?: number | undefined;
                sessionExpirationSeconds?: number | undefined;
                otpAlphanumeric?: boolean | undefined;
                otpLength?: number | undefined;
            } | undefined;
        };
        result: {
            createOrganizationResult?: {
                organizationId: string;
            } | undefined;
            createAuthenticatorsResult?: {
                authenticatorIds: string[];
            } | undefined;
            createUsersResult?: {
                userIds: string[];
            } | undefined;
            createPrivateKeysResult?: {
                privateKeyIds: string[];
            } | undefined;
            createInvitationsResult?: {
                invitationIds: string[];
            } | undefined;
            acceptInvitationResult?: {
                invitationId: string;
                userId: string;
            } | undefined;
            signRawPayloadResult?: {
                r: string;
                s: string;
                v: string;
            } | undefined;
            createPolicyResult?: {
                policyId: string;
            } | undefined;
            disablePrivateKeyResult?: {
                privateKeyId: string;
            } | undefined;
            deleteUsersResult?: {
                userIds: string[];
            } | undefined;
            deleteAuthenticatorsResult?: {
                authenticatorIds: string[];
            } | undefined;
            deleteInvitationResult?: {
                invitationId: string;
            } | undefined;
            deleteOrganizationResult?: {
                organizationId: string;
            } | undefined;
            deletePolicyResult?: {
                policyId: string;
            } | undefined;
            createUserTagResult?: {
                userTagId: string;
                userIds: string[];
            } | undefined;
            deleteUserTagsResult?: {
                userTagIds: string[];
                userIds: string[];
            } | undefined;
            signTransactionResult?: {
                signedTransaction: string;
            } | undefined;
            deleteApiKeysResult?: {
                apiKeyIds: string[];
            } | undefined;
            createApiKeysResult?: {
                apiKeyIds: string[];
            } | undefined;
            createPrivateKeyTagResult?: {
                privateKeyTagId: string;
                privateKeyIds: string[];
            } | undefined;
            deletePrivateKeyTagsResult?: {
                privateKeyTagIds: string[];
                privateKeyIds: string[];
            } | undefined;
            setPaymentMethodResult?: {
                lastFour: string;
                cardHolderName: string;
                cardHolderEmail: string;
            } | undefined;
            activateBillingTierResult?: {
                productId: string;
            } | undefined;
            deletePaymentMethodResult?: {
                paymentMethodId: string;
            } | undefined;
            createApiOnlyUsersResult?: {
                userIds: string[];
            } | undefined;
            updateRootQuorumResult?: {
                [key: string]: unknown;
            } | undefined;
            updateUserTagResult?: {
                userTagId: string;
            } | undefined;
            updatePrivateKeyTagResult?: {
                privateKeyTagId: string;
            } | undefined;
            createSubOrganizationResult?: {
                subOrganizationId: string;
                rootUserIds?: string[] | undefined;
            } | undefined;
            updateAllowedOriginsResult?: {
                [key: string]: unknown;
            } | undefined;
            createPrivateKeysResultV2?: {
                privateKeys: {
                    privateKeyId?: string | undefined;
                    addresses?: {
                        format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                        address?: string | undefined;
                    }[] | undefined;
                }[];
            } | undefined;
            updateUserResult?: {
                userId: string;
            } | undefined;
            updatePolicyResult?: {
                policyId: string;
            } | undefined;
            createSubOrganizationResultV3?: {
                subOrganizationId: string;
                privateKeys: {
                    privateKeyId?: string | undefined;
                    addresses?: {
                        format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                        address?: string | undefined;
                    }[] | undefined;
                }[];
                rootUserIds?: string[] | undefined;
            } | undefined;
            createWalletResult?: {
                walletId: string;
                addresses: string[];
            } | undefined;
            createWalletAccountsResult?: {
                addresses: string[];
            } | undefined;
            initUserEmailRecoveryResult?: {
                userId: string;
            } | undefined;
            recoverUserResult?: {
                authenticatorId: string[];
            } | undefined;
            setOrganizationFeatureResult?: {
                features: {
                    name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY" | undefined;
                    value?: string | undefined;
                }[];
            } | undefined;
            removeOrganizationFeatureResult?: {
                features: {
                    name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | "FEATURE_NAME_EMAIL_AUTH" | "FEATURE_NAME_EMAIL_RECOVERY" | "FEATURE_NAME_WEBHOOK" | "FEATURE_NAME_SMS_AUTH" | "FEATURE_NAME_OTP_EMAIL_AUTH" | "FEATURE_NAME_AUTH_PROXY" | undefined;
                    value?: string | undefined;
                }[];
            } | undefined;
            exportPrivateKeyResult?: {
                privateKeyId: string;
                exportBundle: string;
            } | undefined;
            exportWalletResult?: {
                walletId: string;
                exportBundle: string;
            } | undefined;
            createSubOrganizationResultV4?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            emailAuthResult?: {
                userId: string;
                apiKeyId: string;
            } | undefined;
            exportWalletAccountResult?: {
                address: string;
                exportBundle: string;
            } | undefined;
            initImportWalletResult?: {
                importBundle: string;
            } | undefined;
            importWalletResult?: {
                walletId: string;
                addresses: string[];
            } | undefined;
            initImportPrivateKeyResult?: {
                importBundle: string;
            } | undefined;
            importPrivateKeyResult?: {
                privateKeyId: string;
                addresses: {
                    format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | "ADDRESS_FORMAT_TRON" | "ADDRESS_FORMAT_SUI" | "ADDRESS_FORMAT_APTOS" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_MAINNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_TESTNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2PKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2SH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2WSH" | "ADDRESS_FORMAT_BITCOIN_SIGNET_P2TR" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2PKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2SH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WPKH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2WSH" | "ADDRESS_FORMAT_BITCOIN_REGTEST_P2TR" | "ADDRESS_FORMAT_SEI" | "ADDRESS_FORMAT_XLM" | "ADDRESS_FORMAT_DOGE_MAINNET" | "ADDRESS_FORMAT_DOGE_TESTNET" | "ADDRESS_FORMAT_TON_V3R2" | "ADDRESS_FORMAT_TON_V4R2" | "ADDRESS_FORMAT_TON_V5R1" | "ADDRESS_FORMAT_XRP" | undefined;
                    address?: string | undefined;
                }[];
            } | undefined;
            createPoliciesResult?: {
                policyIds: string[];
            } | undefined;
            signRawPayloadsResult?: {
                signatures?: {
                    r: string;
                    s: string;
                    v: string;
                }[] | undefined;
            } | undefined;
            createReadOnlySessionResult?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                session: string;
                sessionExpiry: string;
            } | undefined;
            createOauthProvidersResult?: {
                providerIds: string[];
            } | undefined;
            deleteOauthProvidersResult?: {
                providerIds: string[];
            } | undefined;
            createSubOrganizationResultV5?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            oauthResult?: {
                userId: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            createReadWriteSessionResult?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            createSubOrganizationResultV6?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            deletePrivateKeysResult?: {
                privateKeyIds: string[];
            } | undefined;
            deleteWalletsResult?: {
                walletIds: string[];
            } | undefined;
            createReadWriteSessionResultV2?: {
                organizationId: string;
                organizationName: string;
                userId: string;
                username: string;
                apiKeyId: string;
                credentialBundle: string;
            } | undefined;
            deleteSubOrganizationResult?: {
                subOrganizationUuid: string;
            } | undefined;
            initOtpAuthResult?: {
                otpId: string;
            } | undefined;
            otpAuthResult?: {
                userId: string;
                apiKeyId?: string | undefined;
                credentialBundle?: string | undefined;
            } | undefined;
            createSubOrganizationResultV7?: {
                subOrganizationId: string;
                wallet?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                rootUserIds?: string[] | undefined;
            } | undefined;
            updateWalletResult?: {
                walletId: string;
            } | undefined;
            updatePolicyResultV2?: {
                policyId: string;
            } | undefined;
            initOtpAuthResultV2?: {
                otpId: string;
            } | undefined;
            initOtpResult?: {
                otpId: string;
            } | undefined;
            verifyOtpResult?: {
                verificationToken: string;
            } | undefined;
            otpLoginResult?: {
                session: string;
            } | undefined;
            stampLoginResult?: {
                session: string;
            } | undefined;
            oauthLoginResult?: {
                session: string;
            } | undefined;
            updateUserNameResult?: {
                userId: string;
            } | undefined;
            updateUserEmailResult?: {
                userId: string;
            } | undefined;
            updateUserPhoneNumberResult?: {
                userId: string;
            } | undefined;
            initFiatOnRampResult?: {
                onRampUrl: string;
                onRampTransactionId: string;
            } | undefined;
            createSmartContractInterfaceResult?: {
                smartContractInterfaceId: string;
            } | undefined;
            deleteSmartContractInterfaceResult?: {
                smartContractInterfaceId: string;
            } | undefined;
            enableAuthProxyResult?: {
                userId: string;
            } | undefined;
            disableAuthProxyResult?: {
                [key: string]: unknown;
            } | undefined;
            updateAuthProxyConfigResult?: {
                configId?: string | undefined;
            } | undefined;
        };
        votes: {
            id: string;
            userId: string;
            user: {
                userId: string;
                userName: string;
                userEmail?: string | undefined;
                userPhoneNumber?: string | undefined;
                authenticators: {
                    transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                    attestationType: string;
                    aaguid: string;
                    credentialId: string;
                    model: string;
                    credential: {
                        publicKey: string;
                        type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_SECP256K1" | "CREDENTIAL_TYPE_EMAIL_AUTH_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_ED25519" | "CREDENTIAL_TYPE_OTP_AUTH_KEY_P256" | "CREDENTIAL_TYPE_READ_WRITE_SESSION_KEY_P256" | "CREDENTIAL_TYPE_OAUTH_KEY_P256" | "CREDENTIAL_TYPE_LOGIN";
                    };
                    authenticatorId: string;
                    authenticatorName: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                }[];
                apiKeys: {
                    credential: {
                        publicKey: string;
                        type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_SECP256K1" | "CREDENTIAL_TYPE_EMAIL_AUTH_KEY_P256" | "CREDENTIAL_TYPE_API_KEY_ED25519" | "CREDENTIAL_TYPE_OTP_AUTH_KEY_P256" | "CREDENTIAL_TYPE_READ_WRITE_SESSION_KEY_P256" | "CREDENTIAL_TYPE_OAUTH_KEY_P256" | "CREDENTIAL_TYPE_LOGIN";
                    };
                    apiKeyId: string;
                    apiKeyName: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                    expirationSeconds?: string | undefined;
                }[];
                userTags: string[];
                oauthProviders: {
                    providerId: string;
                    providerName: string;
                    issuer: string;
                    audience: string;
                    subject: string;
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                }[];
                createdAt: {
                    seconds: string;
                    nanos: string;
                };
                updatedAt: {
                    seconds: string;
                    nanos: string;
                };
            };
            activityId: string;
            selection: "VOTE_SELECTION_APPROVED" | "VOTE_SELECTION_REJECTED";
            message: string;
            publicKey: string;
            signature: string;
            scheme: string;
            createdAt: {
                seconds: string;
                nanos: string;
            };
        }[];
        fingerprint: string;
        canApprove: boolean;
        canReject: boolean;
        createdAt: {
            seconds: string;
            nanos: string;
        };
        updatedAt: {
            seconds: string;
            nanos: string;
        };
        failure?: {
            code?: number | undefined;
            message?: string | undefined;
            details?: ({
                "@type"?: string | undefined;
            } & {
                [key: string]: unknown;
            })[] | undefined;
        } | undefined;
    }>;
}
