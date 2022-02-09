<template>
  <div class="home">
    <h1>🦈 <span class="text-primary">Sakana-UI</span></h1>
    <section>
      <h2>简介：</h2>
      <p>
        Sakana-UI 是一个 vue3 组件库，目前有
        icon，button，input，table，tooltip，collapse 组件
      </p>
    </section>
    <section>
      <h2>特色：</h2>
      <p>
        本组件库的设计理念只有一个字
        <span class="text-primary" style="font-size: 30px">快</span>
      </p>
      <p>
        旨在即插即用，以较少甚至不需要配置属性就能直接使用的组件，加快开发速度
      </p>
    </section>
    <section>
      <h2>技术选型：</h2>
      <p>
        本组件库基于 vue3，使用 ts
        进行开发，使用sass变量进行全局的样式管理，使用vue router进行路由管理
      </p>
    </section>
    <section>
      <h2>指引：</h2>
      <p>
        由于笔者技术有限，现还未能通过 npm install 安装；<br>
        如要使用:<br>
        需要将项目克隆，然后复制 `src/components` 以及 `src/theme`
        到你的项目上,即可引用
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return {};
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@use "@/theme/component/doc/index.scss" as *;
.home {
  
  h1 {
    height: 100vh;
    width: 100%;
    font-size: 10vh;

    text-align: center;
    line-height: 80vh;
  }
  section {
    margin: 40px;
  }
  h2 {
    font-size: 30px;
    line-height: 50px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
