/**
 * This file is used to create the includeComponent function as well as the interfaces each of the
 * fingerprint components must implement.
 *
 */
export interface componentInterface {
    [key: string]: string | string[] | number | boolean | componentInterface;
}
export interface componentFunctionInterface {
    (): Promise<componentInterface>;
}
export declare const components: {
    [name: string]: componentFunctionInterface;
};
export declare const timeoutInstance: componentInterface;
/**
 * includeComponent is the function each component function needs to call in order for the component to be included
 * in the fingerprint.
 * @param {string} name - the name identifier of the component
 * @param {componentFunctionInterface} creationFunction - the function that implements the component
 * @returns
 */
export declare const includeComponent: (name: string, creationFunction: componentFunctionInterface) => void;
/**
 * The function turns the map of component functions to a map of Promises when called
 * @returns {[name: string]: <Promise>componentInterface}
 */
export declare const getComponentPromises: () => {
    [k: string]: Promise<componentInterface>;
};
