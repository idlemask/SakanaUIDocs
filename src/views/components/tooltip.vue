<template>
  <div class="doc-container">
    <section>
      <h1>微提示: SaTooltip</h1>
      <p>使用场景：悬浮提示，或与其他组件组合使用，聊天气泡……</p>
    </section>
    <section>
      <h2>1.基础用法</h2>
      <p>
        SaTooltip 通过
        <mark>v-model:visible</mark>
        属性进行双向绑定，触发后默认在点击其他元素时隐藏. 通过调整
        <mark>position</mark> 可以调整 <mark>tooltip</mark> 出现的位置
      </p>

      <div class="demo" style="display: flex; justify-content: space-between">
        <sa-tooltip position="right" v-model:visible="value[3]">
          <sa-button @mouseenter="value[3] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>我的position是right</p>
          </template>
        </sa-tooltip>
        <sa-tooltip position="bottom" v-model:visible="value[0]">
          <sa-button @mouseenter="value[0] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>我的position是bottom</p>
          </template>
        </sa-tooltip>
        <sa-tooltip position="left" v-model:visible="value[2]">
          <sa-button @mouseenter="value[2] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>我的position是left</p>
          </template>
        </sa-tooltip>
        <sa-tooltip position="top" v-model:visible="value[1]">
          <sa-button @mouseenter="value[1] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>我的position是top</p>
          </template>
        </sa-tooltip>
      </div>
      <sa-collapse :visible="collapse[0]">
        <sa-button
          :icon="collapse[0] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[0] = !collapse[0]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[0] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 804px; width: 900px"
            v-html="article[0].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>2.自动隐藏/手动隐藏: auto-close/hold-on</h2>
      <div class="demo">
        <p>
          可以通过 <mark>auto-close</mark> 属性使
          <mark>tooltip</mark> 可以自动隐藏,单位为毫秒
        </p>
        <sa-tooltip position="right" v-model:visible="auto" :auto-close="1000">
          <sa-button @click="auto = true">鼠标点击触发</sa-button>
          <template v-slot:content>
            <p>我1000ms后就会消失</p>
          </template>
        </sa-tooltip>
        <br />
        <p>
          <mark>hold-on</mark> 属性则会使
          <mark>tooltip</mark> 一直显示指导它所绑定的
          <mark>visible</mark> 值变为
          <mark>false</mark>
        </p>
        <sa-tooltip position="right" v-model:visible="hold" hold-on>
          <sa-button @click="hold = true">鼠标点击触发</sa-button>
          <template v-slot:content>
            <p>我不会自己消失呦</p>
          </template>
        </sa-tooltip>
        <br />
        <sa-button @click="hold = false">鼠标点击让它消失</sa-button>
        <br />
        <br />
        <p>
          另外 <mark>auto-close</mark> 与 <mark>hold-on</mark> 联用时,
          <mark>auto-close</mark>
          依然会生效，与单独使用不同的是，它不会因为点击而加速消失
        </p>
        <sa-tooltip
          position="right"
          v-model:visible="holdAndAuto"
          hold-on
          :auto-close="1000"
        >
          <sa-button @click="holdAndAuto = true">鼠标点击触发</sa-button>
          <template v-slot:content>
            <p>我1000ms后就会消失</p>
          </template>
        </sa-tooltip>
      </div>
      <sa-collapse :visible="collapse[1]">
        <sa-button
          :icon="collapse[1] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[1] = !collapse[1]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[1] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 769px; width: 900px"
            v-html="article[1].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>3.微调出现位置</h2>
      <p>
        所有 <mark>tooltip</mark> content
        的定位默认都是居中，但在不同的使用场景，它应该出现的位置也有所不同,
        因此可以通过 <mark>x-offset</mark> 与
        <mark>y-offset</mark> 调整整体的位移， 通过
        <mark>content-x-offset</mark> 与 <mark>content-y-offset</mark> 单独调整
        content 的位置
      </p>
      <div class="demo">
        <sa-tooltip
          position="bottom"
          v-model:visible="offset[0]"
          :x-offset="100"
        >
          <sa-button @mouseenter="offset[0] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>通过 x-offset 改变出现位置</p>
          </template>
        </sa-tooltip>
        <br />
        <sa-tooltip
          position="bottom"
          v-model:visible="offset[1]"
          :content-x-offset="120"
        >
          <sa-button @mouseenter="offset[1] = true">鼠标悬浮触发</sa-button>
          <template v-slot:content>
            <p>通过 content-x-offset 改变出现位置</p>
          </template>
        </sa-tooltip>
      </div>
      <sa-collapse :visible="collapse[2]">
        <sa-button
          :icon="collapse[2] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[2] = !collapse[2]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[2] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 609px; width: 900px"
            v-html="article[2].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.改变大小: width/height</h2>
      <p>
        可以通过 <mark>width</mark> 和 <mark>height</mark> 直接修改 content
        的大小以适应各种需要
      </p>
      <div class="demo">
      <sa-tooltip
        position="right"
        v-model:visible="offset[1]"
        width="200px"
        height="90px"
      >
        <sa-button @mouseenter="offset[1] = true">鼠标悬浮触发</sa-button>
        <template v-slot:content>
          <p>
            通过 width 来改变 content 的宽度，通过 height来改变 content
            的长度，width:150px，height:100px
          </p>
        </template>
      </sa-tooltip>
      </div>
      <sa-collapse :visible="collapse[3]">
        <sa-button
          :icon="collapse[3] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[3] = !collapse[3]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[3] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 556px; width: 900px"
            v-html="article[3].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>5.属性</h2>
      <sa-table v-model="property"></sa-table>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { arrayData, jsonData } from "@/mock/modules/table";
import SaTable from "@/components/table/table.vue";
import SaTooltip from "@/components/tooltip/tooltip.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
import SaButton from "@/components/button/button.vue";
import { marked } from "marked";

@Options({
  components: {
    SaTable,
    SaTooltip,
    SaButton,
    SaCollapse,
  },
  computed: {
    compiledMarkdown(text: string) {
      return marked(text, {
        gfm: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
      });
    },
  },
  data() {
    return {
      collapse: [false, false, false, false],
      value: [false, false, false, false],
      auto: false,
      hold: false,
      holdAndAuto: false,
      offset: [false, false],
      size: false,
      property: [
        ["#id", "属性", "描述", "类型", "可选值", "默认值"],
        ["1", "v-model:visible", "tooltip显示控制", "boolean", "-", "false"],
        [
          "2",
          "position",
          "tooltip显示位置",
          "string",
          "top|right|bottom|left",
          "top",
        ],
        ["3", "x-offset", "tooltip整体x轴偏移", "number", "-", "0"],
        ["4", "y-offset", "tooltip整体y轴偏移", "number", "-", "0"],
        ["6", "content-x-offset", "tooltip整体x轴偏移", "number", "-", "0"],
        ["7", "content-y-offset", "tooltip整体y轴偏移", "number", "-", "0"],
        ["8", "auto-close", "自动关闭时间", "number", "时间,单位ms", "0"],
        ["9", "hold-on", "是否保持显示", "boolean", "-", "false"],
      ],
      method: [
        ["#id", "函数名", "功能描述", "参数"],
        [
          "1",
          "setTHAlignOfCols",
          "设置某列表头文字对齐方式",
          "param1:对齐方式，params:列号（索引从0开始）",
        ],
        [
          "2",
          "setTCAlignOfCols",
          "设置某列数据文字对齐方式",
          "param1:对齐方式，params:列号（索引从0开始）",
        ],
      ],
      article: [
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '   <div style="display: flex; justify-content: space-between">\n' +
            '       <sa-tooltip position="right" v-model:visible="value[3]"> \n' +
            '           <sa-button @mouseenter="value[3] = true">鼠标悬浮触发</sa-button> \n' +
            "           <template v-slot:content> \n" +
            "               <p>我的position是right</p> \n" +
            "           </template> \n" +
            "       </sa-tooltip> \n\n" +
            '       <sa-tooltip position="bottom" v-model:visible="value[0]" > \n' +
            '           <sa-button @mouseenter="value[0] = true">鼠标悬浮触发</sa-button> \n' +
            "           <template v-slot:content> \n" +
            "               <p>我的position是bottom</p> \n" +
            "           </template> \n" +
            "       </sa-tooltip> \n\n" +
            '       <sa-tooltip position="left" v-model:visible="value[2]" > \n' +
            '           <sa-button @mouseenter="value[2] = true">鼠标悬浮触发</sa-button> \n' +
            "           <template v-slot:content> \n" +
            "               <p>我的position是left</p> \n" +
            "           </template> \n" +
            "       </sa-tooltip> \n\n" +
            '       <sa-tooltip position="top" v-model:visible="value[1]" > \n' +
            '           <sa-button @mouseenter="value[1] = true">鼠标悬浮触发</sa-button> \n' +
            "           <template v-slot:content> \n" +
            "               <p>我的position是top</p> \n" +
            "           </template> \n" +
            "       </sa-tooltip> \n" +
            "   </div> \n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaButton,\n" +
            "    SaTooltip\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      value:[false, false, false, false]\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '   <sa-tooltip position="right" v-model:visible="auto" :auto-close="1000">\n' +
            '       <sa-button @click="auto = true">鼠标点击触发</sa-button>\n' +
            "       <template v-slot:content>\n" +
            "           <p>我1000ms后就会消失</p>\n" +
            "       </template>\n" +
            "   </sa-tooltip>\n" +
            "   <br />\n" +
            '   <sa-tooltip position="right" v-model:visible="hold" hold-on>\n' +
            '       <sa-button @click="hold = true">鼠标点击触发</sa-button>\n' +
            "       <template v-slot:content>\n" +
            "           <p>我1000ms后就会消失</p>\n" +
            "       </template>\n" +
            "   </sa-tooltip>\n" +
            "   <br>\n" +
            '   <sa-button @click="hold = false">鼠标点击让它消失</sa-button>\n' +
            "   <sa-tooltip\n" +
            '       position="right"\n' +
            '       v-model:visible="holdAndAuto"\n' +
            "       hold-on\n" +
            '       :auto-close="1000">\n' +
            '       <sa-button @click="holdAndAuto = true">鼠标点击触发</sa-button>\n' +
            "       <template v-slot:content>\n" +
            "           <p>我1000ms后就会消失</p>\n" +
            "       </template>\n" +
            "   </sa-tooltip>\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaTooltip,\n" +
            "    SaButton,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "       hold:false,\n" +
            "       auto:false,\n" +
            "       holdAndAuto:false,\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "   <div>\n" +
            '       <sa-tooltip position="bottom" v-model:visible="offset[0]" :x-offset="100">\n' +
            '           <sa-button @mouseenter="offset[0] = true">鼠标悬浮触发</sa-button>\n' +
            "           <template v-slot:content>\n" +
            "               <p>通过 x-offset 改变出现位置</p>\n" +
            "           </template>\n" +
            "       </sa-tooltip>\n" +
            "       <br />\n" +
            "       <sa-tooltip\n" +
            '           position="bottom"\n' +
            '           v-model:visible="offset[1]"\n' +
            '           :content-x-offset="120">\n' +
            '           <sa-button @mouseenter="offset[1] = true">鼠标悬浮触发</sa-button>\n' +
            "           <template v-slot:content>\n" +
            "               <p>通过 content-x-offset 改变出现位置</p>\n" +
            "           </template>\n" +
            "       </sa-tooltip>\n" +
            "   </div> \n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaButton,\n" +
            "    SaTooltip\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      offset: [false, false]\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "   <div>\n" +
            "       <sa-tooltip\n" +
            '           position="right"\n' +
            '           v-model:visible="offset[1]"\n' +
            '           width="200px"\n' +
            '           height="90px">\n' +
            '           <sa-button @mouseenter="offset[1] = true">鼠标悬浮触发</sa-button>\n' +
            "           <template v-slot:content>\n" +
            "           <p>\n" +
            "               通过 width 来改变 content 的宽度，通过 height来改变 content\n" +
            "               的长度，width:150px，height:100px\n" +
            "           </p>\n" +
            "           </template>\n" +
            "       </sa-tooltip>\n" +
            "   </div> \n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaButton,\n" +
            "    SaTooltip\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      offset: [false, false]\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
      ],
    };
  },
  mounted() {
    for (const i in this.article) {
      this.article[i].content = marked(this.article[i].content);
    }
  },
})
export default class tooltip extends Vue {}
</script>
<style lang="scss">
@use "@/theme/component/doc/index" as *;
</style>
