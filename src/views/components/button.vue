<template>
  <div class="doc-container">
    <section>
      <h1>SaButton: 按钮</h1>
      <p>按钮</p>
      <br />
      <h2>1.基础用法: type pain shape size</h2>
      <p>
        通过 type 改变按钮的主题色，通过 pain 属性改变样式，通过size改变大小
      </p>
      <p>案例:</p>
      <div class="demo">
        <p>type：</p>
        <div class="row-container">
          <sa-button type="default">default</sa-button>
          <sa-button type="primary">primary</sa-button>
          <sa-button type="success">success</sa-button>
          <sa-button type="warning">warning</sa-button>
          <sa-button type="danger">danger</sa-button>
          <sa-button type="error">error</sa-button>
          <sa-button type="info">info</sa-button>
        </div>
        <p>pain:</p>
        <div class="row-container">
          <sa-button type="default" pain>default</sa-button>
          <sa-button type="primary" pain>primary</sa-button>
          <sa-button type="success" pain>success</sa-button>
          <sa-button type="warning" pain>warning</sa-button>
          <sa-button type="danger" pain>danger</sa-button>
          <sa-button type="error" pain>error</sa-button>
          <sa-button type="info" pain>info</sa-button>
        </div>
        <p>shape:</p>
        <div class="row-container">
          <sa-button shape="rect" type="default" pain>rect</sa-button>
          <sa-button shape="round" type="primary" pain>round</sa-button>
          <sa-button shape="circle" type="success" pain>circle</sa-button>
        </div>
        <p>size:</p>
        <div class="row-container">
          <sa-button size="mini" pain>mini</sa-button>
          <sa-button size="small" pain>small</sa-button>
          <sa-button size="normal" pain>normal</sa-button>
          <sa-button size="large" pain>large</sa-button>
        </div>
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
            style="height: 796px; width: 900px"
            v-html="article[0].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>2.基础用法: 添加icon</h2>
      <p>
        SaButton 支持通过icon属性来选择添加icon,通过iconPosition来选择icon的位置
      </p>
      <div class="row-container demo">
        <sa-button type="primary" icon="gamePs" icon-position="right">
          PlayStation-right
        </sa-button>
        <sa-button type="primary" icon="gamePs" icon-position="bottom">
          PlayStation-bottom
        </sa-button>
        <sa-button type="primary" icon="gamePs" icon-position="left">
          PlayStation-left
        </sa-button>
        <sa-button type="primary" icon="gamePs" icon-position="top">
          PlayStation-top
        </sa-button>
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
            style="height: 289px; width: 900px"
            v-html="article[1].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>3.组合用法: 去除圆角 disableRound</h2>
      <p>SaButton 支持通过 <mark>disable-round</mark> 去除某一方向的圆角</p>
      <div class="demo">
        <div style="display: flex; flex-direction: row">
          <sa-button type="primary" disable-round="right">
            disableRound-right
          </sa-button>
          <sa-input
            disable-round="left"
            placeholder="disable-round-left"
            v-model="value[0]"
          ></sa-input>
        </div>
        <br />
        <sa-input
          disable-round="bottom"
          placeholder="disableRound-bottom"
          v-model="value[1]"
        ></sa-input>
        <sa-button type="primary" disable-round="top" style="width: 176px">
          disableRound-top
        </sa-button>
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
            style="height: 480px; width: 900px"
            v-html="article[2].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.属性</h2>
      <sa-table v-model="property"></sa-table>
    </section>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { marked } from "marked";
import SaButton from "@/components/button/button.vue";
import SaInput from "@/components/input/input.vue";
import SaTable from "@/components/table/table.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
@Options({
  components: {
    SaButton,
    SaInput,
    SaTable,
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
      value: ["", "", "", "", "", "", ""],
      collapse: [false, false, false],
      property: [
        ["#id", "属性", "描述", "类型", "可选值", "默认值"],
        [
          1,
          "type",
          "button主题颜色设定",
          "string",
          "primary,info……",
          "default",
        ],
        [2, "pain", "按钮风格", "boolean", "-", "false"],
        [3, "shape", "形状", "string", "rect ｜ round ｜ circle", "round"],
        [4, "size", "大小控制", "string", "mini|small|normal|large", "mini"],
        [5, "icon", "添加icon", "string", "见icon页", "null"],
        [
          6,
          "icon-position",
          "icon位置调整",
          "string",
          "top ｜ bottom |left |right",
          "right",
        ],
        [
          7,
          "disable-round",
          "去除某一方向圆角",
          "string",
          "top|right|bottom|left",
          "null",
        ],
      ],
      article: [
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "<p>type：</p>\n" +
            "<div>\n" +
            '  <sa-button type="default">default</sa-button>\n' +
            '  <sa-button type="primary">primary</sa-button>\n' +
            '  <sa-button type="success">success</sa-button>\n' +
            '  <sa-button type="warning">warning</sa-button>\n' +
            '  <sa-button type="danger">danger</sa-button>\n' +
            '  <sa-button type="error">error</sa-button>\n' +
            "</div>\n" +
            "<p>pain:</p>\n" +
            "<div>\n" +
            '  <sa-button type="default" pain>default</sa-button>\n' +
            '  <sa-button type="primary" pain>primary</sa-button>\n' +
            '  <sa-button type="success" pain>success</sa-button>\n' +
            '  <sa-button type="warning" pain>warning</sa-button>\n' +
            '  <sa-button type="danger" pain>danger</sa-button>\n' +
            '  <sa-button type="error" pain>error</sa-button>\n' +
            "</div>\n" +
            "<p>shape:</p>\n" +
            "<div>\n" +
            '  <sa-button shape="rect" type="default" pain>rect</sa-button>\n' +
            '  <sa-button shape="round" type="primary" pain>round</sa-button>\n' +
            '  <sa-button shape="circle" type="success" pain>circle</sa-button>\n' +
            "</div>\n" +
            "<p>size:</p>\n" +
            "<div>\n" +
            '  <sa-button size="mini" pain>mini</sa-button>\n' +
            '  <sa-button size="small" pain>small</sa-button>\n' +
            '  <sa-button size="normal" pain>normal</sa-button>\n' +
            '  <sa-button size="large" pain>large</sa-button>\n' +
            "</div>\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    IconPark,\n" +
            "  },\n" +
            "})\n" +
            "<style>\n" +
            "button { margin:10px}\n" +
            "</style>\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            ' <div class="row-container">\n' +
            '   <sa-button type="primary" icon="gamePs" icon-position="right">PlayStation-right</sa-button>\n' +
            '   <sa-button type="primary" icon="gamePs" icon-position="bottom">PlayStation-bottom</sa-button>\n' +
            '   <sa-button type="primary" icon="gamePs" icon-position="left">PlayStation-left</sa-button>\n' +
            '   <sa-button type="primary" icon="gamePs" icon-position="top">PlayStation-top</sa-button>\n' +
            " </div>\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaButton,\n" +
            "  },\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            ' <div style="display: flex; flex-direction: row"\n' +
            '   <sa-button type="primary" disable-round="right"></sa-button>\n' +
            "     disableRound-right\n" +
            "   </sa-button>\n" +
            "   <sa-input\n" +
            '     disable-round="left"\n' +
            '     placeholder="disable-round-left"\n' +
            '     v-model="value[0]"\n' +
            "     ></sa-input>\n" +
            "   </div>\n" +
            "   <br />\n" +
            "   <sa-input\n" +
            '     isable-round="bottom"\n' +
            '     placeholder="disableRound-bottom"\n' +
            '     v-model="value[1]"\n' +
            "     ></sa-input>\n" +
            '   <sa-button type="primary" disable-round="top" style="width: 176px">\n' +
            "     disableRound-top\n" +
            "   </sa-button>\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    IconPark,\n" +
            "  },\n" +
            "})\n" +
            "```\n",
        },
      ],
    };
  },
  mounted(): void {
    for (let i in this.article) {
      this.article[i].content = marked(this.article[i].content);
    }
  },
})
export default class inputDemo extends Vue {}
</script>
<style lang="scss">
@use "@/theme/component/doc/index.scss" as *;
.row-container button {
  margin: 10px;
}
</style>
