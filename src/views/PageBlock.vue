<template>
  <div class="page-block">
    <Transition name="intro">
      <CardIntro
        v-if="showIntro"
        @toggle="() => (this.showGenerator = true) && (this.showIntro = false)"
      />
    </Transition>
    <Transition name="generator">
      <CardGenerator
        v-if="showGenerator"
        @togglefurther="
          () => (this.showPage = true) && (this.showGenerator = false)
        "
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
    showGenerator: false,
    showPage: false,
  }),
  computed: {},
};
</script>
<style lang="scss">
.card-enter {
  transform: translateX(-100%);
  &-active {
    position: absolute;
    transition: all 0.3s linear;
  }
}
.intro-leave {
  transform: translateX(100%);
  &-to {
    transform: translateX(-100%);
  }
  &-active {
    position: absolute;
    transition: all 0.3s linear;
  }
}
.intro-enter {
  transform: translateX(-100%);
  &-active {
    position: absolute;
    transition: all 0.3s linear;
  }
  &-to {
    transform: translateX(0%);
  }
}
.generator-leave {
  &-to {
    transform: translateX(100%);
  }
  &-active {
    position: absolute;
    transition: all 0.3s linear;
  }
}
.generator-enter {
  transform: translateX(100%);
  &-active {
    position: absolute;
    transition: all 0.3s linear;
  }
}
.page-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding-top: 48px;
}
@media (max-width: 770px) {
  .page-block {
    height: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    padding: 24px 8px 32px;
  }
}
</style>
