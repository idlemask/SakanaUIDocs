<template>
  <div class="doc-container">
    <section>
      <h1>Icon: 微封装的IconPark组件</h1>
      <p>
        本组件库对IconPark进行了轻度的封装，可以通过简单地改变几个属性进行快速的开发
      </p>
      <br />
      <h2>1.基础用法: 显示icon</h2>
      <p>
        从中<a href="https://iconpark.oceanengine.com/official">官方组件库</a
        >寻找需要的icon，将其名称传入type属性即可显示，icon默认尺寸会继承父元素的字体大小，颜色为
        <span class="text-info">info</span>,icon默认为
        <mark>outline</mark> 风格,可以通过filled属性控制是否为
        <mark>filled</mark> 风格
      </p>
      <p>*注：名称形如 game-ps 要转换为逆驼峰命名 gamePs</p>
      <p>案例:</p>
      <div class="demo">
        <icon-park type="gamePs"></icon-park>
        <icon-park type="gamePs" filled></icon-park>
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
            style="height: 218px; width: 900px"
            v-html="article[0].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>2.基础用法: 改变大小</h2>
      <p>
        有些时候为了突出icon，icon的大小与行内字体大小并不相等，这时可以通过size属性单独修改icon大小
      </p>
      <div class="demo"><icon-park type="gamePs" size="30px" /></div>
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
            style="height: 200px; width: 900px"
            v-html="article[1].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>3.基础用法: 改变颜色</h2>
      <p>
        icon的颜色需要与它的功能相匹配，可以通过修改color属性来改变颜色属性,修改icon
        颜色,可选值有
        <span class="text-primary">primary</span>,
        <span class="text-info">info</span>,
        <span class="text-success">success</span>,
        <span class="text-error"> error</span>,
        <span class="text-warning">warning</span>,
        其他颜色可以通过设置style的color来修改
      </p>
      <div class="demo">
        <icon-park type="gamePs" color="primary" size="50px" />
        <br />
        <icon-park type="gamePs" style="color: aqua" size="50px" />
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
            style="height: 219px; width: 900px"
            v-html="article[2].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>3.基础用法: 可交互</h2>
      <p>
        有些时候，icon还需进行交互,如关闭icon，或者嵌套到其他组件（<router-link
          to="/input"
          >input</router-link
        >）中 <span class="text-primary">primary</span>,
        <span class="text-success">success</span>,
        <span class="text-error"> error</span>,
        <span class="text-warning">warning</span>, 默认有4种颜色 * 2 种模式
      </p>
      <p>案例:</p>
      <span class="text-primary">primary</span>,
      <span class="text-primary">primary-pain</span>: <br />
      <icon-park type="filter" color="primary" reactive size="50px" />
      <icon-park type="filter" color="primary" reactive pain size="50px" />
      <br />
      <icon-park type="like" color="error" reactive size="50px" filled />
      <icon-park type="like" color="error" reactive pain size="50px" />
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
            style="height: 254px; width: 900px"
            v-html="article[3].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.属性</h2>
      <sa-table v-model="property" />
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
</style>
