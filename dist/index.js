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
var reactBootstrap = require('react-bootstrap');
var classNames = _interopDefault(require('classnames'));

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

var CLASS_PREFIX = 'react-bootstrap-range-slider';
var idIndex = 0;
var RangeSlider = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      id = _ref.id,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      step = _ref.step,
      tooltip = _ref.tooltip,
      _ref$tooltipPlacement = _ref.tooltipPlacement,
      tooltipPlacement = _ref$tooltipPlacement === void 0 ? 'bottom' : _ref$tooltipPlacement,
      _ref$tooltipDisplay = _ref.tooltipDisplay,
      tooltipDisplay = _ref$tooltipDisplay === void 0 ? 'auto' : _ref$tooltipDisplay,
      tooltipLabel = _ref.tooltipLabel,
      tooltipId = _ref.tooltipId,
      tooltipProps = _ref.tooltipProps,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps;
  var prefix = ThemeProvider.useBootstrapPrefix(bsPrefix, CLASS_PREFIX);
  var classes = classNames(className, prefix, size && "".concat(prefix, "--").concat(size), disabled && 'disabled');
  var inputEl = React.createElement("input", _extends({
    type: "range",
    className: classes,
    id: id,
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

  if (tooltip) {
    var wrapClasses = classNames("".concat(prefix, "__wrap"), size && "".concat(prefix, "__wrap-").concat(size));
    var tooltipClasses = classNames("".concat(prefix, "__tooltip"), tooltipPlacement && "".concat(prefix, "__tooltip--").concat(tooltipPlacement), tooltipDisplay && "".concat(prefix, "__tooltip--").concat(tooltipDisplay));
    var ttId = tooltipId || (id ? "".concat(id, "__tooltip") : "".concat(CLASS_PREFIX, "__tooltip--").concat(++idIndex));
    var fract = value / (max - min);
    var percentLeft = fract * 100;
    var fractFromCentre = (fract - 0.5) * 2;
    var adjustment = fractFromCentre * -8; // Half thumb width

    return React.createElement("span", {
      className: wrapClasses
    }, inputEl, React.createElement("div", {
      className: tooltipClasses,
      style: {
        left: "calc(".concat(percentLeft, "% + ").concat(adjustment, "px)")
      }
    }, React.createElement(reactBootstrap.Tooltip, _extends({
      id: ttId,
      placement: tooltipPlacement,
      className: "show"
    }, tooltipProps), tooltipLabel ? tooltipLabel(value) : value)));
  } else {
    return inputEl;
  }
});
RangeSlider.propTypes = {
  bsPrefix: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  tooltip: PropTypes.bool,
  tooltipPlacement: PropTypes.oneOf(['top', 'bottom']),
  tooltipDisplay: PropTypes.oneOf(['auto', 'on']),
  tooltipLabel: PropTypes.func
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
