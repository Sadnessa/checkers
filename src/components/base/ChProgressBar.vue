<template>
  <div class="progress-bar">
    <div class="bar-wrapper">
      <div class="indicator" :style="{ width: fillWidth }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    fillWidth() {
      let percent = this.progress * 100;
      if (percent > 100) {
        percent = 100;
      }
      return percent + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
.bar-wrapper {
  padding: 4px;
  width: 700px;
  height: 46px;
  margin: 20px;
  border-radius: 5px;
  outline: solid 5px;
  outline-color: #27a7e5;

  .indicator {
    width: 50%;
    height: 46px;
    border-radius: 5px;
    background-color: #27a7e5;
  }
}
</style>