<template>
  <div
    class="sa-table"
    ref="table"
    v-if="nativeData instanceof Array && nativeData.length > 0 && config.data"
    :style="{
      width: tWidth,
      overflow: disableScroll ? 'initial' : 'scroll',
    }"
  >
    <div
      v-for="(row, ir) in config.data"
      :key="ir"
      class="sa-table-row"
      :style="{ width: mode == 'fit-content' ? 'fit-content' : 'inherit' }"
    >
      <div
        class="sa-table-cell"
        v-for="(col, ic) in config.data[ir]"
        :style="{
          width: 'limit' ? config.widthProportion[ic] + '%' : 'initial',
          'min-width':
            mode == 'fit-content' ? config.defaulfWidth[ic] + 'px' : '40px',
          'text-align': ir == 0 ? config.thAlign[ic] : config.tcAlign[ic],
        }"
        :key="ic"
      >
        {{ config.data[ir][ic] }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, toRefs, watch } from "vue";
import { tableProps, tableConfig } from "./table";

const SaTable = defineComponent({
  props: tableProps,
  emits: {
    config: null,
  },
  setup(props, context) {
    const { tWidth, disableScroll, mode } = toRefs(props);
    const config = ref<tableConfig>(
      new tableConfig(props.modelValue, props.fromJSON)
    );
    const nativeData = computed(() => {
      return props.modelValue != null && props.modelValue != undefined
        ? props.modelValue
        : Array<Array<unknown>>();
    });
    const nativeDataWatcher = watch(nativeData, () => {
      config.value = new tableConfig(props.modelValue);
    });
    const setTCAlignOfCols = (
      value: "left" | "center" | "right",
      ...colIndex: number[]
    ) => {
      for (let i = 0; i < colIndex.length; i++) {
        if (i >= 0 && i < config.value.size) {
          config.value.tcAlign[colIndex[i]] = value;
        }
      }
    };
    const setTHAlignOfCols = (
      value: "left" | "center" | "right",
      ...colIndex: number[]
    ) => {
      for (let i = 0; i < colIndex.length; i++) {
        if (i >= 0 && i < config.value.size) {
          config.value.thAlign[colIndex[i]] = value;
        }
      }
    };
    return {
      tWidth,
      mode,
      disableScroll,
      config,
      nativeData,
      nativeDataWatcher,
      setTCAlignOfCols,
      setTHAlignOfCols,
    };
  },
});
export default SaTable;
</script>
<style lang="scss" scoped>
@use "@/theme/component/table/index.scss" as *;
</style>
