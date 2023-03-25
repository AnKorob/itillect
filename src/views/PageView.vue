<template>
  <div class="page-view">
    <PageHeader></PageHeader>
    <PageBlock></PageBlock>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageBlock from "@/components/PageBlock.vue";

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
  padding-left: 30px;
  padding-right: 30px;
}
</style>
