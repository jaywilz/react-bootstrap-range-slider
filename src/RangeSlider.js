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

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_CLASS_PREFIX = 'range-slider';

const noop = () => {};

const Input = ({
  classes,
  onChange,
  onMouseUpOrTouchEnd,
  onTouchEnd,
  onMouseUp,
  ...rest
  }) => (
    <input
      type="range"
      onChange={(ev) => onChange(ev, ev.target.valueAsNumber)}
      onMouseUp={(ev) => {
        onMouseUpOrTouchEnd(ev);
        if (onMouseUp) onMouseUp(ev);
      }}
      onTouchEnd={(ev) => {
        onMouseUpOrTouchEnd(ev);
        if (onTouchEnd) onTouchEnd(ev);
      }}
      className={classes}
      {...rest}
    />
  );

Input.propTypes = {
  classes: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onMouseUpOrTouchEnd: PropTypes.func.isRequired,
  onTouchEnd: PropTypes.func,
  onMouseUp: PropTypes.func
};

const InputMemo = React.memo(Input);

const RangeSlider = React.forwardRef(({
  size,
  disabled = false,
  value,
  onChange = () => {},
  onAfterChange = () => {},
  min = 0,
  max = 100,
  step,
  variant = 'primary',
  inputProps = {},
  tooltip = 'auto',
  tooltipPlacement = 'bottom',
  tooltipLabel,
  tooltipStyle = {},
  tooltipProps = {},
  bsPrefix,
  className,
}, ref) => {

  const [, setPrevValue ] = useState();

  const prefix = bsPrefix || DEFAULT_CLASS_PREFIX;

  const isTooltip = tooltip === 'auto' || tooltip === 'on';

  const classes = classNames(
    className,
    prefix,
    size && `${prefix}--${size}`,
    disabled && 'disabled',
    variant && `${prefix}--${variant}`,
  );

  const { onMouseUp, onTouchEnd, ...restInputProps } = inputProps;

  const onMouseUpOrTouchEnd = useCallback(ev => {
    setPrevValue(prevValue => {
      if (prevValue !== ev.target.value) onAfterChange(ev, ev.target.valueAsNumber);

      return ev.target.value;
    });
  }, [ setPrevValue, onAfterChange ]);

  const inputEl = (
    <InputMemo
      {...{
        disabled,
        value,
        min,
        max,
        ref,
        step,
        classes,
        onMouseUpOrTouchEnd,
        onTouchEnd,
        onMouseUp,
        onChange,
        ...restInputProps,
      }}
    />
  );

  const wrapClasses = classNames(
    `${prefix}__wrap`,
    size && `${prefix}__wrap--${size}`,
  );

  const tooltipClasses = classNames(
    `${prefix}__tooltip`,
    isTooltip && `${prefix}__tooltip--${tooltip}`,
    tooltipPlacement && `${prefix}__tooltip--${tooltipPlacement}`,
    disabled && `${prefix}__tooltip--disabled`,
  );

  const thumbRadius = size === 'sm' ? 8 : (size === 'lg' ? 12 : 10);
  const fract = (value - min) / (max - min);
  const percentLeft = fract * 100;
  const fractFromCentre = (fract - 0.5) * 2;
  const adjustment = fractFromCentre * -thumbRadius; // Half thumb width

  return (
    <span
      className={wrapClasses}
    >

      {inputEl}

      {isTooltip && (
        <div
          className={tooltipClasses}
          style={{
            ...(tooltipStyle || {}),
            left: `calc(${percentLeft}% + ${adjustment}px)`,
          }}
          {...tooltipProps}
        >

          <div className={`${prefix}__tooltip__label`}>

            {tooltipLabel ? tooltipLabel(value) : value}

          </div>

          <div className={`${prefix}__tooltip__arrow`}/>

        </div>
      )}

    </span>
  );

});

// Fix: https://github.com/jaywilz/react-bootstrap-range-slider/issues/3
const Element = typeof Element === 'undefined' ? function() {} : Element;

RangeSlider.propTypes = {
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf([ 'sm', 'lg' ]),
  variant: PropTypes.oneOf([ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light' ]),
  inputProps: PropTypes.object,
  tooltip: PropTypes.oneOf([ 'auto', 'on', 'off' ]),
  tooltipPlacement: PropTypes.oneOf([ 'top', 'bottom' ]),
  tooltipLabel: PropTypes.func,
  tooltipStyle: PropTypes.object,
  tooltipProps: PropTypes.object,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  bsPrefix: PropTypes.string,
};

export default RangeSlider;
