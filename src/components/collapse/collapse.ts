import { isCssLengthString, isLengthUnit, isPosition } from "@/utils/prop";

export const collapseProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    validator(val: string): boolean {
      return isLengthUnit(val) || isCssLengthString(val);
    },
    default: "fit-content",
  },
  height: {
    type: String,
    validator(val: string): boolean {
      return isLengthUnit(val) || isCssLengthString(val);
    },
    default: "fit-content",
  },
  position: {
    type: String,
    validator(val: string): boolean {
      return isPosition(val);
    },
    default: "bottom",
  },
};
