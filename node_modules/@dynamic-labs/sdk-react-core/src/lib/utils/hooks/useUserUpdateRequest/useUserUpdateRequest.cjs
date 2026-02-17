'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useUpdateUser = require('./useUpdateUser/useUpdateUser.cjs');
var useUpdateUserWithModal = require('./useUpdateUserWithModal/useUpdateUserWithModal.cjs');
var unlinkUserEmail = require('./unlinkUserEmail/unlinkUserEmail.cjs');

// Hook only available internally
const useUserUpdateRequestInternal = ({ validationSchemaStripUnknown, }) => {
    const updateUser = useUpdateUser.useUpdateUser(validationSchemaStripUnknown);
    const updateUserWithModal = useUpdateUserWithModal.useUpdateUserWithModal(updateUser);
    const unlinkUserEmail$1 = unlinkUserEmail.useUnlinkUserEmail();
    return { unlinkUserEmail: unlinkUserEmail$1, updateUser, updateUserWithModal };
};
// Hook exposed to the clients
// We do not want customers to be able to edit properties such as policiesConsent or captchaToken
const useUserUpdateRequest = () => useUserUpdateRequestInternal({ validationSchemaStripUnknown: true });

exports.useUserUpdateRequest = useUserUpdateRequest;
exports.useUserUpdateRequestInternal = useUserUpdateRequestInternal;
