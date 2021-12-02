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
        <ChProgressBar :progress="currentMoney/moneyGoal"></ChProgressBar>
        <ChText textColor="#27A7E5" class="money">
            {{currentMoney}}$ of {{moneyGoal}}$
        </ChText>
    </div>
    <div class="button-wrapper">
        <img src="../assets/patr.png" height="170" width="160">
        <ChButton color="#FF6855">
             <ChText textColor="white">Patreon</ChText>
        </ChButton>
    </div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue";
import ChProgressBar from "./base/ChProgressBar.vue"
import ChButton from "./base/ChButton.vue"

export default {
  components: {
    ChText,
    ChProgressBar,
    ChButton,
  },

  data(){
    return {
      moneyGoal: 12,
      currentMoney: 0,
    }
  }
};
</script>

<style lang="scss" scoped>
.supp-section {
  margin: 80px 0px;

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
      flex-direction: column;
      margin-top: 86px;

      .money {
          font-size: 24px;
          font-weight: bold;
      }
  }

.button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;

    img {
        border-radius: 5px;
    }

    button {
        padding: 16px 46px;
    }
}
}
</style>