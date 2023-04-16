<template>
  <div class="company-card">
    <div class="company-card-header">
      <div class="company-card-header-name">
        {{ searchCompany.info[1].value }}
      </div>
      <div class="company-card-header-button">
        <el-button class="type" plain>PDF</el-button>
        <el-button class="type" plain>DOCX</el-button>
        <el-button class="type" plain @click="openEmail">Email</el-button>
        <el-button class="type" plain @click="copyLink">Ссылка</el-button>
      </div>
    </div>
    <div class="company-card-info">
      <el-row
        class="company-card-info-block"
        v-for="field in searchCompany.info"
        :key="field.key"
      >
        <el-col :span="6" :offset="1" class="company-card-info-block-option">{{
          field.label
        }}</el-col>
        <el-col :span="14" class="company-card-info-block-value">{{
          field.value
        }}</el-col>
        <el-col :span="4"
          ><el-button type="primary" class="copy" @click="copyText(field.value)"
            >Копировать</el-button
          ></el-col
        >
      </el-row>

      <div class="company-card-info-header">Банковские реквизиты</div>
      <el-row class="company-card-info-block">
        <el-col :span="6" :offset="1" class="company-card-info-block-option"
          >СЧЕТ</el-col
        >
        <el-col :span="13" class="company-card-info-block-value">
          <el-input
            placeholder="Please input"
            v-model="bankAccount"
            minlength="20"
            maxlength="20"
            type="number"
            @change="setAccount"
            @focus="bankAccount = ''"
            >{{ bankAccount }}</el-input
          >
        </el-col>
        <el-col :span="4"
          ><el-button type="primary" class="copy" @click="copyText(bankAccount)"
            >Копировать</el-button
          ></el-col
        >
      </el-row>
      <el-row class="company-card-info-block">
        <el-col :span="6" :offset="1" class="company-card-info-block-option"
          >БИК</el-col
        >
        <el-col :span="13" class="company-card-info-block-value">
          <el-input
            placeholder="Please input"
            v-model="companyBik"
            type="number"
            minlength="9"
            maxlength="9"
            @focus="companyBik = ''"
            @input="getBank"
            >{{ companyBik }}</el-input
          >
        </el-col>
        <el-col :span="4"
          ><el-button type="primary" class="copy" @click="copyText(companyBik)"
            >Копировать</el-button
          ></el-col
        >
      </el-row>

      <el-row
        class="company-card-info-block"
        v-for="field in companyBank"
        :key="field.key"
      >
        <el-col :span="6" :offset="1" class="company-card-info-block-option">{{
          field.label
        }}</el-col>
        <el-col :span="13" class="company-card-info-block-value">{{
          field.value
        }}</el-col>
        <el-col :span="4"
          ><el-button type="primary" class="copy" @click="copyText(field.value)"
            >Копировать</el-button
          ></el-col
        >
      </el-row>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "CompanyCard",
  data: () => ({
    companyBik: "",
    bankAccount: "",
  }),
  props: {
    value: String,
  },
  methods: {
    ...mapActions({
      getBankByBik: "getBankByBik",
    }),
    copyLink() {
      navigator.clipboard.writeText(window.location.href);
    },
    copyText(text) {
      this.$message("Скопировано");
      navigator.clipboard.writeText(text);
    },
    openEmail() {
      this.$emit("open");
    },
    getBank() {
      if (/^\d{9}$/.test(this.companyBik)) this.getBankByBik(this.companyBik);
    },
    setAccount() {
      this.$emit("setaccount", this.bankAccount);
    },
  },
  computed: {
    ...mapState(["companyBank", "searchCompany", "companiesTabs"]),
  },
  mounted() {
    this.bankAccount = this.value;
    console.log(this.companiesTabs);
  },
};
</script>
<style lang="scss" scoped>
.company-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 38px;

  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 300;
    margin-bottom: 32px;

    &-name {
      display: flex;
      font-size: 48px;
      font-weight: 400;
    }

    &-button {
      display: flex;
      cursor: pointer;
    }
  }

  &-info {
    display: flex;
    height: 100%;
    flex-direction: column;

    &-header {
      font-size: 20px;
      margin-top: 32px;
      margin-bottom: 32px;
    }

    &-block {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-direction: row;
      height: 100%;
      font-size: 16px;
      text-align: justify;

      &:hover {
        background-color: #f5f5f5;
        .copy {
          padding: 0 24px;
          opacity: 1;
          width: 96px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            opacity: 1;
            padding: 4px 24px;
            transition: 0.1s;
            background-color: #03274e;
            border: 1px solid #03274e;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      & > .copy--visible {
        width: 48px;
      }

      // &:hover {
      //   background-color: #ccc;

      //   & > .copy {
      //     opacity: 1;
      //     width: 96px;
      //   }
      // }
      &-option {
        height: 100%;
        display: flex;
        color: #666666;
        justify-content: flex-start;
        align-items: center;
        text-align: justify;
        text-transform: uppercase;
      }
      &-value {
        display: flex;

        align-items: center;
        padding: 0 12px;
        text-align: justify;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
.copy {
  float: right;
  padding: 0 24px;
  opacity: 0;
  width: 96px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.type {
  padding: 0 24px !important;
  height: 32px;
  float: left;
  margin-bottom: 10px !important;
  &:first-of-type {
    margin-left: 10px;
  }
}
input {
  height: 22px;
}
@media (max-width: 770px) {
  .company-card {
    &-header {
      flex-direction: column-reverse;
      &-button {
        width: 100%;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
      }
    }
    &-info {
      &-block {
        position: relative;
        flex-direction: column;
        width: 100%;
        &-option,
        &-value {
          width: 100%;
          align-items: flex-start;
          padding: 0;
        }
      }
    }
  }
  .copy {
    position: absolute;
    width: 32px;
    height: 16px !important;
    font-size: 12px !important;
    margin: 0;
    top: 0px;
    right: 0px;
    &:hover {
      width: 32px;
      height: 16px !important;
      font-size: 12px !important;
      padding-top: 1px !important;
      margin: 0;
      top: 0px;
      right: 0px;
    }
  }
  .type {
    width: 120px;
  }
}
</style>
