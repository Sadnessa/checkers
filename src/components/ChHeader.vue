<template>
  <div class="ch-header">
    <div class="col col--30 img-wrapper">
      <img src="../assets/logo.png" />
    </div>
    <div class="col col--50 text-wrapper">
      <ChText large>GameCheckersBot</ChText>
      <ChText textColor="#979797">Chess game in Telegram chat</ChText>
      <ChButton color="#25a3e2">
        <ChText textColor="white">Start playing</ChText>
        <template #right>
          <img src="../assets/telega.svg" height="18" width="18" />
        </template>
      </ChButton>
    </div>
  </div>
</template>

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
