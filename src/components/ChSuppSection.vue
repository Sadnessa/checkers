<template>
  <div class="supp-section">
    <div class="header">
      <ChText large> Support </ChText>
      <img src="../assets/supp.png" heigth="187" width="183" />
    </div>
    <div class="status-bar">
        <ChText textColor="#979797">
            I have to pay for the bot server every month. You can help me.
        </ChText>
    </div>
    <div class="button-wrapper"></div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue";

export default {
  components: {
    ChText,
  },
};
</script>

<style lang="scss" scoped>
.supp-section {
  margin-top: 80px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      left: 60%;
    }
  }

  .status-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 86px;
  }
}
</style>