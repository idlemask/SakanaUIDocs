//定义数据
const table1 = [{ id: 1, col1: 1, col: 2 }];

//接口
module.exports = [
  {
    url: "/demo/table/getById",
    type: "get",
    response: (config) => {
      const { id } = config.query;
      for (let i in table1) {
        if (Number(id) === table1[i].id) {
          return {
            status: 200,
            data:  table1[i],
          };
        }
      }
    },
  },
];
