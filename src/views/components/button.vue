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
      <p>type：</p>
      <div class="row-container">
        <sa-button type="default">default</sa-button>
        <sa-button type="primary">primary</sa-button>
        <sa-button type="success">success</sa-button>
        <sa-button type="warning">warning</sa-button>
        <sa-button type="danger">danger</sa-button>
        <sa-button type="error">error</sa-button>
      </div>
      <p>pain:</p>
      <div class="row-container">
        <sa-button type="default" pain>default</sa-button>
        <sa-button type="primary" pain>primary</sa-button>
        <sa-button type="success" pain>success</sa-button>
        <sa-button type="warning" pain>warning</sa-button>
        <sa-button type="danger" pain>danger</sa-button>
        <sa-button type="error" pain>error</sa-button>
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
      <div class="code" v-html="article[0].content"></div>
    </section>
    <section>
      <h2>2.基础用法: 添加icon</h2>
      <p>
        SaButton 支持通过icon属性来选择添加icon,通过iconPosition来选择icon的位置
      </p>
      <div class="row-container">
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
      <div class="code" v-html="article[1].content"></div>
    </section>
    <section>
      <h2>3.组合用法: 去除圆角 disableRound</h2>
      <p>
        SaButton 支持通过icon属性来选择添加icon,通过iconPosition来选择icon的位置
      </p>
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
      <div class="code" v-html="article[2].content"></div>
    </section>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { marked } from "marked";
import SaButton from "@/components/button/button.vue";
import SaInput from "@/components/input/input.vue";
import SaTable from "@/components/table/table.vue";
@Options({
  components: {
    SaButton,
    SaInput,
    SaTable,
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
      property: [
        ["#id", "属性", "描述", "类型", "可选值", "默认值"],
        [1, "type", "icon标识", "string", "去iconPark官网看", "-"],
        [2, "size", "控icon大小", "string", "css长度单位", "inherit"],
        [3, "reactive", "是否可交互元素", "boolean", "-", "false"],
        [4, "filled", "是否为实心icon", "boolean", "-", "false"],
        [5, "pain", "交互模式选项", "boolean", "-", "false"],
        [
          6,
          "color",
          "icon颜色",
          "string",
          "primary,info,warning,error,success",
          "info",
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
