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
    <div class="indicators">
      <ChSkinsIndicators
        v-for="(skin, index) in skins"
        :key="skin"
        @click="slide(index)"
      >
        {{ skin.logo }}
      </ChSkinsIndicators>
    </div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue";
import ChSkinsIndicators from "./base/ChSkinsIndicators.vue";
import ChSkinsDemo from "./base/ChSkinsDemo.vue";

export default {
  components: {
    ChText,
    ChSkinsDemo,
    ChSkinsIndicators,
  },

  data() {
    return {
      currentSkinIndex: 0,

      skins: [
        {
          logo: "🌓",
          white: "🌕",
          black: "🌑",
          whiteQueen: "🌝",
          blackQueen: "🌚",
        },
        {
          logo: "🎂",
          white: "🧁",
          black: "🍩",
          whiteQueen: "🍰",
          blackQueen: "🍪",
        },
        {
          logo: "🐾",
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
      if (this.currentSkinIndex >= this.skins.length - 1) {
        return;
      }
      this.currentSkinIndex += 1;
    },

    prevSkin() {
      if (this.currentSkinIndex == 0) {
        return;
      }
      this.currentSkinIndex -= 1;
    },

    slide(i) {
      this.currentSkinIndex = i;
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
    user-select: none;
    width: 100%;
    display: flex;

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
        transform: translateY(130px);
      }

      &--right {
        position: absolute;
        right: 120px;
        transform: translateY(130px);
      }

      &--active {
        background: rgba(53, 53, 53, 0.5);
        border: 3px solid;
        border-color: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
      }
    }
  }
}

.indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
</style>