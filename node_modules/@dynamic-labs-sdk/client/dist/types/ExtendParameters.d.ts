/**
 * This is useful for reusing a callback's type but adding more parameters to it.
 * It will only work for callbacks that take a record as their first and only parameter.
 *
 * @example
 * ```ts
 * type MyCallback = (args: { a: string }) => string[];
 * type MyCallbackWithB = ExtendParameters<MyCallback, { b: number }>;
 *
 * // Generates a callback with the same return type and adds "b" to the parameters
 * const myCallback: MyCallbackWithB = (args) => {
 *   return [args.a, args.b.toString()];
 * };
 * ```
 */
export type ExtendParameters<C extends ((args: any) => unknown) | undefined, T extends Record<string, unknown>> = (args: T & Parameters<NonNullable<C>>[0]) => ReturnType<NonNullable<C>>;
//# sourceMappingURL=ExtendParameters.d.ts.map