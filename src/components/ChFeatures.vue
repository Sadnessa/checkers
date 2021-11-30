<template>
  <div class="features-section">
    <div class="title">
      <ChText large>Features</ChText>
    </div>
    <div class="card-wrapper">
      <ChCard v-for="card in cards" :key="card.text">
        <template #img>
          <img :src="(card.imgUrl)" heigh="120" width="120" />
        </template>
        <ChText textColor="black">
            {{card.text}}
        </ChText>
      </ChCard>
    </div>
  </div>
</template>

<script>
import ChText from "./base/ChText.vue"
import ChCard from "./base/ChCard.vue";

export default {
    data() {
        return {
            cards: [
                {
                    imgUrl: require("../assets/sobaka.png"),
                    text: "Play in any chat"
                },
                {
                    imgUrl: require("../assets/lang.png"),
                    text: "Multi language"
                },
                {
                    imgUrl: require("../assets/cake.png"),
                    text: "Game skins"
                },
                {
                    imgUrl: require("../assets/free.png"),
                    text: "No ads"
                },
                {
                    imgUrl: require("../assets/rules.png"),
                    text: "Custom rules"
                },
                {
                    imgUrl: require("../assets/git.png"),
                    text: "OpenSource"
                },
            ]
        }
    },
    components: {
        ChText,
        ChCard,
    }
}
</script>

<style lang="scss" scoped>
.features-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0px;
}
.card-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content: center;

    p {
        font-weight: bold;
        font-size: 18px;
    }
}
</style>