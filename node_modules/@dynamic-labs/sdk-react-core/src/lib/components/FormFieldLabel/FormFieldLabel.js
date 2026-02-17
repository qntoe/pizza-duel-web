'use client'
import { __rest } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const FormFieldLabel = (_a) => {
    var { children, htmlFor, className, divider } = _a, props = __rest(_a, ["children", "htmlFor", "className", "divider"]);
    return (jsx("label", Object.assign({ className: classNames('form-field-label', { 'form-field-label__with-divider': divider }, className), htmlFor: htmlFor }, props, { children: children })));
};

export { FormFieldLabel };
