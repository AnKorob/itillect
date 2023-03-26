<template>
  <div class="page-header">
    <div class="page-header-logo">
      <img src="@/assets/logo.svg" />
    </div>
    <div class="page-header-link">Счета и акты онлайн</div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style lang="scss">
.page-header {
  display: flex;
  width: 100%;
  max-height: 72px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  &-logo {
    margin: 10px;
    height: 36px;
    width: 36px;
    cursor: pointer;
    > img {
      height: 36px;
      width: 36px;
    }
  }
  &-link {
    display: flex;
    height: 100%;
    width: auto;
    text-decoration: dashed underline;
    cursor: pointer;
    align-items: center;
    font-weight: 600;
  }
}
</style>
