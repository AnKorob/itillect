<template>
  <div class="card-generator">
    Введите ИНН организации
    <div class="card-generator-finder">
      <el-input
        class="card-generator-finder-input"
        placeholder="Пример: 7723615168"
        v-model="companyInnComputed"
        type="number"
      />
      <el-button
        type="primary"
        :disabled="!isValid"
        @click="getCompanyByInn(companyInn)"
        >Найти</el-button
      >
    </div>
    <div class="company-card-info" v-if="searchCompany.info.length">
      <el-row
        class="company-card-info-block"
        v-for="field in searchCompany.info"
        :key="field.key"
        :gutter="40"
      >
        <el-col class="company-card-info-block-option" :span="6">{{
          field.label
        }}</el-col>
        <el-col class="company-card-info-block-value" :span="18">{{
          field.value
        }}</el-col>
      </el-row>
      <el-button type="primary" @click="createCard">
        Все верно, создать карточку
      </el-button>
    </div>
    <div class="company-card-info" v-else>
      <p>Мы найдем реквизиты организациий и ИП в ЕГРЮЛ или ЕГРИП.</p>
      <p>В ИНН организации 10 цифр или 12 цифр для ИП.</p>
      <p>ИНН можно найти в свидетельстве о регистрации организации</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "CardGenerator",
  data: () => ({
    companyInn: "",
    isValid: false,
  }),
  computed: {
    ...mapState(["searchCompany"]),
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
      getCompanyById: "getCompanyById",
    }),
    ...mapMutations({
      setCompanyTab: "SET_COMPANY_TAB",
    }),
    createCard() {
      this.setCompanyTab({
        title: this.searchCompany.title,
        hash: this.searchCompany.hash,
      });
      this.$router.push(`/bcard/${this.searchCompany.hash}`);
    },
    getCompanyByInn() {
      this.getCompanyById(this.companyInn);
    },
    checkInn() {
      console.log(this.companyInn);
      this.isValid = this.companyInn && /^\d{10,12}$/.test(this.companyInn);
    },
  },
};
</script>
<style lang="scss">
.el-input {
  height: 100% !important;
  &__inner {
    height: 100% !important;
  }
}
.card-generator {
  height: 100%;
  width: 100%;
  font-size: 48px;
  &-finder {
    display: flex;
    flex-direction: row;
    height: 56px;
    width: 100%;
    margin-bottom: 46px;
    margin-top: 32px;
    & > .el-button {
      border-radius: 0px 6px 6px 0px;
      font-weight: 600;
    }
    &-input {
      max-width: 600px;
      > input {
        border-radius: 6px 0px 0px 6px;
        font-size: 24px;
      }
    }
  }
}
// .action-button {
//   display: flex;
//   width: auto;
//   height: 32px;
//   padding: 18px;
//   font-weight: 600;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   background-color: #0a81ff;
//   justify-content: center;
//   align-items: center;
//   &--find {
//     cursor: pointer;
//     display: flex;
//     height: auto;
//     padding: 18px;
//     font-weight: 600;
//     color: #fff;
//     border: none;
//     border-top-right-radius: 6px;
//     border-bottom-right-radius: 6px;
//     cursor: pointer;
//     background-color: #0a81ff;
//     justify-content: center;
//     align-items: center;
//   }
// }

.company-card-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  & > p:first-child {
    margin-bottom: 20px;
  }
  & > p {
    color: #a9a9a9;
  }
  & > .el-button {
    margin-top: 10px;
    justify-content: flex-start;
    width: 300px;
    font-size: 16px;
    font-weight: 600;
  }

  &-block {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 16px;
    height: auto;
    display: flex;

    &-option {
      display: flex;
    }
    &-value {
      display: flex;
    }
  }
}
@media (max-width: 770px) {
  .el-input {
    height: 100% !important;
    margin-bottom: 24px;
    &__inner {
      height: 40px !important;
    }
  }
  .card-generator {
    font-size: 32px;
    &-finder {
      max-width: 100%;
      width: 100%;
      height: auto;
      flex-direction: column;
      margin-bottom: 48px;
    }
  }
  // .action-button--find {
  //   border-radius: 6px;
  // }
  .company-card-info-block {
    align-items: flex-start;
  }
}
</style>
