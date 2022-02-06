// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require("mockjs");
export function arrayData(num: number): Array<Array<unknown>> {
  const array = [];
  array.push(["#id", "姓名", "出生日期", "性别", "城市", "简介"]);
  for (let i = 0; i < num; i++) {
    array.push([
      Mock.mock("@increment"),
      Mock.mock("@cname"),
      Mock.mock('@datetime("yyyy年MM月")'),
      Mock.mock('@pick(["男","女"])'),
      Mock.mock("@city"),
      Mock.mock("@csentence"),
    ]);
  }
  return array;
}
export function jsonData(num: number): Array<unknown> {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push({
      "#id": Mock.mock("@increment"),
      姓名: Mock.mock("@cname"),
      出生日期: Mock.mock('@datetime("yyyy年MM月")'),
      性别: Mock.mock('@pick(["男","女"])'),
      城市: Mock.mock("@city"),
      简介: Mock.mock("@csentence"),
    });
  }
  return array;
}
