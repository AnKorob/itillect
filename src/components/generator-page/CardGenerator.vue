<template>
  <div
    class="card-generator"
    v-loading="isLoading"
    element-loading-text="Загрузка данных..."
    element-loading-background="rgb(247 248 249 / 80%)"
  >
    <h3 class="card-generator-title">Введите ИНН организации</h3>
    <div class="card-generator-finder">
      <el-input
        class="card-generator-finder-input"
        placeholder="Пример: 7723615168"
        v-model="companyInnComputed"
        type="number"
      />
      <el-button
        type="primary"
        class="card-generator-finder-search"
        :disabled="!isValid"
        @click="getCompanyByINN"
      >
        Найти
      </el-button>
    </div>
    <div
      class="card-generator-info"
      v-if="!isNewClient && getClientCompanyTableRows.length"
    >
      <InfoBlock :generator="true" />
      <el-button
        type="primary"
        class="card-generator-info-action"
        @click="createCard"
      >
        Все верно, создать карточку
      </el-button>
    </div>
    <div class="card-generator-hint" v-else>
      <p>Мы найдем реквизиты организациий и ИП в ЕГРЮЛ или ЕГРИП.</p>
      <p>В ИНН организации 10 цифр или 12 цифр для ИП.</p>
      <p>ИНН можно найти в свидетельстве о регистрации организации</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import InfoBlock from "@/components/InfoBlock.vue";
export default {
  name: "CardGenerator",
  data: () => ({
    companyInn: "",
    isValid: false,
    isLoading: false,
    isNewClient: true,
  }),
  components: { InfoBlock },
  computed: {
    ...mapState(["clientCompany"]),
    ...mapGetters(["getClientCompanyTableRows"]),
    companyInnComputed: {
      get() {
        return this.companyInn;
      },
      set(v) {
        this.isValid = v && /^\d{10,12}$/.test(v);
        this.companyInn = v;
      },
    },
  },

  methods: {
    ...mapActions({
      getCompanyByInn: "getCompanyByInn",
    }),
    ...mapMutations({
      setCompanyTab: "SET_COMPANY_TAB",
    }),
    createCard() {
      this.setCompanyTab({
        title: this.clientCompany.short_name,
        hash: this.clientCompany.hash,
      });
      this.$router.push(`/bcard/${this.clientCompany.hash}`);
    },
    getCompanyByINN() {
      this.isLoading = true;
      this.getCompanyByInn(this.companyInn)
        .then(() => {
          this.companyInnComputed = "";
        })
        .catch((e) => {
          this.$message({
            message: e,
            type: "error",
          });
        })
        .finally(() => {
          this.isLoading = false;
          this.isNewClient = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-generator {
  height: 100%;
  width: 100%;
  font-size: 16px;

  &-title {
    font-size: 44px;
    font-weight: 300;
  }
  &-finder {
    display: flex;
    flex-direction: row;
    height: 56px;
    width: 100%;
    margin-bottom: 46px;
    margin-top: 32px;

    &-search {
      border-radius: 0px 6px 6px 0px;
      font-weight: 600;
      width: 150px;
    }

    &-input {
      max-width: 600px;
    }
  }

  &-hint {
    color: #a9a9a9;

    & > p:first-child {
      margin-bottom: 20px;
    }
  }

  &-info {
    & > &-action {
      margin-top: 30px;
      justify-content: flex-start;
      width: 300px;
      font-size: 16px;
      font-weight: 600;
    }
  }
}

.card-generator::v-deep {
  input {
    height: 56px;
    border-radius: 6px 0px 0px 6px;
    font-size: 24px;
  }
}
</style>
