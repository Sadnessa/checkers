<template>
  <h1 v-if="large"><slot></slot></h1>
  <p :style="{color: textColor}" v-else><slot></slot></p>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
    },

    textColor: {
      type: String,
      default: "black",
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 10px 0px;
  font-size: 48px;;
}

p {
  font-size: 14px;
  margin: 0px;
  color: #979797;

}
</style>