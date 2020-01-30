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

import React from 'react';
import PropTypes from 'prop-types';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

const CLASS_PREFIX = 'react-bootstrap-range-slider';

let idIndex = 0;

const RangeSlider = React.forwardRef(({
  bsPrefix,
  size,
  className,
  id,
  disabled = false,
  value,
  onChange,
  min = 0,
  max = 100,
  step,
  tooltip,
  tooltipPlacement = 'bottom',
  tooltipDisplay = 'auto',
  tooltipLabel,
  tooltipId,
  tooltipProps,
  inputProps = {},
}, ref) => {

  const prefix = useBootstrapPrefix(bsPrefix, CLASS_PREFIX);

  const classes = classNames(
    className,
    prefix,
    size && `${prefix}--${size}`,
    disabled && 'disabled',
  );

  const inputEl = (
    <input
      type="range"
      className={classes}
      id={id}
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      disabled={disabled}
      ref={ref}
      style={{
        '--value': value,
      }}
      {...inputProps}
    />
  );

  if (tooltip) {

    const wrapClasses = classNames(
      `${prefix}__wrap`,
      size && `${prefix}__wrap-${size}`,
    );

    const tooltipClasses = classNames(
      `${prefix}__tooltip`,
      tooltipPlacement && `${prefix}__tooltip--${tooltipPlacement}`,
      tooltipDisplay && `${prefix}__tooltip--${tooltipDisplay}`,
    );

    const ttId = tooltipId || (id ? `${id}__tooltip` : `${CLASS_PREFIX}__tooltip--${++idIndex}`);
 
    const fract = value / (max - min);
    const percentLeft = fract * 100;
    const fractFromCentre = (fract - 0.5) * 2;
    const adjustment = fractFromCentre * -8; // Half thumb width

    return (
      <span className={wrapClasses}>

        {inputEl}

        <div
          className={tooltipClasses}
          style={{
            left: `calc(${percentLeft}% + ${adjustment}px)`,
          }}
        >

          <Tooltip
            id={ttId}
            placement={tooltipPlacement}
            className='show'
            {...tooltipProps}
          >

            {tooltipLabel ? tooltipLabel(value) : value}

          </Tooltip>

        </div>

      </span>
    );

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
  tooltipLabel: PropTypes.func,
};

export default RangeSlider;
