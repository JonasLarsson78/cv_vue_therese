<template>
  <div class="bollContainer">
    <div class="boll"></div>
    <hr class="bollHr" />
    <div class="boll"></div>
  </div>
</template>

<script>
export default {
  name: 'BollHr',
};
</script>

<style scoped>
.bollContainer {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
.boll {
  min-width: 10px;
  min-height: 10px;
  background-color: white;
  border-radius: 5px;
}
.bollHr {
  position: relative;
  top: 3px;
  width: 140px;
  height: 1px;
  border-color: white;
}
@media only screen and (max-device-width: 901px) {
  .bollHr {
    width: 80%;
  }
}
</style>
