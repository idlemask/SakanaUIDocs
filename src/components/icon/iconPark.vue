<template>
  <icon-park
    :class="[
      'icon-park',
      'icon-' +
        iconColorSuffix +
        (pain ? '-pain' : '') +
        (reactive ? '-reactive' : ''),
    ]"
    :theme="filled ? 'filled' : 'outline'"
    :style="{
      'font-size': size,
    }"
    :type="type"
  ></icon-park>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import { IconPark } from "@icon-park/vue-next/es/all";
import { iconProps } from "./iconPark";
import { color_type, isColor } from "@/utils/prop";
export default defineComponent({
  components: { IconPark },
  props: iconProps,
  setup(props) {
    const { type, color, reactive, pain, size, filled } = toRefs(props);
    // console.log(type, color, reactive, pain.value);
    const iconColorSuffix = computed(() => {
      if (props.color != null && color_type.includes(props.color)) {
        return props.color;
      } else {
        if (props.color != null && !isColor(props.color)) {
          console.warn("iconColor props error!");
        }
        return "custom";
      }
    });
    return {
      type,
      pain,
      color,
      size,
      filled,
      reactive,
      iconColorSuffix,
    };
  },
});
</script>
<style lang="scss">
@use "@/theme/component/icon/index.scss" as *;
</style>
