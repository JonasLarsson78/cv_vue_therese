<template>
  <span>
    <div class="searchContainer">
      <input
        placeholder="Sök tag info..."
        class="searchInput"
        v-model="inputData"
        type="text"
      />
      <span v-if="searchData.length">
        <div v-for="(data, index) in searchData" :key="index">
          <div @click="clickOpenInfo" class="searchBack">{{ data.items }}</div>
        </div>
      </span>
      <span v-else>
        <div v-show="inputData !== ''" class="searchBack">None</div>
      </span>
    </div>
    <div class="modal" v-if="openModal">
      {{ modalData.info }}
      <br /><i class="from">Källa: {{ modalData.from }}</i>
      <div @click="closeModal" class="close">Stäng</div>
    </div>
  </span>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      info: {},
      inputData: '',
      searchData: [],
      openModal: false,
      modalData: {},
    };
  },
  watch: {
    inputData: function() {
      if (this.inputData) {
        const filter = this.info.filter((x) =>
          x.items.toLowerCase().includes(this.inputData.toLowerCase()),
        );
        this.searchData = filter;
      } else {
        this.searchData = [];
      }
    },
  },
  created() {
    this.info = this.$store.getters.getTagInfo
  },
  methods: {
    clickOpenInfo(e) {
      const find = this.searchData.find((x) => x.items === e.target.innerHTML);
      this.modalData = find;
      this.openModal = true;
      this.searchData = [];
      this.inputData = '';
    },
    closeModal() {
      this.openModal = false;
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  text-align: left;
  padding: 10px;
  box-shadow: 10px 10px 5px 0px #000000bf;
  z-index: 1000;
}
.searchContainer {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10000;
}
.searchBack {
  background-color: var(--baseColor);
  height: 23px;
  cursor: pointer;
}
.searchInput {
  width: 150px;
  height: 23px;
  font-size: 18px;
  padding: 3px;
  border: 3px solid var(--baseColor);
  outline: none;
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
  background-color: #1881a1;
}
.from {
  font-size: 12px;
}
@media only screen and (max-device-width: 901px) {
  .searchContainer {
    display: none;
  }
}
</style>
