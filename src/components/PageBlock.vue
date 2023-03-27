<template>
  <div class="page-block">
    <Transition name="intro">
      <CardIntro v-if="showIntro" @toggle="() => (this.showIntro = false)" />
      <CardGenerator v-else @toggleback="() => (this.showIntro = true)" />
    </Transition>
  </div>
</template>
<script>
import CardGenerator from "@/components/CardGenerator.vue";
import CardIntro from "@/components/CardIntro.vue";
export default {
  name: "PageBlock",
  components: {
    CardGenerator,
    CardIntro,
  },
  data: () => ({
    showIntro: true,
    showGen: false,
  }),
};
</script>
<style lang="scss">
.intro-leave-to {
  transform: translateX(-70%);
}
.intro-leave {
  transform: translateX(50%);
}
.intro-leave-active {
  transition: all 1s linear;
}
.intro-enter {
  transform: translateX(70%);
}
.intro-enter-active {
  transition: all 1s 0.2s linear;
}
.intro-enter-to {
  transform: translateX(0%);
}
.page-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
