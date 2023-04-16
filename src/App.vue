<template>
  <div id="app">
    <PageHeader />
    <PageNavigation />
    <router-view />
  </div>
</template>
<script>
import PageHeader from "@/components/PageViewComponents/PageHeader.vue";
import PageNavigation from "@/components/PageViewComponents/PageNavigation.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageNavigation,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

@media (max-width: 770px) {
  #app {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
