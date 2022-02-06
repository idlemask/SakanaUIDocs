<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
<!--    <div v-html=></div>-->
    <div style="margin: 50px">
      <form action="">
        <SaInput
          ref="input"
          type="email"
          width="500px"
          clear
          errorHint
          label="用户名："
          v-model="value"
          icon="addText"
          iconColor="primary"
        />
        <input type="submit" value="" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SaInput from "@/components/input/input.vue";

@Options({
  components: {
    SaInput,
  },
  data() {
    return {
      value: "1231231",
    };
  },
  mounted(): void {
    this.$refs.input.handleErrHint("hahahahaha");
    this.$refs.input.clearErrHint();
  },
})
export default class Home extends Vue {}
</script>
