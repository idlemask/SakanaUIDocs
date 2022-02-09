<template>
  <div class="doc-container">
    <h1>表格 sa-table</h1>
    <section>
      <h2>1.基础用法</h2>
      <p>
        sa-table 支持使用
        <mark>v-model</mark> 进行数据的双向绑定，默认的数据类型为
        <mark
          >Array&lt;Array&lt;String&brvbar;number&brvbar;boolean&gt;&gt;</mark
        >
        第一行为列表头，之后为数据
      </p>
      <br />
      <p><strong>案例：</strong></p>
      <br />
      <div class="demo">
        <sa-table v-model="arrayData" />
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
            style="height: 467px; width: 900px"
            v-html="article[0].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>2.基础: 读取JSON</h2>
      <p>sa-table 支持使用使用json作为数据输入</p>
      <br />
      <p><strong>案例：</strong></p>
      <br />
      <div class="demo">
        <sa-table v-model="jsonData" fromJSON />
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
            style="height: 360px; width: 900px"
            v-html="article[1].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>3.基础: 文字对齐调整</h2>
      <p>
        sa-table 可以使用内部方法 <mark>setTHAlignOfCols</mark> 和
        <mark>setTCAlignOfCols</mark> 分别对每列表头元素或数据进行文字对齐调整,
        方法的第一个参数为(left | center |
        right),后面的可变参数为要改变的列号（索引从0开始）
      </p>
      <br />
      <p><strong>案例：</strong></p>
      <br />
      <div class="demo">
        <sa-table ref="table" v-model="arrayData2" />
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
            style="height: 538px; width: 900px"
            v-html="article[2].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.基础: 排版模式</h2>
      <p>
        sa-table
        有两个排版模式，之前的例子是<mark>fit-content</mark>,意为根据数据内容调整列宽，一行显示,同时可选是否禁用滚轮，前者虽然能比较美观地展示页面，但信息密度较低，第二个模式为<mark>limit</mark>，将限定表格的宽度让表格在一定的宽度下显示
      </p>
      <br />
      <p><strong>案例：</strong></p>
      <br />
      <div class="demo">
        <h3>limit:</h3>
        <br />
        <sa-table v-model="arrayData2" mode="limit" />
        <br />
        <h3>fit-content disableScroll:</h3>
        <br />
        <sa-table v-model="arrayData2" disableScroll />
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
            style="height: 538px; width: 900px"
            v-html="article[3].content"
          ></div>
        </template>
      </sa-collapse>
    </section>
    <section>
      <h2>4.进阶: 自定义样式</h2>
      <p>组件结构如下</p>
      <div class="code" v-html="article[4].content" />
    </section>
    <section>
      <h2>5.属性:</h2>
      <sa-table v-model="property" mode="limit" />
    </section>
    <section>
      <h2>6.方法:</h2>
      <sa-table v-model="method" mode="limit" tWidth="920px" disableScroll />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { arrayData, jsonData } from "@/mock/modules/table";
import SaTable from "@/components/table/table.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
import SaButton from "@/components/button/button.vue";
import { marked } from "marked";

@Options({
  components: {
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
      collapse: [false, false, false, false],
      arrayData: arrayData(8),
      jsonData: jsonData(3),
      arrayData2: arrayData(8),
      property: [
        ["#id", "属性", "描述", "类型", "可选值", "默认值"],
        ["1", "v-model", "表格数据", "二维数组或JSON", "-", "-"],
        ["2", "tWidth", "表格宽度", "string（css长度）", "-", "100%"],
        ["3", "formJSON", "数据来源类型", "boolean", "true ｜ false", "false"],
        [
          "4",
          "mode",
          "布局模式",
          "string",
          "fit-content ｜ limit",
          "fit-content",
        ],
        [
          "5",
          "disableScroll",
          "是否禁用滚动",
          "boolean",
          "true ｜ false",
          "false",
        ],
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
            '  <SaTable v-model="tableData"/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaTable,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      tabledata: [\n" +
            '         ["#id", "姓名", "出生日期", "性别", "城市", "简介"],\n' +
            '         [1, "邹明", "1988年09月", "女", "合肥市", "去当加何都起但记治院斗很并团儿过及没。"],\n' +
            '         [2, "杨敏", "2013年08月", "男", "南充市", "入料受科正看大高将众和几地治叫么整。"],\n' +
            '         [3, "贺刚", "2019年09月", "女", "来宾市", "打只见也火写发龙千及平路后适角品相。"],\n' +
            '         [4, "胡超", "2005年01月", "男", "运城市", "用区风张记半产况活把开院先交把群线很。"],\n' +
            '         [5, "戴强", "2019年01月", "男", "红河哈尼族彝族自治州", "使低此同即声立张全而感平转别明和半。"],\n' +
            '         [6, "傅霞", "2015年12月", "男", "佳木斯市", "而是党直约己根放立而市权变。"],\n' +
            '         [7, "秦艳", "1979年10月", "男", "海南藏族自治州", "志值体价位称育利很月联必资习劳。"],\n' +
            '         [8, "乔艳", "1994年08月", "男", "九龙", "平己变派发满委治率被天石业太。"]\n' +
            "      ],\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <SaTable v-model="tableData" fromJSON/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaTable,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      tabledata: [\n" +
            '         { "#id": 9, "姓名": "范敏", "出生日期": "2001年11月", "性别": "男", "城市":"十堰市", "简介": "复龙流道在地号美何科火基许想。" }}\n' +
            '         { "#id": 10, "姓名": "何敏", "出生日期": "1983年11月", "性别": "男", "城市":"武威市", "简介": "保称级花确育效价再线系信府人片只对义。" },\n' +
            '         { "#id": 11, "姓名": "黄磊", "出生日期": "2016年10月", "性别": "男", "城市":"楚雄彝族自治州", "简介": "那口养东往边感所取社王图五。" },\n' +
            "      ],\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            '  <SaTable v-model="tableData"/>\n' +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaTable,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      tabledata: [\n" +
            '         ["#id", "姓名", "出生日期", "性别", "城市", "简介"],\n' +
            '         [1, "邹明", "1988年09月", "女", "合肥市", "去当加何都起但记治院斗很并团儿过及没。"],\n' +
            '         [2, "杨敏", "2013年08月", "男", "南充市", "入料受科正看大高将众和几地治叫么整。"],\n' +
            '         [3, "贺刚", "2019年09月", "女", "来宾市", "打只见也火写发龙千及平路后适角品相。"],\n' +
            '         [4, "胡超", "2005年01月", "男", "运城市", "用区风张记半产况活把开院先交把群线很。"],\n' +
            '         [5, "戴强", "2019年01月", "男", "红河哈尼族彝族自治州", "使低此同即声立张全而感平转别明和半。"],\n' +
            '         [6, "傅霞", "2015年12月", "男", "佳木斯市", "而是党直约己根放立而市权变。"],\n' +
            '         [7, "秦艳", "1979年10月", "男", "海南藏族自治州", "志值体价位称育利很月联必资习劳。"],\n' +
            '         [8, "乔艳", "1994年08月", "男", "九龙", "平己变派发满委治率被天石业太。"]\n' +
            "      ],\n" +
            "    };\n" +
            "  },\n" +
            "  mounted(){\n" +
            "    this.$refs.table.setTCAlignOfCols('left',0,5)\n" +
            "    this.$refs.table.setTHAlignOfCols('left',0)\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            "<template>\n" +
            "  <div>\n" +
            '   <SaTable v-model="tableData" mode="limit"/>\n' +
            '   <SaTable v-model="tableData" disavle-scroll/>\n' +
            "  </div>\n" +
            "</template>\n" +
            "script:\n" +
            "@Options({\n" +
            "  components: {\n" +
            "    SaTable,\n" +
            "  },\n" +
            "  data() {\n" +
            "    return {\n" +
            "      tabledata: [\n" +
            '         ["#id", "姓名", "出生日期", "性别", "城市", "简介"],\n' +
            '         [1, "邹明", "1988年09月", "女", "合肥市", "去当加何都起但记治院斗很并团儿过及没。"],\n' +
            '         [2, "杨敏", "2013年08月", "男", "南充市", "入料受科正看大高将众和几地治叫么整。"],\n' +
            '         [3, "贺刚", "2019年09月", "女", "来宾市", "打只见也火写发龙千及平路后适角品相。"],\n' +
            '         [4, "胡超", "2005年01月", "男", "运城市", "用区风张记半产况活把开院先交把群线很。"],\n' +
            '         [5, "戴强", "2019年01月", "男", "红河哈尼族彝族自治州", "使低此同即声立张全而感平转别明和半。"],\n' +
            '         [6, "傅霞", "2015年12月", "男", "佳木斯市", "而是党直约己根放立而市权变。"],\n' +
            '         [7, "秦艳", "1979年10月", "男", "海南藏族自治州", "志值体价位称育利很月联必资习劳。"],\n' +
            '         [8, "乔艳", "1994年08月", "男", "九龙", "平己变派发满委治率被天石业太。"]\n' +
            "      ],\n" +
            "    };\n" +
            "  }\n" +
            "})\n" +
            "```\n",
        },
        {
          content:
            "```vue\n" +
            '<div class="sa-table">\n' +
            '   <div v-for="(row, ir) in config.data" :key="ir" class="sa-table-row">\n' +
            '       <div class="sa-table-cell" v-for="(col, ic) in config.data[ir]" :key="ic">\n' +
            "           {{ config.data[ir][ic] }}\n" +
            "       </div>\n" +
            "     </div>\n" +
            "</div>\n" +
            "```",
        },
      ],
    };
  },
  mounted() {
    for (const i in this.article) {
      this.article[i].content = marked(this.article[i].content);
    }
    this.$refs.table.setTCAlignOfCols("left", 0, 5);
    this.$refs.table.setTHAlignOfCols("left", 0);
  },
})
export default class table extends Vue {}
</script>
<style lang="scss">
@use "@/theme/component/doc/index" as *;
</style>
