<template>
  <div class="page-header">
    <div class="page-header-content">
      <div class="page-header-content-logo">
        <span v-html="logo" @click="goStart" />
      </div>
      <div class="page-header-content-link">Счета и акты онлайн</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import logo from "@/assets/logo";

export default {
  name: "PageHeader",
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapState(["searchCompany"]),
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

      & > img {
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
