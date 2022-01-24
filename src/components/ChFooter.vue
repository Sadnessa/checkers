<template>
  <div class="footer-section">
    <ChButton color="#3f3f3f" bordered>
      <template #left>
        <img src="../assets/git.png" height="48" width="50" />
      </template>
      <ChText textColor="#3F3F3F"> Create issue </ChText>
    </ChButton>
    <ChButton color="#3f3f3f" bordered>
      <template #left>
        <img src="../assets/git.png" height="48" width="50" />
      </template>
      <ChText textColor="#3F3F3F"> Create language request </ChText>
    </ChButton>
  </div>
</template>

<style lang="scss" scoped>
.footer-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
}

button {
  box-sizing: border-box;
  margin: 6px;
}

p {
  font-weight: bold;
  font-size: 18px;
}
</style>