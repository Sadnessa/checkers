<template>
  <div class="card-section">
    <div class="img-wrapper" v-if="$slots.img">
      <slot name="img"></slot>
    </div>
    <div class="text-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.51);
  padding: 0px;
  margin: 16px 10px;
}
</style>