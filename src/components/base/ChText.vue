<template>
  <h1 v-if="large"><slot></slot></h1>
  <p v-else><slot></slot></p>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 24px;
}
</style>