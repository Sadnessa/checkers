<template>
  <div class="section">
    <div class="title">
      <ChText large>Checkers skins</ChText>
    </div>
    <div class="buttons">
      <div class="button button--left" @click="prevSkin">
        <span class="material-icons-round"> navigate_before </span>
      </div>
      <div class="button button--right" @click="nextSkin">
        <span class="material-icons-round"> navigate_next </span>
      </div>
    </div>
    <div class="checkers-demo">
      <ChSkinsDemo
        :white="currentSkin.white"
        :black="currentSkin.black"
        :whiteQueen="currentSkin.whiteQueen"
        :blackQueen="currentSkin.blackQueen"
      ></ChSkinsDemo>
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
      currentSkinIndex: 0,

      skins: [
        {
          white: "🌕",
          black: "🌑",
          whiteQueen: "🌝",
          blackQueen: "🌚",
        },
        {
          white: "🧁",
          black: "🍩",
          whiteQueen: "🍰",
          blackQueen: "🍪",
        },
        {
          white: "🐈",
          black: "🐕",
          whiteQueen: "🐱",
          blackQueen: "🐶",
        },
      ],
    };
  },

  computed: {
    currentSkin() {
      return {
        white: this.skins[this.currentSkinIndex].white,
        black: this.skins[this.currentSkinIndex].black,
        whiteQueen: this.skins[this.currentSkinIndex].whiteQueen,
        blackQueen: this.skins[this.currentSkinIndex].blackQueen,
      };
    },
  },

  methods: {
    nextSkin() {
      if(this.currentSkinIndex >= this.skins.length-1) {
        return
      }
      this.currentSkinIndex += 1;
    },

    prevSkin() {
      if(this.currentSkinIndex == 0) {
        return
      }
      this.currentSkinIndex -= 1;
    },
  },
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
      background: rgba($color: #000000, $alpha: 0.4);
      border-radius: 50%;
      height: 30px;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(100, 100, 100, 0.5);
      color: rgb(77, 77, 77);
      }

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