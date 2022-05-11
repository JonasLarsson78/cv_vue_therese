<template>
  <div :style="`width: ${width}px`">
    <img
      class="avatar"
      :style="`borderRadius: ${borderRadius}`"
      src="../../assets/profile_img2.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    width: {
      type: Number,
      required: true,
      default: null,
    },
    radius: {
      type:Boolean,
      required: false,
      default: false,
    }
  },

  computed: {
    borderRadius() {
      if (this.radius) {
        const radius = this.width / 2;
        const radiusStr = radius.toString() + "px";
        return radiusStr;
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 100%;
  height: 100%;
}
</style>
