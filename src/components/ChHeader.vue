<template>
  <div class="ch-header">
    <div class="col col--30 img-wrapper">
      <img src="../assets/logo.png" />
    </div>
    <div class="col col--50 text-wrapper">
      <ChText large>GameCheckersBot</ChText>
      <ChText>Chess game in Telegram chat</ChText>
      <ChButton color="#31aae5">
        <ChText>Start playing</ChText>
        <template #right>
          <img src="../assets/telega.svg">
        </template>
      </ChButton>
    </div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue";
import ChButton from "./base/ChButton.vue"

export default {
  components: {
  ChText,
  ChButton,
  }
  
};
</script>

<style lang="scss" scoped>
.ch-header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;

  .col {
    &--30 {
      width: 30%;
    }

    &--50 {
      width: 50%;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
  }

  .text-wrapper {
 padding: 40px 60px;
 box-sizing: border-box;
  }
}
</style>
