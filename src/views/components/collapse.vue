<template>
  <div class="doc-container">
    <section>
      <h1>折叠面版: SaCollapse</h1>
      <p>
        折叠面板分通过 <mark>visible</mark> 属性来展开/折叠， 通过
        <mark>content</mark> 具名插槽输入折叠内容，通过
        <mark>position</mark> 控制折叠方向
      </p>
      <div class="demo">
        <sa-collapse :visible="collapseDemo[0][0]" position="right">
          <sa-button
            type="primary"
            @click="collapseDemo[0][0] = !collapseDemo[0][0]"
            >点击切换</sa-button
          >
          <template v-slot:content> position-right </template>
        </sa-collapse>
        <sa-collapse :visible="collapseDemo[0][1]" position="left">
          <sa-button
            type="primary"
            @click="collapseDemo[0][1] = !collapseDemo[0][1]"
            >点击切换</sa-button
          >
          <template v-slot:content> position-left </template>
        </sa-collapse>
        <sa-collapse :visible="collapseDemo[0][2]" position="top">
          <sa-button
            type="primary"
            @click="collapseDemo[0][2] = !collapseDemo[0][2]"
            >点击切换</sa-button
          >
          <template v-slot:content> position-top </template>
        </sa-collapse>
        <sa-collapse :visible="collapseDemo[0][3]" position="bottom">
          <sa-button
            type="primary"
            @click="collapseDemo[0][3] = !collapseDemo[0][3]"
            >点击切换</sa-button
          >
          <template v-slot:content> position-bottom </template>
        </sa-collapse>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { marked } from "marked";
import IconPark from "@/components/icon/iconPark.vue";
import SaTable from "@/components/table/table.vue";
import SaButton from "@/components/button/button.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
@Options({
  components: {
    IconPark,
    SaTable,
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
      collapseDemo: [[false, false, false, false]],
      collapse: [false, false, false],
      value: ["", "SakanaCatcher", "", "", "", "", ""],
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
            '  <icon-park type="giftBox"/>\n' +
            '  <icon-park type="gamePs" filled/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    IconPark,\n" +
            "  },\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <icon-park type="giftBox" size="30px"/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    IconPark,\n" +
            "  },\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <icon-park type="giftBox" color="primary" size="50px"/>\n' +
            '  <icon-park type="gamePs" style="color: aqua" size="50px"/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    IconPark,\n" +
            "  },\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <icon-park type="filter" color="primary" reactive size="50px" />\n' +
            '  <icon-park type="filter" color="primary" reactive pain size="50px" />\n' +
            "  <br>" +
            '  <icon-park type="like" color="error" reactive size="50px" filled />\n' +
            '  <icon-park type="like" color="error" reactive pain size="50px" />\n' +
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
.demo .sa-collapse {
  margin: 40px 0;
}
</style>
