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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DEFAULT_CLASS_PREFIX = 'range-slider';

var Input = function Input(_ref) {
  var classes = _ref.classes,
      _onChange = _ref.onChange,
      onMouseUpOrTouchEnd = _ref.onMouseUpOrTouchEnd,
      _onTouchEnd = _ref.onTouchEnd,
      _onMouseUp = _ref.onMouseUp,
      rest = _objectWithoutProperties(_ref, ["classes", "onChange", "onMouseUpOrTouchEnd", "onTouchEnd", "onMouseUp"]);

  return /*#__PURE__*/React__default.createElement("input", _extends({
    type: "range",
    onChange: function onChange(ev) {
      return _onChange(ev, ev.target.valueAsNumber);
    },
    onMouseUp: function onMouseUp(ev) {
      onMouseUpOrTouchEnd(ev);
      if (_onMouseUp) _onMouseUp(ev);
    },
    onTouchEnd: function onTouchEnd(ev) {
      onMouseUpOrTouchEnd(ev);
      if (_onTouchEnd) _onTouchEnd(ev);
    },
    className: classes
  }, rest));
};

Input.propTypes = {
  classes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onMouseUpOrTouchEnd: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func,
  onMouseUp: PropTypes.func
};
var InputMemo = /*#__PURE__*/React__default.memo(Input);
var RangeSlider = /*#__PURE__*/React__default.forwardRef(function (_ref2, ref) {
  var size = _ref2.size,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      value = _ref2.value,
      _ref2$onChange = _ref2.onChange,
      onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange,
      _ref2$onAfterChange = _ref2.onAfterChange,
      onAfterChange = _ref2$onAfterChange === void 0 ? function () {} : _ref2$onAfterChange,
      _ref2$min = _ref2.min,
      min = _ref2$min === void 0 ? 0 : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? 100 : _ref2$max,
      step = _ref2.step,
      _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'primary' : _ref2$variant,
      _ref2$inputProps = _ref2.inputProps,
      inputProps = _ref2$inputProps === void 0 ? {} : _ref2$inputProps,
      _ref2$tooltip = _ref2.tooltip,
      tooltip = _ref2$tooltip === void 0 ? 'auto' : _ref2$tooltip,
      _ref2$tooltipPlacemen = _ref2.tooltipPlacement,
      tooltipPlacement = _ref2$tooltipPlacemen === void 0 ? 'bottom' : _ref2$tooltipPlacemen,
      tooltipLabel = _ref2.tooltipLabel,
      _ref2$tooltipStyle = _ref2.tooltipStyle,
      tooltipStyle = _ref2$tooltipStyle === void 0 ? {} : _ref2$tooltipStyle,
      _ref2$tooltipProps = _ref2.tooltipProps,
      tooltipProps = _ref2$tooltipProps === void 0 ? {} : _ref2$tooltipProps,
      bsPrefix = _ref2.bsPrefix,
      className = _ref2.className;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      prevValue = _useState2[0],
      setPrevValue = _useState2[1];

  var prefix = bsPrefix || DEFAULT_CLASS_PREFIX;
  var isTooltip = tooltip === 'auto' || tooltip === 'on';
  var classes = classNames(className, prefix, size && "".concat(prefix, "--").concat(size), disabled && 'disabled', variant && "".concat(prefix, "--").concat(variant));

  var onMouseUp = inputProps.onMouseUp,
      onTouchEnd = inputProps.onTouchEnd,
      restInputProps = _objectWithoutProperties(inputProps, ["onMouseUp", "onTouchEnd"]);

  var onMouseUpOrTouchEnd = React.useCallback(function (ev) {
    if (prevValue !== ev.target.value) onAfterChange(ev, ev.target.valueAsNumber);
    setPrevValue(ev.target.value);
  }, [prevValue, onAfterChange]);
  var inputEl = /*#__PURE__*/React__default.createElement(InputMemo, _objectSpread2({
    disabled: disabled,
    value: value,
    min: min,
    max: max,
    ref: ref,
    step: step,
    classes: classes,
    onMouseUpOrTouchEnd: onMouseUpOrTouchEnd,
    onTouchEnd: onTouchEnd,
    onMouseUp: onMouseUp,
    onChange: onChange
  }, restInputProps));
  var wrapClasses = classNames("".concat(prefix, "__wrap"), size && "".concat(prefix, "__wrap--").concat(size));
  var tooltipClasses = classNames("".concat(prefix, "__tooltip"), isTooltip && "".concat(prefix, "__tooltip--").concat(tooltip), tooltipPlacement && "".concat(prefix, "__tooltip--").concat(tooltipPlacement), disabled && "".concat(prefix, "__tooltip--disabled"));
  var thumbRadius = size === 'sm' ? 8 : size === 'lg' ? 12 : 10;
  var fract = (value - min) / (max - min);
  var percentLeft = fract * 100;
  var fractFromCentre = (fract - 0.5) * 2;
  var adjustment = fractFromCentre * -thumbRadius; // Half thumb width

  return /*#__PURE__*/React__default.createElement("span", {
    className: wrapClasses
  }, inputEl, isTooltip && /*#__PURE__*/React__default.createElement("div", _extends({
    className: tooltipClasses,
    style: _objectSpread2(_objectSpread2({}, tooltipStyle || {}), {}, {
      left: "calc(".concat(percentLeft, "% + ").concat(adjustment, "px)")
    })
  }, tooltipProps), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix, "__tooltip__label")
  }, tooltipLabel ? tooltipLabel(value) : value), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix, "__tooltip__arrow")
  })));
}); // Fix: https://github.com/jaywilz/react-bootstrap-range-slider/issues/3

var Element = typeof Element === 'undefined' ? function () {} : Element;
RangeSlider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  inputProps: PropTypes.object,
  tooltip: PropTypes.oneOf(['auto', 'on', 'off']),
  tooltipPlacement: PropTypes.oneOf(['top', 'bottom']),
  tooltipLabel: PropTypes.func,
  tooltipStyle: PropTypes.object,
  tooltipProps: PropTypes.object,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]),
  bsPrefix: PropTypes.string
};

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

module.exports = RangeSlider;
