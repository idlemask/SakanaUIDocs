import { size } from "@/utils/prop";
export const buttonProps = {
  type: {
    type: String,
    validator(val: string): boolean {
      return btn_type.includes(val);
    },
    default: "default",
  },
  pain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
    validator(val: string): boolean {
      return size.includes(val);
    },
  },
  shape: {
    type: String,
    default: "round",
    validator(val: string): boolean {
      return ["round", "circle", "rect"].includes(val);
    },
  },
  disableRound: {
    type: String,
    default: "",
    validator(val: string): boolean {
      return ["", "top", "left", "right", "bottom"].includes(val);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    default: null,
  },
  iconPosition: {
    type: String,
    vilidator(val: string): boolean {
      return ["left", "top", "bottom", "right"].includes(val);
    },
    default: "right",
  },
};
export const buttonEmits = {
  click: (evt: MouseEvent): boolean => {
    return evt instanceof MouseEvent;
  },
};

const btn_type: Array<string> = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
  "error",
  "info",
];
