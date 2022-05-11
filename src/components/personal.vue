<template>
  <div class="personalContainer">
    <div>
      <img
        class="personalImg"
        src="../assets/jonas.jpg"
        @mouseenter="hoverImg(true)"
      />
      <div class="personalName">
        {{ personal.personalData.name.toUpperCase() }}
      </div>
      <div class="personalTitle">
        {{ personal.personalData.title }}
      </div>
    </div>
    <hr class="personalHr" />
    <div>
      <div class="personalHeader">KONTAKTA MIG</div>
      <BollHr />
      <div
        v-for="(contact, index) in personal.personalData.contacts"
        :key="index"
      >
        <div class="iconsText">
          <span v-if="contact.type === 'location'">
            <div>
              <img class="icons" src="../assets/svg/location.svg" />
            </div>
            <a
              class="iconTextLink"
              :href="
                `${contact.value.url}+${contact.value.address}+${contact.value.nr}+${contact.value.zip}+${contact.value.city}`
              "
              target="_blank"
            >
              {{ contact.value.city }}
            </a>
          </span>
          <span v-else-if="contact.type === 'phone'">
            <div>
              <img class="icons" src="../assets/svg/phone.svg" />
            </div>
            <a class="iconTextLink" :href="`tel:${contact.value}`">{{
              contact.value
            }}</a>
          </span>

          <span v-else-if="contact.type === 'email'">
            <div>
              <img class="icons" src="../assets/svg/mail.svg" />
            </div>
            <a
              class="iconTextLink"
              :href="`mailto:${contact.value}`"
              target="_blank"
            >
              {{ contact.value }}
            </a>
          </span>

          <span v-else-if="contact.type === 'github'">
            <div>
              <img class="icons" src="../assets/svg/github.svg" />
            </div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
            >
              {{ contact.value }}
            </a>
          </span>
          <span v-else-if="contact.type === 'webpage'">
            <div>
              <img class="icons" src="../assets/svg/home2.svg" />
            </div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
            >
              {{ contact.value }}
            </a>
          </span>
          <span v-else>
            <div>
              <img class="icons" src="../assets/svg/linkedin.svg" />
            </div>
            <a
              class="iconTextLink"
              :href="`http://${contact.value}`"
              target="_blank"
            >
              {{ contact.value }}
            </a>
          </span>
        </div>
      </div>
    </div>
    <div class="mobil">
      <div class="personalHeader">OM MIG</div>
      <BollHr />
      <div title="Klicka här!" @click="hoverTextT" class="omMigText">
        {{ personal.sections[0].content }}
      </div>
      <div v-if="omMig" class="omMigTextLarge">
        {{ personal.sections[0].content }}
        <br />
        <button class="closeBtn" @click="hoverTextF">
          Stäng
        </button>
      </div>
    </div>
    <div class="mobil">
      <div class="personalHeader">FÄRDIGHETER</div>
      <BollHr />
      <!-- Skills -->
      <Skills v-for="(d, index) in skills" :key="index" :str="d.str" :name="d.name" :procent="d.procent" />
      <!-- End skills -->
      <hr class="personalHr" />
      <div class="version">{{ content.version }}</div>
      <div class="end"></div>
    </div>
  </div>
</template>

<script>
import BollHr from "./bollHr";
import Skills from "./skills";
export default {
  name: "Personal",
  components: {
    BollHr,
    Skills,
    },

  data() {
    return {
      personal: {},
      imgHover: false,
      omMig: false,
      content: null,
      skills: []
    };
  },
  created() {
    this.personal = this.$store.getters.getData;
    this.content = this.$store.getters.getText;
  },
  mounted() {
       const findSkills = this.personal.sections.find(obj => {
          if (obj.skills) return obj
        })
    this.skills = findSkills.skills
  },
  methods: {
    hoverImg(bool) {
      this.imgHover = bool;
    },
    hoverTextT() {
      this.omMig = true;
    },
    hoverTextF() {
      this.omMig = false;
    },
  },
};
</script>

<style scoped>
.icons {
  width: 25px;
  filter: invert(1);
}

.iconsText {
  font-size: 10px;
  color: white;
  margin-left: 5px;
  margin-bottom: 10px;
  text-decoration: none;
}
.iconTextLink {
  text-decoration: none;
  color: white;
}
.iconTextLink:hover {
  font-weight: bold;
}
.personalContainer {
  width: 250px;
  min-height: 500px;
  background-color: #115e75;
  border-radius: 5px;
}
.personalImg {
  width: 145px;
  border-radius: 70px;
  margin-top: 25px;
}
.personalName {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}
.personalTitle {
  font-size: 14px;
  color: white;
  margin-top: 2px;
}
.personalHeader {
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
}
.personalHr {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 160px;
}
.omMigText {
  text-align: left;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
}
.omMigTextLarge {
  width: 500px;
  height: 180px;
  position: absolute;
  top: 660px;
  left: 18px;
  background-color: white;
  color: black;
  text-align: left;
  padding: 10px;
  padding-top: 40px;
  z-index: 1000;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
}
.closeBtn {
  position: relative;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  background-color: #115e75;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none;
}
.closeBtn:hover {
  background-color: #1881a1;
}
.end {
  padding-bottom: 20px;
}
.version {
  position: relative;
  top: 14px;
  font-size: 12px;
}
@media only screen and (max-device-width: 901px) {
  .personalContainer {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 150px;
    width: 95%;
  }

  .personalImg {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-top: 20px;
  }
  .personalName {
    font-size: 14px;
    font-weight: bold;
    color: white;
    margin-top: 10px;
  }
  .personalHeader {
    color: white;
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
  }
}
</style>
