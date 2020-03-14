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

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var ThemeProvider = require('react-bootstrap/ThemeProvider');
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

var DEFAULT_CLASS_PREFIX = 'range-slider';
var RangeSlider = React.forwardRef(function (_ref, ref) {
  var size = _ref.size,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      step = _ref.step,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? 'auto' : _ref$tooltip,
      _ref$tooltipPlacement = _ref.tooltipPlacement,
      tooltipPlacement = _ref$tooltipPlacement === void 0 ? 'bottom' : _ref$tooltipPlacement,
      tooltipLabel = _ref.tooltipLabel,
      _ref$tooltipStyle = _ref.tooltipStyle,
      tooltipStyle = _ref$tooltipStyle === void 0 ? {} : _ref$tooltipStyle,
      _ref$tooltipProps = _ref.tooltipProps,
      tooltipProps = _ref$tooltipProps === void 0 ? {} : _ref$tooltipProps,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className;
  var prefix = ThemeProvider.useBootstrapPrefix(bsPrefix, DEFAULT_CLASS_PREFIX);
  var isTooltip = tooltip === 'auto' || tooltip === 'on';
  var classes = classNames(className, prefix, size && "".concat(prefix, "--").concat(size), disabled && 'disabled', variant && "".concat(prefix, "--").concat(variant));
  var inputEl = React.createElement("input", _extends({
    type: "range",
    className: classes,
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: onChange,
    disabled: disabled,
    ref: ref,
    style: {
      '--value': value
    }
  }, inputProps));

  if (isTooltip) {
    var wrapClasses = classNames("".concat(prefix, "__wrap"), size && "".concat(prefix, "__wrap--").concat(size));
    var tooltipClasses = classNames("".concat(prefix, "__tooltip"), isTooltip && "".concat(prefix, "__tooltip--").concat(tooltip), tooltipPlacement && "".concat(prefix, "__tooltip--").concat(tooltipPlacement), disabled && "".concat(prefix, "__tooltip--disabled"));
    var thumbRadius = size === 'sm' ? 8 : size === 'lg' ? 12 : 10;
    var fract = (value - min) / (max - min);
    var percentLeft = fract * 100;
    var fractFromCentre = (fract - 0.5) * 2;
    var adjustment = fractFromCentre * -thumbRadius; // Half thumb width

    return React.createElement("span", {
      className: wrapClasses
    }, inputEl, React.createElement("div", _extends({
      className: tooltipClasses,
      style: _objectSpread2({}, tooltipStyle || {}, {
        left: "calc(".concat(percentLeft, "% + ").concat(adjustment, "px)")
      })
    }, tooltipProps), React.createElement("div", {
      className: "".concat(prefix, "__tooltip__label")
    }, tooltipLabel ? tooltipLabel(value) : value), React.createElement("div", {
      className: "".concat(prefix, "__tooltip__arrow")
    })));
  } else {
    return inputEl;
  }
});
RangeSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
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
