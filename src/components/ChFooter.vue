<template>
  <div class="footer-section">
    <ChButton color="#FFFFFF">
      <template #left>
        <img src="../assets/git.png" height="48" width="50" />
      </template>
      <ChText textColor="#3F3F3F"> Create issue </ChText>
    </ChButton>
    <ChButton color="#FFFFFF">
      <template #left>
        <img src="../assets/git.png" height="48" width="50" />
      </template>
      <ChText textColor="#3F3F3F"> Create language request </ChText>
    </ChButton>
  </div>
</template>

<script>
import ChButton from "./base/ChButton.vue";
import ChText from "./base/ChText.vue";

export default {
  components: {
    ChButton,
    ChText,
  },
};
</script>

<style lang="scss" scoped>
.footer-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
}

button {
  border: 2px solid #3f3f3f;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 6px;
}

p {
  font-weight: bold;
  font-size: 18px;
}
</style>