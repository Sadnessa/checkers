<template>
  <div class="section">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <div class="title">
      <ChText large>Checkers skins</ChText>
    </div>
    <div class="buttons">
      <div class="button button--left">
        <span class="material-icons-round"> arrow_left </span>
      </div>
      <div class="button button--right">
        <span class="material-icons-round"> arrow_right </span>
      </div>
    </div>
    <div class="checkers-demo">
      <ChSkinsDemo></ChSkinsDemo>
    </div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue";
import ChSkinsDemo from "./base/ChSkinsDemo.vue";

export default {
  components: {
    ChText,
    ChSkinsDemo,
  },

  data() {
    return {
      currentSkin: {white: "a", black: "b"}
    }
  }
};
</script>

<style lang="scss" scoped>
.material-icons-round {
  font-family: Material Icons;
  font-size: 20px;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0px;
  position: relative;

  .checkers-demo {
    display: flex;
    justify-content: center;
  }

  .buttons {
    position: absolute;
    user-select: none;
    width: 100%;

    .button {
      background: rgba($color: #000000, $alpha: 0.5);
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      &--left {
        position: absolute;
        left: 120px;
        transform: translateY(80%);
      }

      &--right {
        position: absolute;
        right: 120px;
        transform: translateY(80%);
      }
    }
  }
}
</style>