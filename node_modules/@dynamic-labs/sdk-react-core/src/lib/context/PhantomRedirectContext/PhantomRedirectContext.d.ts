import { ReactNode } from 'react';
import { IPhantomRedirectConnectorWithEvents } from '@dynamic-labs/wallet-connector-core';
export type PhantomContextReturnType = {
    phantomRedirectConnector: IPhantomRedirectConnectorWithEvents | undefined;
};
export declare const PhantomRedirectContext: import("react").Context<PhantomContextReturnType | undefined>;
export declare const PhantomRedirectContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const usePhantomRedirectContext: () => PhantomContextReturnType;
