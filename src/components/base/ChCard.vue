<template>
  <div class="card-section">
    <div class="img-wrapper">
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
  width: 200px;
  height: 200px;
  border-radius: 5px;
 box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.51);
  padding: 0px;
  margin: 16px 10px;
}

.text-wrapper {
  margin-top: 20px;
}
</style>