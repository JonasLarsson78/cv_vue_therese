<template>
  <div class="allSkillsContanier">
    <img class="allSkillsImg" src="../assets/svg/allskills.svg" alt="logo" />
    <div class="allSkillsHeader">Alla Färdigheter</div>
    <hr class="hr" />
    <TagInfo :tags="items" />
  </div>
</template>

<script>
import TagInfo from './taginfo';
export default {
  name: 'AllSkills',
  components: { TagInfo },
  data() {
    return {
      items: [],
    };
  },
  created() {
    const find = this.$store.getters.getData.sections.find((x) => x.title === 'Färdigheter');
    this.items = find.items;
  },
};
</script>

<style scoped>
.allSkillsContanier {
  position: relative;
  height: 100px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
  margin-bottom: 125px;
}
.allSkillsHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: var(--baseColor);
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.allSkillsImg {
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
  .allSkillsImg {
    left: -150px;
  }
}
</style>
