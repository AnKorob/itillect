<template>
  <div class="page-header">
    <div class="page-header-content">
      <div class="page-header-content-logo">
        <span v-html="logo" @click="goStart" />
      </div>
      <div class="page-header-content-link">
        <a class="side-link" target="_blank" href="https://doces.ru/">
          Счета и акты онлайн
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo";

export default {
  name: "PageHeader",
  data() {
    return {
      logo,
    };
  },

  methods: {
    goStart() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
.page-header {
  display: flex;
  flex-direction: column;
  width: 1110px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding-top: 24px;

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
    }

    &-link {
      display: flex;
      height: 100%;
      width: auto;
      cursor: pointer;
      align-items: center;
      font-weight: 600;
      & > .side-link {
        color: black;
        text-decoration: dashed underline;
      }
    }
  }
}

@media (max-width: 770px) {
  .page-header {
    &-content {
      flex-direction: column;
      &-logo {
        height: 36px;
        width: 36px;
      }
      &-link {
        display: none;
      }
    }
  }
  .link {
    display: flex;
    justify-content: flex-start;
    width: 320px;
  }
}
</style>
