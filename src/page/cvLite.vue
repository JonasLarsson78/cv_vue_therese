<template>
  <div class="container">
    <div class="row">
      <div>
        <Avatar :width="100" radius />
      </div>
      <div class="item">Test</div>
    </div>
    <div class="row">
      <div>
        Tetskdskksks
      </div>
      <div class="item">
        TestTestTestTestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTest TestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTestTestTestTestTest
        TestTestTestTestTestTestTestTestTest TestTestTestTestTestTest
      </div>
    </div>
    <div class="row">
      <div>
        Tetskdskksks
      </div>
      <div class="item">Test</div>
    </div>
    <div class="row">
      <div>
        Tetskdskksks
      </div>
      <div class="item">Test</div>
    </div>
  </div>
</template>

<script>
import Avatar from "../components/cvLite/avatar";
export default {
  name: "CvLite",
  components: {
    Avatar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 900px;
  height: 95%;
  /* border: 1px solid red; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
}
.row {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.item {
  position: relative;
  margin-left: 50px;
  width: 700px;
  background-color: white;
  border-radius: 50px;
  color: #115e75;
  margin-bottom: 30px;
  box-shadow: 10px 10px 5px 0px #7e7e7e46;
  border: 5px solid #115e75;
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
