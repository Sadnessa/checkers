<template>
  <div class="section">
    <div class="text-wrapper">
      <ChText large>How to use</ChText>
      <ChText textColor="#979797">After /start command in @GameCheckersBot you can call bot by typing its username and a query in the text input field 
in any chat. </ChText>
    </div>
    <div class="image-wrapper">
    <img src="../assets/phone_image.png" />
  </div>
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
.section {
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
}

.text-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        max-width: 60%;
    }
}
</style>