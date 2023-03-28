<template>
  <div class="page-header">
    <div class="page-header-content">
      <div class="page-header-content-logo">
        <img src="@/assets/logo.svg" />
      </div>
      <div class="page-header-content-link">Счета и акты онлайн</div>
    </div>
    <div class="page-header-nav">
      <div>
        <router-link class="link" :to="{ name: 'home' }">
          Сгенерировать новую карточку
        </router-link>
      </div>
      <div>
        <router-link class="link">OOO </router-link>
      </div>
    </div>
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
  flex-direction: column;
  width: 100%;
  max-height: 72px;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 24px 30px 12px;
  &-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    width: 100%;
    height: 100%;
    color: #959595;
  }
  &-content {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &-logo {
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
}
.link {
  text-decoration: none;
  color: #959595;
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:hover {
    color: #000;
    cursor: pointer;
  }
}
</style>
