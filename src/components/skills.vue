<template>
  <div class="skillContainer">
    <div class="skillText">{{ this.str }}</div>
    <div class="skill">
      <div :title="this.procent" :class="`skillFill ${this.str.toLowerCase()}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    str: {
      type: String,
      default: ''
    },
    procent: String,
  },
  created() {
    let root = document.documentElement;
    root.style.setProperty(`--procent${this.str.toLowerCase()}`, this.procent);
  },
};
</script>

<style scoped>
.skillContainer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  padding-right: 10px;
  flex-direction: column;
}
.skill {
  position: relative;
  top: 2px;
  width: 100px;
  height: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin-left: 45px;
}
.skillText {
  font-size: 14px;
}
.skillFill {
  height: 100%;
  width: 0%;
  background-color: white;
  border-radius: 5px;
  border: none;
}
/*------------------ Skills --------------*/
.ansvarstagande {
  width: var(--procentansvarstagande);
}
.initiativtagande {
  width: var(--procentinitiativtagande);
}
.samarbetsvillig {
  width: var(--procentsamarbetsvillig);
}
.kundkontakt {
  width: var(--procentkundkontakt);
}
/* --------------------------------------- */
</style>
