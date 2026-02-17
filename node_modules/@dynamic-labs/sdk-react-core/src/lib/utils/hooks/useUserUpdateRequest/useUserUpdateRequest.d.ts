export declare const useUserUpdateRequestInternal: ({ validationSchemaStripUnknown, }: {
    validationSchemaStripUnknown: boolean;
}) => {
    unlinkUserEmail: import("./unlinkUserEmail/unlinkUserEmail").UnlinkUserEmail;
    updateUser: import("./useUpdateUser").UpdateUser;
    updateUserWithModal: (fields: import("./useUpdateUserWithModal").UpdateUserWithModalFields, options?: import("./useUpdateUserWithModal").UpdateUserWithModalOptions | undefined) => Promise<import("@dynamic-labs/sdk-api-core").UserFields>;
};
export declare const useUserUpdateRequest: () => {
    unlinkUserEmail: import("./unlinkUserEmail/unlinkUserEmail").UnlinkUserEmail;
    updateUser: import("./useUpdateUser").UpdateUser;
    updateUserWithModal: (fields: import("./useUpdateUserWithModal").UpdateUserWithModalFields, options?: import("./useUpdateUserWithModal").UpdateUserWithModalOptions | undefined) => Promise<import("@dynamic-labs/sdk-api-core").UserFields>;
};
