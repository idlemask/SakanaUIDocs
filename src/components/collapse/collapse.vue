<template>
  <div
    class="sa-collapse"
    :style="{
      'flex-direction': innerBoxFlexDirection,
      width:
        position == 'top' || position == 'bottom'
          ? clientWidth + 'px'
          : 'fit-content',
      height:
        position == 'top' || position == 'bottom'
          ? 'fit-content'
          : clientHeight + 'px',
    }"
  >
    <div
      ref="content"
      :class="['sa-collapse-content']"
      :style="{
        overflow: 'hidden',
        height: rHeight,
        width: rWidth,
        position: delayVisible ? 'static' : 'absolute',
        visibility: delayVisible ? 'visible' : 'hidden',
      }"
    >
      <slot name="content" />
    </div>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed, ref } from "vue";
import { collapseProps } from "./collapse";
export default defineComponent({
  props: collapseProps,
  setup(props) {
    const { visible, width, height, position } = toRefs(props);
    const delayVisible = ref(visible.value);
    const innerBoxFlexDirection = computed(() => {
      if (position.value == "left") {
        return "row-reverse";
      } else if (position.value == "right") {
        return "row";
      } else if (position.value == "top") {
        return "column-reverse";
      } else {
        return "column";
      }
    });
    return {
      visible,
      delayVisible,
      innerBoxFlexDirection,
    };
  },
  data() {
    return {
      clientHeight: 0,
      clientWidth: 0,
      rHeight: this.height,
      rWidth: this.width,
    };
  },
  mounted() {
    this.updateContent();
  },
  watch: {
    visible(val) {
      this.updateContent();
      if (val) {
        if (["top", "bottom"].includes(this.position)) {
          this.rHeight = "0px";
          this.delayVisible = true;
          setTimeout(() => {
            this.rHeight = this.clientHeight + "px";
          }, 500);
        } else {
          this.rWidth = "0px";
          this.delayVisible = true;
          setTimeout(() => {
            this.rWidth = this.clientWidth + "px";
          }, 500);
        }
      } else {
        if (["top", "bottom"].includes(this.position)) {
          this.rHeight = "0px";
        } else {
          this.rWidth = "0px";
        }
        setTimeout(() => {
          this.delayVisible = false;
          this.rHeight = this.height;
          this.rWidth = this.width;
        }, 500);
      }
    },
  },
  methods: {
    updateContent() {
      if (this.$refs.content instanceof HTMLDivElement) {
        this.clientHeight = this.$refs.content.clientHeight;
        this.clientWidth = this.$refs.content.clientWidth;
      }
    },
  },
});
</script>
<style lang="scss">
@use "@/theme/component/collapse/index.scss" as *;
</style>
