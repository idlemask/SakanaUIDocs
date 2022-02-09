import { color_type, isColor, isLengthUnit } from "@/utils/prop";
export const iconProps = {
  type: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    validator(val: string): boolean {
      return (
        color_type.includes(val) || isColor(val) || ["inherit"].includes(val)
      );
    },
    default: "info",
  },
  reactive: {
    type: Boolean,
    default: false,
  },
  pain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    volidator(val: string): boolean {
      return isLengthUnit(val) || ["inherit", "initial"].includes(val);
    },
    default: "inherit",
  },
  filled: {
    type: Boolean,
    default: false,
  },
};
