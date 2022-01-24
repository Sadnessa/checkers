<template>
  <div class="demo-wrapper">
    <div class="checkers-row" v-for="row in table" :key="row">
      <div class="checkers-cell" v-for="cell in row" :key="cell">
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    white: {
      type: String,
    },

    black: {
      type: String,
    },

    whiteQueen: {
      type: String,
    },

    blackQueen: {
      type: String,
    }
  },

  computed: {
    table() {
      const w = this.$props.white;
      const b = this.$props.black;
      const wQ = this.$props.whiteQueen;
      const bQ = this.$props.blackQueen;

      return [
        ["  ", wQ, "  ", w, "  ", w, "  ", w],
        [w, "  ", w, "  ", w, "  ", w, "  "],
        ["  ", w, "  ", w, "  ", w, "  ", w],
        ["|||", "  ", "|||", "  ", "|||", "  ", "|||", "  "],
        ["  ", "|||", "  ", "|||", "  ", "|||", "  ", "|||"],
        [b, "  ", b, "  ", b, "  ", b, "  "],
        ["  ", b, "  ", b, "  ", b, "  ", b],
        [b, "  ", b, "  ", b, "  ", bQ, "  "],
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 95%;

  .checkers-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .checkers-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color: #000000, $alpha: 0.3);
    padding: 6px 12px;
    margin: 2px;
    border-radius: 6px;
    user-select: none;
    width: 26px;
    height: 21px;
    transition: all 0.1s ease-in-out;

    &:hover {
      background: rgba($color: #000000, $alpha: 0.2);
    }
  }
}
</style>