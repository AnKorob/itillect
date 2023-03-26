<template>
  <div class="page-block">
    <Transition name="intro">
      <CardIntro
        v-if="showIntro"
        @toggle="() => (this.showGen = true) && (this.showIntro = false)"
      />
    </Transition>
    <Transition name="generator">
      <CardGenerator
        v-if="showGen"
        @toggleback="() => (this.showIntro = true) && (this.showGen = false)"
      />
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
.intro-leave-from {
  transform: translateX(0);
}
.intro-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.intro-leave-active {
  transition: all 2s ease;
}
.intro-enter-from {
  transform: translateX(-100%);
}
.intro-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.intro-enter-active {
  transition: all 2s ease;
}
.generator-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.generator-leave-to {
  transform: translateX(100%);
}
.generator-leave-active {
  transition: all 2s ease;
}
.generator-enter-from {
  transform: translateX(100%);
}
.generator-enter-to {
  opacity: 1;
  transform: translateX(50%);
}
.generator-enter-active {
  transition: all 6s ease;
}
.page-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
</style>
