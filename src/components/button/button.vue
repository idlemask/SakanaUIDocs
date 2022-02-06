<template>
  <button
    :class="[
      'sa-button-' + size + '-' + shape,
      'sa-button-' + type + (pain ? '-pain' : ''),
      'sa-disable-round-' + disableRound,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div
      class="sa-button-inner"
      :style="{ 'flex-direction': innerBoxFlexDirection }"
    >
      <slot class="sa-button-content"></slot>
      <IconPark
        :class="'sa-inner-icon-' + size"
        v-if="icon != null"
        :type="icon"
      />
    </div>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed } from "vue";
import { IconPark } from "@icon-park/vue-next/es/all";
import { buttonEmits, buttonProps } from "./button";
export default defineComponent({
  props: buttonProps,
  emits: buttonEmits,
  components: { IconPark },
  setup(props, { emit }) {
    const {
      type,
      pain,
      disabled,
      size,
      shape,
      disableRound,
      icon,
      iconPosition,
    } = toRefs(props);
    const innerBoxFlexDirection = computed(() => {
      if (iconPosition.value == "left") {
        return "row-reverse";
      } else if (iconPosition.value == "right") {
        return "row";
      } else if (iconPosition.value == "top") {
        return "column-reverse";
      } else {
        return "column";
      }
    });
    const handleClick = (evt: MouseEvent): void => {
      emit("click", evt);
    };
    return {
      type,
      pain,
      size,
      shape,
      disabled,
      icon,
      innerBoxFlexDirection,
      disableRound,
      handleClick,
    };
  },
});
</script>
<style lang="scss">
@use "@/theme/component/button/index.scss" as *;
</style>
