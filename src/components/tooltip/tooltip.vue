<template>
  <div class="sa-tooltip">
    <div class="sa-tooltip-target" ref="target">
      <slot />
    </div>
    <div
      ref="content"
      :class="[
        'sa-tooltip-container',
        visible ? 'tooltip-enter' : 'tooltip-out',
      ]"
      :style="{
        'flex-direction': innerBoxFlexDirection,
        margin: getContentOffset(),
        visibility: delayVisible ? 'visible' : 'hidden',
      }"
    >
      <div :class="'sa-tooltip-arrow-' + position"></div>
      <div
        class="sa-tooltip-content"
        :style="{
          width: width,
          height: height,
          left: contentXOffset + 'px',
          top: contentYOffset + 'px',
        }"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, toRefs, watch, computed, ref, reactive } from "vue";
import { tooltipEmits, tooltipProps } from "./tooltip";
export default defineComponent({
  props: tooltipProps,
  emits: tooltipEmits,
  setup(props, { emit, slots }) {
    const { width, height, position, visible } = toRefs(props);
    const delayVisible = ref(props.visible);
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
      width,
      height,
      innerBoxFlexDirection,
    };
  },
  watch: {
    visible(val, oval) {
      if (val) {
        this.delayVisible = val;
        this.target = ref({
          clientHeight: this.$refs.target.clientHeight,
          clientWidth: this.$refs.target.clientWidth,
        });
        this.content = ref({
          clientHeight: this.$refs.content.clientHeight,
          clientWidth: this.$refs.content.clientWidth,
        });
        if (!this.holdOn) {
          setTimeout(() => {
            this.addCloseListener();
          }, 1000);
        }
        if (this.autoClose != 0) {
          setTimeout(() => {
            document.removeEventListener("click", this.handleClickOther);
            this.$refs.content.removeEventListener(
              "click",
              this.handleClickSelf
            );
            this.$emit("update:visible", false);
          }, this.autoClose);
        }
      } else {
        setTimeout(() => {
          this.delayVisible = false;
        }, 500);
      }
    },
  },
  data() {
    return {
      target: null,
      content: null,
      domCloseLisitener: null,
    };
  },
  methods: {
    getContentOffset() {
      if (this.target && this.content) {
        if (this.position == "top") {
          return (
            "0 " +
            this.xOffset +
            "px " +
            (this.target.clientHeight +
              this.content.clientHeight +
              -this.yOffset) +
            "px 0"
          );
        } else if (this.position == "right") {
          return (
            this.yOffset + "px" +
            " 0 0 " +
            (this.target.clientWidth +
              this.content.clientWidth +
              this.xOffset) +
            "px"
          );
        } else if (this.position == "left") {
          return (
            this.yOffset +
            "px " +
            (this.target.clientWidth +
              this.content.clientWidth -
              this.xOffset) +
            "px 0 0"
          );
        } else {
          return (
            this.target.clientHeight +
            this.content.clientHeight +
            this.yOffset +
            "px 0 0 " +
            this.xOffset  + "px"
          );
        }
      } else return "0";
    },
    handleClickOther() {
      this.$emit("update:visible", false);
      this.$refs.content.onclick = null;
      document.removeEventListener("click", this.handleClickOther);
    },
    handleClickSelf(e) {
      e.stopPropagation();
    },
    addCloseListener() {
      document.addEventListener("click", this.handleClickOther);
      this.$refs.content.addEventListener("click", this.handleClickSelf);
    },
  },
});
</script>
<style lang="scss">
@use "@/theme/component/tooltip/index.scss" as *;
</style>
