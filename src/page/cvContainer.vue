<template>
  <span>
    <Search v-if="false" />
    <span v-if="!this.next">
      <div class="cvContainer">
        <Personal />
        <div class="item">
          <Education />
          <Experience />
        </div>
        <div @click="nextPage(true)" class="next">
          {{ content.next }}
          <span
            ><img class="arrowImgNext" src="../assets/svg/arrow.svg" alt="logo"
          /></span>
        </div>
        <div class="footerLink">
          {{ content.place }}
          <a
            class="footerLinkText"
            href="https://github.com/JonasLarsson78/cv_vue"
            target="_blank"
            >{{ content.github }}</a
          >
        </div>
        <div class="footerText">{{ content.copy || "" }}</div>
      </div>
    </span>
    <span v-else>
      <div :class="next ? 'cvContainer2' : 'cvContainer'">
        <Personal />
        <div class="item">
          <Language />
          <AllSkills />
          <Hobby />
          <References />
        </div>

        <div @click="nextPage(false)" class="next">
          <img
            class="arrowImgPrev"
            src="../assets/svg/arrow.svg"
            alt="logo"
          />{{ content.back }}
          <span></span>
        </div>
        <div class="footerLink">
          {{ content.place }}
          <a
            class="footerLinkText"
            href="https://github.com/JonasLarsson78/cv_vue"
            target="_blank"
            >{{ content.github }}</a
          >
        </div>
        <div class="footerText">{{ content.copy || "" }}</div>
      </div>
    </span>
  </span>
</template>

<script>
import Personal from "../components/personal"
import Education from "../components/education"
import Experience from "../components/experience"
import Language from "../components/language"
import AllSkills from "../components/all_skills"
import Hobby from "../components/hobby"
import References from "../components/references"
import Search from "../components/search"
import Data from "../data"
export default {
  name: "Cv",
  components: {
    Personal,
    Education,
    Experience,
    Language,
    AllSkills,
    Hobby,
    References,
    Search,
  },
  data() {
    return {
      next: false,
      content: {},
    }
  },
  created() {
    this.$store.commit("setData", Data.data)
    this.$store.commit("setText", Data.text)
    this.$store.commit("setTagInfo", Data.tagInfo)
    this.content = Data.text
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    nextPage(bool) {
      this.next = bool
      this.scrollToTop()
    },
  },
}
</script>

<style scoped>
.cvContainer {
  display: flex;
  position: relative;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  width: 920px;
  min-height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
  padding: 10px;
  padding-bottom: 180px;
  margin-bottom: 40px;
}
.cvContainer2 {
  display: flex;
  position: relative;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  width: 920px;
  min-height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px #000000bf;
  padding: 10px;
  padding-bottom: 180px;
  margin-bottom: 40px;
}
.item {
  width: 100%;
}
.footerText {
  position: absolute;
  font-size: 12px;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  z-index: 100;
}
.footerLink {
  position: absolute;
  font-size: 12px;
  bottom: 23px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  z-index: 100;
}
.footerLinkText {
  text-decoration: none;
  color: #115e75;
  font-weight: bold;
}
.next {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  color: #115e75;
  cursor: pointer;
}
.next:hover {
  font-weight: bold;
}
.arrowImgNext {
  position: relative;
  top: 5px;
  left: 10px;
  width: 20px;
  transform: rotate(180deg);
  filter: #115e75;
}
.arrowImgPrev {
  position: relative;
  top: 5px;
  left: -10px;
  width: 20px;
  filter: #115e75;
}
@media only screen and (max-device-width: 901px) {
  .cvContainer {
    width: 360px;
    flex-direction: column;
    height: 2250px;
  }
  .cvContainer2 {
    width: 360px;
    flex-direction: column;
    height: 1850px;
  }
  .footerLink {
    bottom: 35px;
  }
}
</style>
