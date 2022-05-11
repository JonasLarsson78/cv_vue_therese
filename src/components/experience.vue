<template>
  <div class="experienceContanier">
    <img class="experienceImg" src="../assets/svg/experience.svg" alt="logo" />
    <div class="experienceHeader">Arbetslivserfarenhet</div>
    <hr />
    <div>
      <span v-for="(ed, index) in data.items" :key="index">
        <table class="experienceTables" border="0">
          <thead>
            <tr>
              <th>Datum:</th>
              <th>Befattning:</th>
              <th>Företag:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tdDatum">{{ ed.datesBetween }}</td>
              <td class="tdTitle">{{ ed.title }}</td>
              <td>{{ ed.company }}</td>
            </tr>
            <tr v-if="ed.description">
              <th class="desText" colspan="3">{{ ed.description }}</th>
            </tr>
            <tr v-if="ed.companyWebSite">
              <td colspan="3">
                <img
                  class="experienceImgLink"
                  src="../assets/svg/home.svg"
                  alt="logo"
                />
                <a class="edLink" :href="`${ed.companyWebSite}`" target="_blank"
                  >Hemsida</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <TagInfo :tags="ed.descriptionTags" />

        <hr />
      </span>
    </div>
  </div>
</template>

<script>
import TagInfo from './taginfo';
export default {
  name: 'Experience',
  components: { TagInfo },
  data() {
    return {
      data: {},
    };
  },
  created() {
    const find = this.$store.getters.getData.sections.find((x) => x.title === 'Arbetslivserfarenhet');
    this.data = find;
  },
};
</script>

<style scoped>
th {
  text-align: left;
}
td {
  text-align: left;
}
.desText {
  font-weight: normal;
}
.experienceContanier {
  position: relative;

  height: 400px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
}
.experienceHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: #115e75;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.experienceImg {
  position: relative;
  top: 10px;
  left: -320px;
  width: 26px;
  filter: #115e75;
}
.experienceImgLink {
  position: relative;
  top: 3px;
  width: 20px;
}
.experienceTables {
  width: 100%;
  padding: 5px;
}
.tdDatum {
  width: 150px;
}
.tdTitle {
  width: 200px;
  font-weight: bold;
}
.edLink {
  margin-left: 5px;
  text-decoration: none;
  color: #115e75;
}
.edLink:hover {
  font-weight: bold;
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
@media only screen and (max-device-width: 901px) {
  .experienceContanier {
    top: 170px;
  }
  .experienceImg {
    left: -150px;
  }
}
</style>
