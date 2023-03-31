<template>
  <div class="base-switch">
    <label class="switch">
      <input type="checkbox" v-model="toggle" @change="onChange" />
      <span class="slider">
        <span class="role">{{ firstOption }}</span>
        <span class="role">{{ secondOption }}</span>
      </span>
    </label>
  </div>
</template>
<script>
export default {
  name: "BaseSwitch",
  data: () => ({
    toggle: true,
    firstOption: "",
    secondOption: "",
  }),
  props: {
    value: Boolean,
  },
  methods: {
    onChange() {
      this.$emit("input", this.toggle);
    },
  },
  mounted() {
    this.toggle = this.value;
  },
};
</script>
<style lang="scss">
.base-switch {
  width: 100%;
}
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 40px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
  position: absolute;
  width: 300px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e8e8e8;
  transition: 0.4s;
  border-radius: 5px;
  align-content: center;
  & > span {
    align-self: center;
  }
  &:before {
    position: absolute;
    content: "";
    height: 27px;
    width: 140px;
    border-radius: 5px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    opacity: 0.6;
    transition: 0.4s;
  }
}
input:checked + .slider {
  background-color: #e8e8e8;
}
input:focus + .slider {
  box-shadow: 0 0 1px #e8e8e8;
}
input:checked + .slider:before {
  transform: translateX(150px);
}
</style>
