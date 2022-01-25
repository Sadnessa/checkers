<template>
  <button :style="computedStyle">
    <span class="button-content">
      <div class="left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot></slot>
      </div>
      <div class="right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
    </span>
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
    },
  },

  computed: {
    computedStyle() {
      if (this.bordered) {
        return {
          border: `2px solid ${this.color}`,
        };
      }
      return {
        background: this.color,
      };
    },
  },
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
  position: relative;

  &:hover {
    overflow: hidden;
    &::after {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: rgba($color: #525252, $alpha: 0.2);
      content: "";
    }
  }

  .button-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    text-align: center;

    .center {
      width: 100%;
    }
  }
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