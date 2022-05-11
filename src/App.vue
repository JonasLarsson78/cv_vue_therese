<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
/* Skill Procent */
:root {
  --procentansvarstagande: 0%;
  --procentinitiativtagande: 0%;
  --procentsamarbetsvillig: 0%;
  --procentkundkontakt: 0%;
}

* {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}
body {
  background-color: black;
  background-image: url(./assets/bright-squares.png);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.mobil {
  display: block;
}
@media only screen and (max-device-width: 901px) {
  .mobil {
    display: none;
  }
}
</style>
