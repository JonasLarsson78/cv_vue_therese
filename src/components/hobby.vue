<template>
  <div class="hobbyContanier">
    <img class="hobbyImg" src="../assets/svg/hobby.svg" alt="logo" />
    <div class="hobbysHeader">Hobbys & Intressen</div>
    <hr class="hr" />
    <div class="tagContainer">
      <div class="tag" v-for="(la, index) in hobbys.items" :key="index">
        <span class="tagText">{{ la }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hobby',
  data() {
    return {
      hobbys: {},
    };
  },
  created() {
    const find = this.$store.getters.getData.sections.find((x) => x.title === 'Hobbys & Intressen');
    this.hobbys = find;
  },
};
</script>

<style scoped>
.hobbyContanier {
  position: relative;
  height: 100px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
}
.hobbysHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: var(--baseColor);
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.hobbyImg {
  position: relative;
  top: 10px;
  left: -320px;
  width: 25px;
  filter: var(--baseColor);
}
.tagContainer {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  height: 30px;
  background-color: var(--baseColor);
  width: 150px;
  border-radius: 15px;
  margin: 5px;
}
.tagText {
  position: relative;
  top: 5px;
  text-align: center;
  color: white;
}
.hr {
  margin-bottom: 10px;
}
@media only screen and (max-device-width: 901px) {
  .hobbyContanier {
    top: 160px;
  }
  .hobbyImg {
    left: -150px;
  }
}
</style>
