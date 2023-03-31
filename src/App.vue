<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap");
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
@media (max-width: 770px) {
  #app {
    display: flex;
    justify-content: center;
  }
}
</style>
