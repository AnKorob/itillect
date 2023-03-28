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
        @toggleback="
          () => (this.showIntro = true) && (this.showGenerator = false)
        "
        @moveto="() => (this.showPage = true) && (this.showGenerator = false)"
      />
    </Transition>
    <Transition>
      <CardPage v-if="showPage" />
    </Transition>
  </div>
</template>
<script>
import CardGenerator from "@/components/CardGenerator.vue";
import CardIntro from "@/components/CardIntro.vue";
import CardPage from "@/components/CardPage.vue";
export default {
  name: "PageBlock",
  components: {
    CardGenerator,
    CardIntro,
    CardPage,
  },
  data: () => ({
    showIntro: true,
    showGenerator: false,
    showPage: false,
  }),
  mounted() {/* eslint-disable */
    fetch("https://itillect.ru/bcard/?action=get-inn-service&inn=500917005528")
    .then((r) => r.json()).then((r) => console.log(r));
  }
};
</script>
<style lang="scss">
.intro-leave-to {
  transform: translateX(-120%);
}
.intro-leave {
  transform: translateX(100%);
}
.intro-leave-active {
  position: absolute;
  transition: all 1s linear;
}
.intro-enter {
  transform: translateX(-120%);
}
.intro-enter-active {
  position: absolute;
  transition: all 1s linear;
}
.intro-enter-to {
  transform: translateX(0%);
}
.generator-leave-to {
  transform: translateX(120%);
}
// .generator-leave {
//   transform: translateX(50%);
// }
.generator-leave-active {
  position: absolute;
  transition: all 1s linear;
}
.generator-enter {
  transform: translateX(120%);
}
.generator-enter-active {
  position: absolute;
  transition: all 2s linear;
}
// .generator-enter-to {
//   transform: translateX(0%);
// }
.page-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 48px 30px 24px;
}
</style>
