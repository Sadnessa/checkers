<template>
  <ChContainer>
    <ChHeader></ChHeader>
    <ChHowToUse></ChHowToUse>
    <ChFeatures></ChFeatures>
    <ChSuppSection></ChSuppSection>
    <ChFooter></ChFooter>
  </ChContainer>
</template>

<script>
import ChContainer from "./components/base/ChContainer.vue"
import ChHeader from "./components/ChHeader.vue"
import ChHowToUse from "./components/ChHowToUse.vue"
import ChFeatures from "./components/ChFeatures.vue"
import ChSuppSection from "./components/ChSuppSection.vue"
import ChFooter from "./components/ChFooter.vue"

export default {
  name: "App",
  components: {
    ChContainer,
    ChHeader, 
    ChHowToUse,
    ChFeatures,
    ChSuppSection,
    ChFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  background: blue;
}

body {
  margin: 0px;
}
</style>
