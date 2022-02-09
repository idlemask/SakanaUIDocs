export const color_type: Array<string> = [
  "primary",
  "success",
  "warning",
  "danger",
  "error",
  "info",
];
export const input_type: Array<string> = [
  "text",
  "password",
  "tel",
  "number",
  "email",
  "color",
];
export const size = ["mini", "small", "normal", "large"];
export function isRgb(color: string): boolean {
  if (/^[rR][gG][bB]/.test(color)) {
    return /^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$/.test(
      color
    );
  }
  return false;
}
export function isRgba(color: string): boolean {
  if (/^[rR][gG][bB][aA]/.test(color)) {
    return /^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$/.test(
      color
    );
  }
  return false;
}
export function isHexColor(color: string): boolean {
  if (/^#/.test(color)) {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);
  }
  return false;
}

export function isHsl(color: string): boolean {
  if (/^[hH][sS][lL]/.test(color)) {
    return /^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$/.test(
      color
    );
  }
  return false;
}
export function isHsla(color: string): boolean {
  if (/^[hH][sS][lL][aA]/.test(color)) {
    return /^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$/.test(
      color
    );
  }
  return false;
}
export function isColor(color: string): boolean {
  return (
    isHexColor(color) ||
    isRgb(color) ||
    isRgba(color) ||
    isHsl(color) ||
    isHsl(color)
  );
}
export function isLengthUnit(len: string): boolean {
  return /pt$|px$|em$|ex$|ch$|rem$|%$|vm$|vh$|vmin$|vmax$/.test(len);
}

export function getActualLength(val: string): number {
  return val.replace(/[\u0391-\uFFE5]/g, "aa").length;
}

export function isCssLengthString(val: string): boolean {
  return [
    "initial",
    "fit-content",
    "max-content",
    "min-content",
    "inherit",
    "auto",
  ].includes(val);
}
export function isPosition(val: string): boolean {
  return ["left", "top", "bottom", "right"].includes(val);
}
