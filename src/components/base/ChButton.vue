<template>
  <button :style="computedStyle">
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

    bordered: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    computedStyle() {
      if(this.bordered) {
        return {
          border: `2px solid ${this.color}`
        }
      }
      return {
        background: this.color
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  margin: 12px 0px;
  cursor: pointer;
  background: transparent;
}

.left {
  display: flex;
  margin-right: 10px;
}

.right {
  display: flex;
  margin-left: 6px;
}
</style>