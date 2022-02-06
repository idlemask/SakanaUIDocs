<template>
  <div style="width: 900px;display:flex">
  <sa-select></sa-select>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SaSelect from "@/components/select/select.vue"
@Options({
  components: {
    SaSelect
  },
  data() {
    return {};
  },
})
export default class Test extends Vue {}
</script>
