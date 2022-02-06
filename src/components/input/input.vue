<template>
  <div
    :class="[
      'sa-input-border-' + size,
      rounded ? 'sa-input-border-rounded' : '',
      'sa-disable-round-' + disableRound,
    ]"
  >
    <div class="sa-input-inner">
      <label v-show="label" class="sa-input-inner-label" for="value">{{
        label
      }}</label>
      <input
        class="sa-pure-input"
        ref="input"
        :name="name"
        :style="{ width: width }"
        :placeholder="placeholder"
        @change="handleChange"
        @input="handleInput"
        @mouseenter="handleMouseEnter"
        @mousemouseleave="handleMouseLeave"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeyDown"
      />
      <span
        :class="['reactive-icon', clearUp && showClearUp ? '' : 'hidden']"
        @click="handleClearUp"
        ><icon-park reactive pain color="error" type="closeOne"
      /></span>
      <span
        :class="'icon-' + iconColorSuffix"
        v-if="icon !== null && iconColorSuffix !== 'custom'"
        ><icon-park :size="iconSize" :color="iconColor" :type="icon"
      /></span>
      <span
        class="icon-custom"
        v-else-if="iconColorSuffix === 'custom'"
        :style="{ color: iconColor }"
        ><icon-park :size="iconSize" :type="icon"
      /></span>
    </div>
    <span v-if="errMsg" class="sa-input-error">{{ errMsg }}</span>
  </div>
</template>
<script lang="ts">
import {
  toRefs,
  computed,
  defineComponent,
  watch,
  onMounted,
  ref,
  nextTick,
} from "vue";
import IconPark from "@/components/icon/iconPark.vue";
import { inputEmits, inputProps } from "./input";
import { color_type, isColor } from "@/utils/prop";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;
const SaInput = defineComponent({
  props: inputProps,
  components: { IconPark },
  emits: inputEmits,
  setup(props, { emit }) {
    //声明段
    let { size, rounded, value, iconColor, iconSize, disableRound } =
      toRefs(props);
    const input = ref<HTMLInputElement>();
    const focus = ref<boolean>(false);
    const first = ref<boolean>(true);
    const hovering = ref<boolean>(false);
    const errMsg = ref<string>();

    // 计算属性
    const inputValue = computed(() => input.value);
    // 取得传入输入框值
    const nativeInputValue = computed(() =>
      props.modelValue === null || props.modelValue === undefined
        ? ""
        : String(props.modelValue)
    );
    // 根据当前输入框的value 展示/隐藏 清空按钮
    const showClearUp = computed(() => nativeInputValue.value.length > 0);
    // 更新输入框的值
    const setNativeInputValue = () => {
      const input = inputValue.value;
      if (!input || input.value === nativeInputValue.value) return;
      input.value = nativeInputValue.value;
    };
    const iconColorSuffix = computed(() => {
      if (color_type.includes(props.iconColor)) {
        return props.iconColor;
      } else {
        if (!isColor(props.iconColor)) {
          console.warn("iconColor props error!");
        }
        return "custom";
      }
    });

    //监听器
    //监听v-model的value变化，更新
    watch(nativeInputValue, () => setNativeInputValue());
    onMounted(() => {
      setNativeInputValue();
    });

    // 事件处理
    // 输入变化回传
    const handleInput = (event: Event) => {
      const { value } = event.target as TargetElement;
      if (value === nativeInputValue.value) return;
      if (inputValue.value && inputValue.value.value.length > props.max) {
        emit("update:modelValue", value.substring(0, props.max));
        emit("input", value.substring(0, props.max));
      } else {
        emit("update:modelValue", value);
        emit("input", value);
      }
      nextTick(setNativeInputValue);
    };
    const handleChange = (event: Event) => {
      emit("change", (event.target as TargetElement).value);
    };
    const handleClearUp = () => {
      first.value = false;
      emit("update:modelValue", "");
      emit("change", "");
      emit("clear");
      emit("input", "");
      nextTick(setNativeInputValue);
    };
    const handleMouseEnter = (event: MouseEvent) => {
      hovering.value = true;
      emit("mouseenter", event);
    };
    const handleMouseLeave = (event: MouseEvent) => {
      hovering.value = false;
      emit("mouseleave", event);
    };
    const handleFocus = () => {
      focus.value = true;
      emit("focus", true);
    };
    const handleBlur = () => {
      focus.value = false;
      emit("focus", false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      focus.value = false;
      emit("keydown", event);
    };
    const handleErrHint = (msg: string) => {
      errMsg.value = msg;
    };
    const clearErrHint = () => {
      errMsg.value = "";
    };
    return {
      first,
      input,
      size,
      value,
      rounded,
      hovering,
      disableRound,
      iconColor,
      iconSize,
      inputValue,
      showClearUp,
      iconColorSuffix,
      errMsg,
      handleInput,
      handleChange,
      handleClearUp,
      handleMouseEnter,
      handleMouseLeave,
      handleFocus,
      handleBlur,
      handleKeyDown,
      handleErrHint,
      clearErrHint,
    };
  },
  methods: {},
});
export default SaInput;
</script>
<style lang="scss" scoped>
@use "@/theme/component/input/index.scss" as *;
</style>
