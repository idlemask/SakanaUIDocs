import { size, input_type, isLengthUnit } from "@/utils/prop";
import { isString } from "@vue/shared";
export const inputProps = {
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    validator(value: string): boolean {
      return input_type.includes(value);
    },
    default: (): string => "text",
  },
  size: {
    validator(value: string): boolean {
      return size.includes(value);
    },
    default: (): string => "normal",
  },
  placeholder: {
    type: String,
    default: (): string => "",
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  disableRound: {
    type: String,
    default: "",
    validator(val: string): boolean {
      return ["", "top", "left", "right", "bottom"].includes(val);
    },
  },
  label: {
    type: String,
    default: (): string => "",
  },
  validator: {
    type: Function,
    default: (): boolean => {
      return true;
    },
  },
  errorHint: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: (): string => "",
  },
  icon: {
    default: (): null => null,
  },
  iconColor: {
    type: String,
    default: (): string => "info",
  },
  iconSize: {
    type: String,
    validator(val: string): boolean {
      return isLengthUnit(val) || ["inherit", "initial"].includes(val);
    },
    default: "inherit",
  },
  clearUp: {
    type: Boolean,
    default: true,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  max: {
    type: Number,
    default: Number.MAX_VALUE,
  },
  width: {
    validator(value: string): boolean {
      return value != null && value != undefined ? isLengthUnit(value) : true;
    },
    default: (): string => "150px",
  },
};
export const inputEmits = {
  input: (value: string): boolean => isString(value),
  change: (value: string): boolean => isString(value),
  focus: null,
  clear: null,
  keydown: (evt: KeyboardEvent): boolean => evt instanceof KeyboardEvent,
  mouseenter: (evt: MouseEvent): boolean => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent): boolean => evt instanceof MouseEvent,
  ["update:modelValue"]: (value: string): boolean => isString(value),
};
export type InputEmits = typeof inputEmits;
