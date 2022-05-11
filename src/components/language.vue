<template>
  <div class="langContanier">
    <img class="langImg" src="../assets/svg/lang.svg" alt="logo" />
    <div class="langHeader">Språk</div>
    <hr class="hr" />
    <TagInfo :tags="lang" />
  </div>
</template>

<script>
import TagInfo from './taginfo';
export default {
  name: 'Language',
  components: { TagInfo },
  data() {
    return {
      lang: [],
    };
  },
  created() {
    const find = this.$store.getters.getData.sections.find((x) => x.title === 'Språk');
    this.lang = find.items;
  },
};
</script>

<style scoped>
.langContanier {
  position: relative;
  height: 100px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
}
.langHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: #115e75;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.langImg {
  position: relative;
  top: 10px;
  left: -320px;
  width: 28px;
  filter: #115e75;
}
.tagContainer {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  height: 30px;
  background-color: #115e75;
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
  .langImg {
    left: -150px;
  }
}
</style>
