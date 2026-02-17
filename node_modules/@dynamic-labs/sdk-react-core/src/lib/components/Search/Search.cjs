'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
require('react');
var search = require('../../assets/search.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Search = ({ className = '', id, label, type, onChange, onBlur, name, value, onClickClear, copykey, }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsxs("label", { htmlFor: id, className: classNames.classNames('search__container', value ? 'search__container--active' : undefined), children: [jsxRuntime.jsx("div", { className: 'search-icon__container', children: jsxRuntime.jsx(search.ReactComponent, {}) }), jsxRuntime.jsx("input", { name: name, value: value, onChange: onChange, onBlur: onBlur, type: type, id: id, placeholder: label, className: classNames.classNames('search__input', className), "data-testid": 'Search', copykey: copykey }), value.length > 0 && (jsxRuntime.jsx("button", { type: 'button', onClick: onClickClear, className: 'search__button--clear', "data-testid": 'search-clear-button', copykey: 'dyn_search.clear', children: t('dyn_search.clear') }))] }));
};

exports.Search = Search;
