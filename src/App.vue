<template>
  <ChContainer>
    <ChHeader></ChHeader>
    <ChHowToUse></ChHowToUse>
    <ChSkins></ChSkins>
    <ChFeatures></ChFeatures>
    <ChSuppSection></ChSuppSection>
    <ChFooter></ChFooter>
  </ChContainer>
</template>

<script>
import ChContainer from "./components/base/ChContainer.vue"
import ChHeader from "./components/ChHeader.vue"
import ChHowToUse from "./components/ChHowToUse.vue"
import ChSkins from "./components/ChSkins.vue"
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
    ChSkins,
  },
};
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&family=Rubik:wght@400;500&display=swap');
 * {
   font-family: 'Roboto', sans-serif;
   }
   
#app {
  display: flex;
  justify-content: center;
}

body {
  margin: 0px;
}
</style>
