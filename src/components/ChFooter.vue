<template>
  <div class="footer-section">
    <a href="https://github.com/m0ksem/GameCheckersBot/issues/new?assignees=&labels=bug&template=bug_report.md&title=">
      <ChButton color="#3f3f3f" bordered>
        <template #left>
          <img src="../assets/git.png" height="48" width="50" />
        </template>
        <ChText textColor="#3F3F3F"> Bug report </ChText>
      </ChButton>
    </a>
     <a href="https://github.com/m0ksem/GameCheckersBot/issues/new?assignees=&labels=&template=feature_request.md&title=">
      <ChButton color="#3f3f3f" bordered>
        <template #left>
          <img src="../assets/git.png" height="48" width="50" />
        </template>
        <ChText textColor="#3F3F3F"> Feature request </ChText>
      </ChButton>
    </a>
    <a href="https://github.com/m0ksem/GameCheckersBot/issues/new?assignees=&labels=language-request&template=language_request.md&title=">
      <ChButton color="#3f3f3f" bordered>
        <template #left>
          <img src="../assets/git.png" height="48" width="50" />
        </template>
        <ChText textColor="#3F3F3F"> Language request </ChText>
      </ChButton>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.footer-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;

  button {
    box-sizing: border-box;
    margin: 6px;
  }

  p {
    font-weight: bold;
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }
}
</style>