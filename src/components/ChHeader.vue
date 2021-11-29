<template>
<div class="ch-header">
  <div class="col col--30">dsdsd</div>  
  <div class="col col--50">dsddsds</div>
</div>
</template>

<style lang="scss" scoped>
.ch-header {
  display: flex;
  justify-content: center;
  width: 100%;
}

.col {
  &--30 {
width: 30%;
margin-right: 10px;
background: chartreuse;
  }

  &--50 {
width: 50%;
background: cadetblue;
  }
}
</style>
