<template>
  <div class="educationContanier">
    <img class="educationImg" src="../assets/svg/utbilding.svg" alt="logo" />
    <div class="educationHeader">Utbildning</div>
    <hr />
    <div>
      <span v-for="(ed, index) in data.items" :key="index">
        <table class="educationTables" border="0">
          <thead>
            <tr>
              <th>Datum:</th>
              <th>Namn:</th>
              <th>Skola:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tdDatum">{{ ed.rightSide }}</td>
              <td class="tdTitle">{{ ed.title }}</td>
              <td>{{ ed.authority }}</td>
            </tr>
            <tr v-if="ed.authorityWebSite">
              <td colspan="3">
                <img
                  class="educationImgLink"
                  src="../assets/svg/home.svg"
                  alt="logo"
                />
                <a
                  class="edLink"
                  :href="`${ed.authorityWebSite}`"
                  target="_blank"
                  >Hemsida</a
                >
              </td>
            </tr>
            <tr v-if="ed.certificate">
              <td colspan="3">
                <img
                  class="educationImgLink"
                  src="../assets/svg/utbilding.svg"
                  alt="logo"
                />
                <a class="edLink" :href="`${ed.certificate}`" target="_blank"
                  >Examensbevis</a
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
  name: 'Education',
  components: { TagInfo },
  data() {
    return {
      data: {},
    };
  },
  created() {
    const find = this.$store.getters.getData.sections.find((x) => x.title === 'Utbildning');
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

.educationContanier {
  position: relative;

  height: 200px;
  width: calc(100% - 25px);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
  color: black;
}
.educationHeader {
  position: relative;
  top: -17px;
  left: 50px;
  color: var(--baseColor);
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}
.educationImg {
  position: relative;
  top: 10px;
  left: -320px;
  width: 30px;
  filter: var(--baseColor);
}
.educationImgLink {
  position: relative;
  top: 3px;
  width: 20px;
}
.educationTables {
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
  color: var(--baseColor);
}
.edLink:hover {
  font-weight: bold;
}
.tagContainer {
  display: flex;
  flex-wrap: wrap;
}

@media only screen and (max-device-width: 901px) {
  .educationContanier {
    width: 330px;
  }
  .educationImg {
    left: -150px;
  }
}
</style>
