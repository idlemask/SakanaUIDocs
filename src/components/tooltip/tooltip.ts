import { isLengthUnit } from "@/utils/prop";

export const tooltipProps = {
  width: {
    type: String,
    vialidator(val: string): boolean {
      return (
        isLengthUnit(val) || ["initial", "inherit", "fit-content"].includes(val)
      );
    },
    default: "fit-content",
  },
  height: {
    type: String,
    vialidator(val: string): boolean {
      return (
        isLengthUnit(val) || ["initial", "inherit", "fit-content"].includes(val)
      );
    },
    default: "fit-content",
  },
  visible: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String,
    vilidator(val: string): boolean {
      return ["left", "top", "bottom", "right"].includes(val);
    },
    default: "bottom",
  },
  xOffset: {
    type: Number,
    default: 0,
  },
  yOffset: {
    type: Number,
    default: 0,
  },
  contentXOffset: {
    type: Number,
    default: 0,
  },
  contentYOffset: {
    type: Number,
    default: 0,
  },
  autoClose: {
    type: Number,
    default: 0,
  },
  holdOn: {
    type: Boolean,
    default: false,
  },
};
export const tooltipEmits = {
  ["update:visible"]: (value: boolean): boolean => true,
  show: (): boolean => {
    return true;
  },
  close: (): boolean => {
    return true;
  },
};
