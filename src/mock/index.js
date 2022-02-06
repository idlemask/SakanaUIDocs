const Mock = require("mockjs");
const { param2Obj } = require("./utils");
const demo = require("./modules/demo");

const mocks = [...demo];

function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      // noinspection JSPrimitiveTypeWrapperUsage
      this.custom.xhr.withCredentials = this.withCredentials || false;
      if (this.responseType) {
        // noinspection JSPrimitiveTypeWrapperUsage
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }
  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}
module.exports = {
  mocks,
  mockXHR,
};