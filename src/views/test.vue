<template>
  <div>
    <div style="width: 1000px">
      <sa-collapse :visible="value">
        <sa-button @click="value = !value"></sa-button>
        <template v-slot:content>
          <p>alkdjaskdjalskd1231k2lkjalskdjakldjaklsdjaksldjaskldjasldkasj</p>
          <p>alkdjaskdjalskd1231k2lkjalskdjakldjaklsdjaksldjaskldjasldkasj</p>
          <p>alkdjaskdjalskd1231k2lkjalskdjakldjaklsdjaksldjaskldjasldkasj</p>
          <p>alkdjaskdjalskd1231k2lkjalskdjakldjaklsdjaksldjaskldjasldkasj</p>
        </template>
      </sa-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SaButton from "@/components/button/button.vue";
import SaCollapse from "@/components/collapse/collapse.vue";
@Options({
  components: {
    SaButton,
    SaCollapse
  },
  data() {
    return {
      value: false,
    };
  },
})
export default class Test extends Vue {}
</script>
<style>
.sa-tooltip {
  margin: 100px;
}
</style>
