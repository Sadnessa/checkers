<template>
  <div class="section">
    <div class="text-wrapper">
      <ChText large>How to use</ChText>
      <ChText textColor="#979797">
        After <a href="https://t.me/gamecheckersbot">/start</a> command in
        <a href="https://t.me/gamecheckersbot">@GameCheckersBot</a> you can call bot by typing its username
        and a query in the text input field in any chat.
      </ChText>
    </div>
    <div class="image-wrapper">
      <img src="../assets/checks-phone-render.png"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;
  margin: 100px 0px;
}

.text-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #40b1e7;
    text-decoration: none;
  }

  p {
    max-width: 70%;
  }
}

img {
  width: 120%;
}
</style>