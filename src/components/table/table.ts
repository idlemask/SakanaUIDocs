import { getActualLength, isLengthUnit } from "@/utils/prop";
export const tableProps = {
  modelValue: {
    validator(val: Array<unknown>): boolean {
      return (
        (val.length > 0 && val[0] instanceof Array) || val[0] instanceof Object
      );
    },
    require: true,
  },
  tWidth: {
    type: String,
    validator(val: string): boolean {
      return isLengthUnit(val);
    },
    default: "100%",
  },
  fromJSON: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    validator(val: string): boolean {
      return ["fit-content", "limit"].includes(val);
    },
    default: "fit-content",
  },
  disableScroll: {
    type: Boolean,
    default: false,
  },
};

export class tableConfig {
  cols_ll: number[];
  thAlign: string[];
  tcAlign: string[];
  size: number;
  defaulfWidth: number[];
  widthProportion: number[];
  data: Array<Array<number | string | boolean>>;
  constructor(data: unknown, fromJSON = false) {
    this.data = fromJSON ? this.parseJSON(data) : this.parseUnknow(data);
    this.cols_ll = this.getLongestDataLength(this.data);
    this.defaulfWidth = this.setDefaultWidth();
    this.size = this.cols_ll.length;
    const thalign = [];
    const tcalign = [];
    for (let i = 0; i < this.size; i++) {
      thalign.push("center");
      tcalign.push("center");
    }
    this.tcAlign = tcalign;
    this.thAlign = thalign;
    this.widthProportion = this.initProportion();
  }
  parseUnknow(data: unknown): Array<Array<number | string | boolean>> {
    const array = [];
    if (data instanceof Array) {
      for (const i in data) {
        const row = [];
        if (data[i] instanceof Object) {
          for (const j in data[i]) {
            if (
              typeof data[i][j] == "number" ||
              typeof data[i][j] == "string" ||
              typeof data[i][j] == "boolean"
            )
              row.push(data[i][j]);
          }
          array.push(row);
        }
      }
    }
    return array;
  }
  parseJSON(data: unknown): Array<Array<number | string | boolean>> {
    const array = [];
    if (data instanceof Array) {
      if (data[0] instanceof Object) {
        const th = [];
        for (const i in data[0]) {
          th.push(i);
        }
        array.push(th);
      }
      for (const i in data) {
        const row = [];
        if (data[i] instanceof Object) {
          for (const j in data[i]) {
            if (
              typeof data[i][j] == "number" ||
              typeof data[i][j] == "string" ||
              typeof data[i][j] == "boolean"
            )
              row.push(data[i][j]);
          }
          array.push(row);
        }
      }
    }
    return array;
  }
  getLongestDataLength(tableData: unknown): number[] {
    const cols_ll: number[] = [];
    if (tableData instanceof Array) {
      for (let i = 0; i < tableData.length; i++) {
        if (tableData[i] instanceof Array) {
          for (let j = 0; j < tableData[i].length; j++) {
            if (cols_ll.length < tableData[i].length) cols_ll.push(0);
            cols_ll[j] =
              cols_ll[j] < getActualLength(String(tableData[i][j]))
                ? getActualLength(String(tableData[i][j]))
                : cols_ll[j];
          }
        }
      }
    }

    return cols_ll;
  }
  getMinIndex(): number {
    let min = 0;
    for (const i in this.cols_ll) {
      min = this.cols_ll[i] > this.cols_ll[min] ? Number(i) : min;
    }
    return min;
  }

  setDefaultWidth(): number[] {
    const defaultWidth: number[] = [];
    const min = this.getMinIndex();
    const minlength = this.cols_ll[min] * 14;
    for (const i in this.cols_ll) {
      defaultWidth.push((this.cols_ll[i] / this.cols_ll[min]) * minlength);
    }
    return defaultWidth;
  }
  initProportion(): number[] {
    const array = [];
    let sum = 0;
    for (const i in this.cols_ll) {
      sum += this.cols_ll[i];
    }

    for (const i in this.cols_ll) {
      array.push((this.cols_ll[i] / sum) * 100);
    }
    return array;
  }
}
