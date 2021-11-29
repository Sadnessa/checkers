<template>
  <button :style="{ background: color }">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <slot></slot>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 5px;
  border: none;
  margin: 12px 0px;
}

.left {
  display: flex;
  margin-right: 4px;
}

.right {
  display: flex;
  margin-left: 4px;
}
</style>