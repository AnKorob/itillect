<template>
  <div class="page-header-nav">
    <router-link
      class="page-header-nav-link"
      :to="{ name: 'home' }"
      v-if="$route?.params.hash"
    >
      Сгенерировать новую карточку
    </router-link>
    <el-tabs
      v-model="tabHash"
      v-if="companiesTabs.length"
      @tab-click="$router.push(`/bcard/${tabHash}`)"
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
    ...mapState(["searchCompany", "companiesTabs"]),
  },
  watch: {
    companiesTabs(tabs) {
      // при добавлении автоматом выбираем последний
      this.tabHash = tabs.at(-1)?.hash;
    },
  },
  methods: {
    ...mapMutations({
      setCompanyTabs: "SET_COMPANY_TABS",
    }),
  },
  mounted() {
    this.setCompanyTabs();
    this.$flashMessage();
  },
  beforeDestroy() {
    const tabs = JSON.stringify(this.companiesTabs);
    localStorage.setItem("usedTabs", tabs);
  },
};
</script>
<style lang="scss">
.page-header-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;
  width: 1110px;
  height: 34px;
  color: #959595;

  &-link {
    text-decoration: none;
    color: #959595;
    cursor: pointer;
    width: 1110px;
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
