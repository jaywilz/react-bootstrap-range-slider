/// <reference types="react" />
import React from "react";
import { ChangeEvent, ReactElement } from "react";
interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    value: number | string;
    onChange?: (ev: ChangeEvent<HTMLInputElement>, value: number) => void;
    onAfterChange?: (ev: ChangeEvent<HTMLInputElement>, value: number) => void;
    disabled?: boolean;
    size?: "sm" | "lg";
    min?: number;
    max?: number;
    step?: number;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light";
    inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
    tooltip?: "auto" | "on" | "off";
    tooltipPlacement?: "top" | "bottom";
    tooltipLabel?: (value: number) => string | ReactElement;
    tooltipStyle?: React.CSSProperties;
    tooltipProps?: Partial<React.HTMLAttributes<HTMLDivElement>>;
    bsPrefix?: string;
    className?: string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<RangeSliderProps & React.RefAttributes<HTMLInputElement>>>;
declare const RangeSlider: typeof _default;
export { RangeSlider as default };
