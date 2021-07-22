/**
 * MIT License
 *
 * Copyright (c) 2020 Jason Wilson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var DEFAULT_CLASS_PREFIX = 'range-slider';
var Input = React__default['default'].forwardRef(function (_a, ref) {
    var classes = _a.classes, value = _a.value, min = _a.min, max = _a.max, onChange = _a.onChange, onMouseUpOrTouchEnd = _a.onMouseUpOrTouchEnd, onMouseUp = _a.onMouseUp, onTouchEnd = _a.onTouchEnd, rest = __rest(_a, ["classes", "value", "min", "max", "onChange", "onMouseUpOrTouchEnd", "onMouseUp", "onTouchEnd"]);
    return (React__default['default'].createElement("input", __assign({ ref: ref, type: "range", value: value, min: min, max: max, onChange: function (ev) { return onChange(ev, ev.target.valueAsNumber); }, onMouseUp: function (ev) {
            onMouseUpOrTouchEnd(ev);
            if (onMouseUp)
                onMouseUp(ev);
        }, onTouchEnd: function (ev) {
            onMouseUpOrTouchEnd(ev);
            if (onTouchEnd)
                onTouchEnd(ev);
        }, className: classes, "aria-valuenow": Number(value), "aria-valuemin": Number(min), "aria-valuemax": Number(max) }, rest)));
});
var InputMemo = React__default['default'].memo(Input);
var RangeSlider = React__default['default'].forwardRef(function (_a, ref) {
    var value = _a.value, _b = _a.onChange, onChange = _b === void 0 ? function () { } : _b, _c = _a.onAfterChange, onAfterChange = _c === void 0 ? function () { } : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, size = _a.size, _e = _a.min, min = _e === void 0 ? 0 : _e, _f = _a.max, max = _f === void 0 ? 100 : _f, step = _a.step, _g = _a.variant, variant = _g === void 0 ? 'primary' : _g, _h = _a.inputProps, inputProps = _h === void 0 ? {} : _h, // deprecated; add additional props directly instead
    _j = _a.tooltip, // deprecated; add additional props directly instead
    tooltip = _j === void 0 ? 'auto' : _j, _k = _a.tooltipPlacement, tooltipPlacement = _k === void 0 ? 'bottom' : _k, tooltipLabel = _a.tooltipLabel, _l = _a.tooltipStyle, tooltipStyle = _l === void 0 ? {} : _l, _m = _a.tooltipProps, tooltipProps = _m === void 0 ? {} : _m, bsPrefix = _a.bsPrefix, className = _a.className, props = __rest(_a, ["value", "onChange", "onAfterChange", "disabled", "size", "min", "max", "step", "variant", "inputProps", "tooltip", "tooltipPlacement", "tooltipLabel", "tooltipStyle", "tooltipProps", "bsPrefix", "className"]);
    var _o = React.useState(), prevValue = _o[0], setPrevValue = _o[1];
    var prefix = bsPrefix || DEFAULT_CLASS_PREFIX;
    var isTooltip = tooltip === 'auto' || tooltip === 'on';
    var classes = classNames__default['default'](className, prefix, size && prefix + "--" + size, disabled && 'disabled', variant && prefix + "--" + variant);
    var _p = __assign(__assign({}, inputProps), props), onMouseUp = _p.onMouseUp, onTouchEnd = _p.onTouchEnd, restProps = __rest(_p, ["onMouseUp", "onTouchEnd"]);
    var onMouseUpOrTouchEnd = React.useCallback(function (ev) {
        if (prevValue !== ev.target.value)
            onAfterChange(ev, ev.target.valueAsNumber);
        setPrevValue(ev.target.value);
    }, [prevValue, onAfterChange]);
    var inputEl = (React__default['default'].createElement(InputMemo, __assign({}, __assign({ disabled: disabled, value: value, min: min, max: max, ref: ref, step: step, classes: classes, onMouseUpOrTouchEnd: onMouseUpOrTouchEnd, onTouchEnd: onTouchEnd, onMouseUp: onMouseUp, onChange: onChange }, restProps))));
    var wrapClasses = classNames__default['default'](prefix + "__wrap", size && prefix + "__wrap--" + size);
    var tooltipClasses = classNames__default['default'](prefix + "__tooltip", isTooltip && prefix + "__tooltip--" + tooltip, tooltipPlacement && prefix + "__tooltip--" + tooltipPlacement, disabled && prefix + "__tooltip--disabled");
    var thumbRadius = size === 'sm' ? 8 : (size === 'lg' ? 12 : 10);
    var fract = (Number(value) - min) / (max - min);
    var percentLeft = fract * 100;
    var fractFromCentre = (fract - 0.5) * 2;
    var adjustment = fractFromCentre * -thumbRadius; // Half thumb width
    return (React__default['default'].createElement("span", { className: wrapClasses },
        inputEl,
        isTooltip && (React__default['default'].createElement("div", __assign({ className: tooltipClasses, style: __assign(__assign({}, (tooltipStyle || {})), { left: "calc(" + percentLeft + "% + " + adjustment + "px)" }) }, tooltipProps),
            React__default['default'].createElement("div", { className: prefix + "__tooltip__label" }, tooltipLabel ? tooltipLabel(Number(value)) : value),
            React__default['default'].createElement("div", { className: prefix + "__tooltip__caret" })))));
});
RangeSlider.propTypes = {
    value: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]).isRequired,
    onChange: PropTypes__default['default'].func,
    onAfterChange: PropTypes__default['default'].func,
    min: PropTypes__default['default'].number,
    max: PropTypes__default['default'].number,
    step: PropTypes__default['default'].number,
    disabled: PropTypes__default['default'].bool,
    size: PropTypes__default['default'].oneOf(['sm', 'lg']),
    variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
    inputProps: PropTypes__default['default'].object,
    tooltip: PropTypes__default['default'].oneOf(['auto', 'on', 'off']),
    tooltipPlacement: PropTypes__default['default'].oneOf(['top', 'bottom']),
    tooltipLabel: PropTypes__default['default'].func,
    tooltipStyle: PropTypes__default['default'].object,
    tooltipProps: PropTypes__default['default'].object,
    className: PropTypes__default['default'].string,
    bsPrefix: PropTypes__default['default'].string,
};
var RangeSlider$1 = React__default['default'].memo(RangeSlider);

module.exports = RangeSlider$1;
//# sourceMappingURL=index.js.map
