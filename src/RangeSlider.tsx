import React, { useCallback, useState, MouseEvent, TouchEvent, ChangeEvent, Ref } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_CLASS_PREFIX = 'range-slider';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  classes: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>, value: number) => void;
  onMouseUpOrTouchEnd?: (ev: MouseEvent|TouchEvent) => void;
  onMouseUp?: (ev: MouseEvent) => void;
  onTouchEnd?: (ev: TouchEvent) => void;
}

const Input = React.forwardRef(({
  classes,
  value,
  min,
  max,
  onChange,
  onMouseUpOrTouchEnd,
  onMouseUp,
  onTouchEnd,
  ...rest
  }: InputProps, ref: Ref<HTMLInputElement>) => (
    <input
      ref={ref}
      type="range"
      value={value}
      min={min}
      max={max}
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
      aria-valuenow={Number(value)}
      aria-valuemin={Number(min)}
      aria-valuemax={Number(max)}
      {...rest}
    />
  )
);

const InputMemo = React.memo(Input);

interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number | string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>, value: number) => void;
  onAfterChange?: (ev: ChangeEvent<HTMLInputElement>, value: number) => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  min?: number;
  max?: number;
  step?: number;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' ;
  inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
  tooltip?:  'auto' | 'on' | 'off';
  tooltipPlacement?: 'top' | 'bottom';
  tooltipLabel?: (value: number) => string;
  tooltipStyle?: React.CSSProperties;
  tooltipProps?: Partial<React.HTMLAttributes<HTMLDivElement>>;
  bsPrefix?: string;
  className?: string;
}

const RangeSlider = React.forwardRef(({
  value,
  onChange = () => {},
  onAfterChange = () => {},
  disabled = false,
  size,
  min = 0,
  max = 100,
  step,
  variant = 'primary',
  inputProps = {}, // deprecated; add additional props directly instead
  tooltip = 'auto',
  tooltipPlacement = 'bottom',
  tooltipLabel,
  tooltipStyle = {},
  tooltipProps = {},
  bsPrefix,
  className,
  ...props
}: RangeSliderProps, ref: Ref<HTMLInputElement>) => {

  const [ prevValue, setPrevValue ] = useState<number|undefined>();

  const prefix = bsPrefix || DEFAULT_CLASS_PREFIX;

  const isTooltip = tooltip === 'auto' || tooltip === 'on';

  const classes = classNames(
    className,
    prefix,
    size && `${prefix}--${size}`,
    disabled && 'disabled',
    variant && `${prefix}--${variant}`,
  );

  const { onMouseUp, onTouchEnd, ...restProps } = { ...inputProps, ...props };

  const onMouseUpOrTouchEnd = useCallback(ev => {

    if (prevValue !== ev.target.value) onAfterChange(ev, ev.target.valueAsNumber);

    setPrevValue(ev.target.value);

  }, [ prevValue, onAfterChange ]);

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
        ...restProps,
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
  const fract = (Number(value) - min) / (max - min);
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

            {tooltipLabel ? tooltipLabel(Number(value)) : value}

          </div>

          <div className={`${prefix}__tooltip__caret`}/>

        </div>
      )}

    </span>
  );

});

RangeSlider.propTypes = {
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
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
  bsPrefix: PropTypes.string,
};

export default React.memo(RangeSlider);
