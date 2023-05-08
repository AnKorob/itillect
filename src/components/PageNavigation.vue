<template>
  <div
    :class="[
      'page-header-nav',
      {
        'page-header-nav-one': !$route.params.hash,
      },
    ]"
  >
    <router-link
      class="page-header-nav-link"
      :to="{ name: 'home' }"
      v-if="$route.params.hash"
    >
      Сгенерировать новую карточку
    </router-link>
    <el-tabs
      v-model="tabHash"
      v-if="companiesTabs.length"
      @tab-click="changeRoute"
    >
      <el-tab-pane
        v-for="tab in companiesTabs"
        :key="tab.hash"
        :label="tab.title"
        :name="tab.hash"
      />
    </el-tabs>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PageNavigation",
  data: () => ({
    tabHash: "",
  }),
  computed: {
    ...mapState(["companiesTabs"]),
  },
  watch: {
    companiesTabs() {
      this.tabHash = this.$route.params.hash;
    },
    "$route.params": {
      handler: function () {
        if (!this.$route.params?.hash) this.tabHash = "";
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations({
      setCompanyTabs: "SET_COMPANY_TABS",
    }),
    changeRoute() {
      this.$router.push(`/bcard/${this.tabHash}`);
    },
  },
  mounted() {
    this.setCompanyTabs();
  },
};
</script>
<style lang="scss">
.page-header-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 1110px;
  height: 34px;
  color: #959595;

  &-one {
    justify-content: flex-end;
  }

  & > .el-tabs {
    display: flex;
    justify-items: flex-end;
  }

  &-link {
    text-decoration: none;
    color: #959595;
    cursor: pointer;
    display: flex;

    width: auto;
    height: 100%;

    &:hover {
      color: #000;
      cursor: pointer;
    }
  }
}
@media (max-width: 770px) {
  .page-header-nav {
    align-items: center;
    background-color: #ebebeb;
  }
}
</style>
