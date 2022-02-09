<template>
  <div class="doc-container">
    <h1>输入框 sa-input</h1>
    <section>
      <h2>1.基础用法</h2>
      <p>
        sa-input 支持使用 <mark>v-model</mark> 进行数据的双向绑定,
        当输入框有数据时默认会显示 <IconPark type="closeOne" /> clear 按钮，点击
        <mark>clear</mark> 即可清除输入框数据并回传相关事件
      </p>
      <br />
      <p><strong>案例：</strong></p>
      <br />
      <div class="demo">
        <SaInput v-model="value[0]" placeholder="placeholder" />
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
            style="height: 289px; width: 900px"
            v-html="article[0].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>2.基础：添加 label</h2>
      <p>sa-input 支持使用 <mark>label</mark> 属性进行输入框的输入内容标识</p>
      <br />
      <br />
      <p><strong>label案例：</strong></p>
      <br />
      <div class="demo">
        <SaInput label="用户名:" v-model="value[1]" placeholder="" />
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
      <h2>3.基础：添加 icon</h2>
      <p>
        SakanaCatcher 使用
        <a href="https://iconpark.oceanengine.com/home">iconPark库</a> 进行icon
        引入, 你可以从<a href="https://iconpark.oceanengine.com/home"
          >iconPark库</a
        >寻找icon 将其对于的名字输入到 <mark>icon</mark> 属性，即可引用
      </p>
      <br /><br />
      <p><strong>icon 案例：</strong></p>
      <br />
      <div class="demo">
        <SaInput
          label="用户名:"
          v-model="value[3]"
          icon="user"
          icon-size="24px"
        />
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
            style="height: 378px; width: 900px"
            v-html="article[2].content"
          ></div>
        </template>
      </sa-collapse>
      <br />
      <p>
        还可以更改 <mark>iconColor</mark> 属性,修改icon 颜色,可选值有
        <span class="text-primary">primary</span>,
        <span class="text-info">info</span>,
        <span class="text-success">success</span>,
        <span class="text-error"> error</span>,
        <span class="text-warning">warning</span>,
        <span>rgb()</span>,<span>raba()</span>, <span>black </span>等
      </p>
      <br /><br />
      <p><strong>icon iconColor案例：</strong></p>
      <br />
      <div class="demo">
        <SaInput
          label="用户名:"
          v-model="value[3]"
          icon="user"
          iconColor="primary"
          icon-size="24px"
        />
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
            style="height: 396px; width: 900px"
            v-html="article[3].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.基础：长度限制 max</h2>
      <p>你可以通过 <mark>max</mark> 属性来限制输入的长度</p>
      <br /><br />
      <p><strong>icon 案例：</strong></p>
      <p class="text-info" style="font-size: 12px">//长度限制为5</p>
      <div class="demo">
        <SaInput v-model="value[4]" :max="5" />
      </div>
      <sa-collapse :visible="collapse[4]">
        <sa-button
          :icon="collapse[4] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[4] = !collapse[4]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[4] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 342px; width: 900px"
            v-html="article[4].content"
          ></div>
        </template>
      </sa-collapse>

      <br />
    </section>
    <section>
      <h2>5.基础：错误提醒 errHint</h2>
      <p>
        表单校验完成后，你可以通过 sa-input 的内部方法
        <mark>handleErrHint</mark> 对用户输入的进行引导, 你可自己把握时机调用
        <mark>clearErrHint</mark> 即可清空提醒
      </p>
      <br /><br />
      <p><strong>icon 案例：</strong></p>
      <br />
      <div class="demo">
        <SaInput
          ref="username"
          label="用户名:"
          v-model="value[5]"
          icon="user"
          icon-size="24px"
        />
      </div>
      <sa-collapse :visible="collapse[5]">
        <sa-button
          :icon="collapse[5] ? 'doubleUp' : 'doubleDown'"
          @click="collapse[5] = !collapse[5]"
          icon-position="bottom"
          disable-round="top"
          type="primary"
          >{{ collapse[5] ? "折叠" : "点击查看代码" }}</sa-button
        >
        <template v-slot:content>
          <div
            class="code"
            style="height: 396px; width: 900px"
            v-html="article[5].content"
          ></div>
        </template>
      </sa-collapse>

      <br />
    </section>
    <section>
      <h2>6.进阶：自定义样式</h2>
      <p>
        如果你不满与局部的样式，或者与你的预期不符可以进行自定义样式，组件结构如下
      </p>

      <div class="code" v-html="article[6].content" />
    </section>
    <section>
      <h2>7.属性</h2>
      <sa-table ref="table" v-model="property" mode="limit" />
    </section>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { marked } from "marked";
import SaTable from "@/components/table/table.vue";
import { IconPark } from "@icon-park/vue-next/es/all";
import SaInput from "@/components/input/input.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
import SaButton from "@/components/button/button.vue";

@Options({
  components: {
    SaInput,
    SaTable,
    IconPark,
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
      value: ["", "SakanaCatcher", "", "", "", "", ""],
      property: [
        ["#id", "属性", "描述", "类型", "可选值", "默认值"],
        [
          1,
          "type",
          "属性",
          "string",
          "text,number,tel……等原生input属性",
          "text",
        ],
        [2, "size", "控制input大小", "string", "small,normal,large", "normal"],
        [3, "placeholder", "输入框内容提示信息", "string", "-", ""],
        [4, "rounded", "是否为圆角输入框", "boolean", "-", "true"],
        [5, "label", "输入框输入内容提示", "string", "-", ""],
        [
          6,
          "icon",
          "输入框icon显示",
          "boolean",
          "见 https://iconpark.oceanengine.com",
          "",
        ],
        [7, "iconColor", "icon颜色设置", "string", "各种颜色值 + 类型", "info"],
        [8, "clearUp", "清除按钮可见", "boolean", "-", "true"],
        [9, "max", "输入框字数限制", "boolean", "-", "true"],
        [10, "width", "输入框真实长度", "string", "css 支持的长度", "true"],
      ],
      article: [
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <SaInput v-model="value" placeholder="placeholder" />\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <SaInput label="用户名:" v-model="value" placeholder="placeholder" />\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "  <SaInput\n" +
            '     label="用户名:" \n' +
            '     v-model="value"\n' +
            '     placeholder="placeholder"\n' +
            '     icon="user"\n' +
            "  />\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "  <SaInput\n" +
            '     label="用户名:" \n' +
            '     v-model="value"\n' +
            '     placeholder="placeholder"\n' +
            '     icon="user"\n' +
            '     iconColor="primary"\n' +
            "  />\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "  <SaInput\n" +
            '     v-model="value"\n' +
            '     :max="5"\n' +
            "  />\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "  <SaInput\n" +
            '     label="用户名:" \n' +
            '     v-model="value"\n' +
            '     placeholder="placeholder"\n' +
            '     icon="user"\n' +
            '     ref="user"\n' +
            "  />\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaInput,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            '      value: "",\n' +
            "    };\n" +
            "  },\n" +
            "  mounted(){\n" +
            "    this.$refs.user.handleErrHint('请按格式输入')\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "``` vue \n" +
            "\\\\取决于你选择的size,默认为normal\n" +
            '<div:class="sa-input-border-\' + size">\\\\取决于你选择的size,默认为normal\n' +
            '    <div class="sa-input-inner">\n' +
            '      <label class="sa-input-inner-label"/>\n' +
            '      <input class="sa-pure-input"/>\n' +
            '      <span class="reactive-icon"/>\n' +
            "      \\\\取决于iconColor,为primary 或custom  \n" +
            "      <span :class=\"'icon-' + iconColorSuffix\"/> \n" +
            "    </div>\n" +
            '    <span class="sa-input-error"></span>\n' +
            "</div>\n" +
            "```",
        },
      ],
    };
  },
  mounted(): void {
    for (let i in this.article) {
      this.article[i].content = marked(this.article[i].content);
    }
    this.$refs.username.handleErrHint("请按格式输入");
    this.$nextTick(() => {
      this.$refs.table.setTCAlignOfCols("left", 1, 2, 4);
      this.$refs.table.setTHAlignOfCols("left", 1, 2);
    });
  },
})
export default class inputDemo extends Vue {}
</script>
<style lang="scss">
@use "@/theme/component/doc/index" as *;
</style>
