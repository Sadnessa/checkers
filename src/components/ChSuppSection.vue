<template>
  <div class="supp-section">
    <div class="header"> 
      <img src="../assets/supp.png" heigth="220" width="220" />
      <ChText large> Support </ChText>
    </div>
    <div class="status-bar">
      <ChText textColor="#979797">
        I have to pay for the bot server every month. You can help me.
      </ChText>
      <ChProgressBar :progress="currentMoney / moneyGoal"></ChProgressBar>
      <ChText textColor="#27A7E5" class="money">
        {{ currentMoney }}$ of {{ moneyGoal }}$
      </ChText>
    </div>
    <div class="buttons-sec">
      <div class="button-wrapper">
        <img src="../assets/patr.webp" height="170" width="160" />
        <a href="https://www.patreon.com/m0ksem">
          <ChButton color="#FF6855">
            <ChText textColor="white">Patreon</ChText>
          </ChButton>
        </a>
      </div>
      <div class="button-wrapper">
        <img src="../assets/ko-fi.webp" height="170" width="160" />
        <a href="https://ko-fi.com/m0ksem">
          <ChButton color="#01a7fe">
            <ChText textColor="white">Ko-fi</ChText>
          </ChButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ChProgressBar from "./base/ChProgressBar.vue";

export default {
  components: {
    ChProgressBar,
  },

  data() {
    return {
      moneyGoal: 12,
      currentMoney: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
.supp-section {
  margin: 100px 0px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      right: 60%;
      user-select: none;
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

    p {
      font-size: 18px;
    }
  }

  .buttons-sec {
    display: flex;
    justify-content: center;
    
    .button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;

    img {
      border-radius: 5px;
    }

    a {
      text-decoration: none;
      width: 100%;
    }

    button {
      width: 100%;
      padding: 16px 46px;
    }
  }
  }

  
}
</style>