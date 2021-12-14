<template>
  <div class="btn-section">
    <div class="emoji-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
 props: {
    active: {
     type: Boolean,
     default: false,
    }
}

};
</script>

<style lang="scss" scoped>
.btn-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  display: flex;
  margin: 20px 6px;
  font-size: 28px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.51);
  padding: 0px;
}
</style>