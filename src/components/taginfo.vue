<template>
  <span>
    <div class="tagContainer">
      <div
        class="tag"
        v-show="tags.length"
        v-for="(tag, index) in tags"
        :key="index"
        @click="findTag(tag)"
        :title="`Vad är ${tag} ?`"
      >
        <span class="tagText">{{ tag }}</span>
      </div>
    </div>
    <div v-if="open" class="infoTag">
      {{ this.text.info }} <br /><i class="from">Källa: {{ this.text.from }}</i>
      <div @click="close" class="close">Stäng</div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'TagInfo',
  props: {
    tags: Array,
  },
  data() {
    return {
      text: {},
      open: false,
    };
  },

  methods: {
    findTag(str) {
      const find = this.$store.getters.getTagInfo.find((x) => x.items === str);
      if (find) {
        this.text = find;
        this.open = true;
      } else {
        console.log('Ingen Info...');
      }
    },
    close() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
.tagContainer {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
}
.tag {
  height: 30px;
  background-color: var(--baseColor);
  width: 150px;
  border-radius: 15px;
  margin: 5px;
}
.tag:hover {
  background-color: var(--baseColor);
}
.tagText {
  position: relative;
  top: 5px;
  text-align: center;
  color: white;
}
.infoTag {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
  min-height: 100px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 100;
  text-align: left;
  box-shadow: 10px 10px 5px 0px #000000bf;
}
.close {
  cursor: pointer;
  margin-top: 10px;
  background-color: var(--baseColor);
  color: white;
  text-align: center;
  padding: 3px;
  border-radius: 5px;
}
.close:hover {
  background-color: var(--hoverColor);
}
.from {
  font-size: 12px;
}
@media only screen and (max-device-width: 901px) {
  .infoTag {
    width: 300px;
  }
}
</style>
