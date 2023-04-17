<template>
  <div class="page-block">
    <Transition name="page-block">
      <component :is="component" @toggle="showIntro = !showIntro" />
    </Transition>
  </div>
</template>
<script>
import CardGenerator from "@/components/generator-page/CardGenerator.vue";
import CardIntro from "@/components/generator-page/CardIntro.vue";

export default {
  name: "PageBlock",
  components: {
    CardGenerator,
    CardIntro,
  },
  data: () => ({
    showIntro: true,
  }),
  computed: {
    component() {
      return this.showIntro ? CardIntro : CardGenerator;
    },
  },
};
</script>
<style lang="scss" scoped>
.page-block {
  width: 100%;
  margin-top: 48px;
}
.page-block-leave {
  transform: translateX(100%);
  &-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  &-active {
    position: absolute;
    transition: all 0.3s ease-out;
  }
}
.page-block-enter {
  transform: translateX(100%);
  &-active {
    position: absolute;
    transition: all 0.3s ease-in;
  }
}
</style>
