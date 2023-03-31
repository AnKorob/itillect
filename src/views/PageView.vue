<template>
  <div class="page-view">
    <PageHeader></PageHeader>
    <PageBlock></PageBlock>
  </div>
</template>

<script>
import PageHeader from "@/components/PageViewComponents/PageHeader.vue";
import PageBlock from "@/components/PageViewComponents/PageBlock.vue";

export default {
  name: "PageView",
  components: {
    PageHeader,
    PageBlock,
  },
};
</script>
<style lang="scss">
.page-view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  padding: 18px 96px;
}
@media (max-width: 770px) {
  .page-view {
    padding: 0px;
    align-items: center;
  }
}
</style>
