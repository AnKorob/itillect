<template>
  <div class="settings">
    <div class="content-header">Настройки</div>
    <!-- <el-radio-group v-model="isCustomer">
      <el-radio-button label="true">Исполнитель</el-radio-button>
      <el-radio-button label="false">Заказчик</el-radio-button>
    </el-radio-group> -->
    <div class="settings-header">{{ this.searchCompany.info[1].value }}</div>
    <el-switch
      class="settings-header-switcher"
      v-model="isCustomer"
      active-color="#e8e8e8"
      inactive-color="#e8e8e8"
      active-text="Заказчик"
      inactive-text="Исполнитель"
      @change="reverse"
    >
    </el-switch>
    <!-- <el-radio-group v-model="isIndividual">
      <el-radio-button label="true">Юр. лицо или ИП</el-radio-button>
      <el-radio-button label="false">Физ. лицо</el-radio-button>
    </el-radio-group> -->
    <div class="settings-header">Контрагент</div>
    <el-switch
      class="settings-header-switcher"
      v-model="isIndividual"
      active-color="#e8e8e8"
      inactive-color="#e8e8e8"
      active-text="Физ. лицо"
      inactive-text="Юр. лицо или ИП"
      @change="findagent"
    >
    </el-switch>

    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">ИНН</label>
      <el-input
        placeholder="Please input"
        v-model="oppositeInn"
        type="number"
        @focus="oppositeInn = ''"
        v-if="!isIndividual"
        minlength="10"
        maxlength="12"
        @change="getOppositeCompany"
      ></el-input>
    </div>
    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">БИК</label>
      <el-input
        placeholder="Please input"
        v-model="oppositeBik"
        type="number"
        minlength="9"
        maxlength="9"
        @focus="oppositeBik = ''"
        v-if="!isIndividual"
        @input="getOppositeBank"
      ></el-input>
    </div>
    <div class="settings-field" v-if="!isIndividual">
      <label class="settings-field-label">Р/с</label>
      <el-input
        placeholder="Please input"
        v-model="oppositeBankAccount"
        type="number"
        minlength="20"
        maxlength="20"
        @input="getOppositeAccount"
        @focus="oppositeBankAccount = ''"
        v-if="!isIndividual"
      >
        {{ oppositeBankAccount }}</el-input
      >
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">ФИО</label>
      <el-input
        placeholder="Please input"
        v-model="person.fio"
        v-if="isIndividual"
        @focus="person.fio = ''"
      ></el-input>
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Серия и Номер</label>
      <el-input
        placeholder="Please input"
        v-model="person.passport"
        @focus="person.passport = ''"
        v-if="isIndividual"
      ></el-input>
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Дата Выдачи</label>
      <el-input
        placeholder="Please input"
        v-model="person.whenPassport"
        @focus="person.whenPassport = ''"
        v-if="isIndividual"
      ></el-input>
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Кем Выдан</label>
      <el-input
        placeholder="Please input"
        v-model="person.whomPassport"
        @focus="person.whomPassport = ''"
        v-if="isIndividual"
      ></el-input>
    </div>
    <div class="settings-field" v-if="isIndividual">
      <label class="settings-field-label">Код Подразделения</label>
      <el-input
        placeholder="Please input"
        v-model="person.idPassport"
        @focus="person.idPassport = ''"
        v-if="isIndividual"
      ></el-input>
    </div>
    <br />
    <div class="settings-comment">
      *Мы не сохраняем данные контрагентов.После перезагрузки страниц,данные о
      контрагентах обнуляться.
    </div>
  </div>
</template>
<!--/^\d{3}[-]\d{3}$.test(person.idPassport) рега на код подразделения-->
<!--/^\d{4}[ ]\d{6}$.test(person.passport) серия номер паспорта-->
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "RequisitesSettings",
  components: {},
  props: {
    value: Boolean,
    oppositeAccount: String,
  },
  data: () => ({
    // isCustomer: "false",
    // isIndividual: "false",
    isIndividual: false,
    isCustomer: false,
    oppositeBik: "",
    oppositeInn: "",
    oppositeBankAccount: "",
    person: {
      fio: "Иванов Иван Иванович",
      passport: "6666 000001",
      whomPassport: "Отделом ОУФМС России по гор.Москве",
      whenPassport: "10.11.2012",
      idPassport: "100-500",
    },
  }),
  mounted() {
    this.isCustomer = this.value;
  },
  computed: {
    ...mapState(["oppositeCompany", "oppositeBank", "searchCompany"]),
  },
  updated() {
    this.$emit("person", this.person);
  },
  methods: {
    ...mapActions({
      getOppositeCompanyById: "getOppositeCompanyById",
      getOppositeBankByBik: "getOppositeBankByBik",
    }),
    getOppositeBank() {
      if (/^\d{9}$/.test(this.oppositeBik))
        this.getOppositeBankByBik(this.oppositeBik);
    },
    getOppositeCompany() {
      if (/^\d{10,12}$/.test(this.oppositeInn))
        this.getOppositeCompanyById(this.oppositeInn);
    },
    reverse() {
      this.$emit("reverse", this.isCustomer);
    },
    findagent() {
      this.$emit("findagent", this.isIndividual);
    },
    getOppositeAccount() {
      this.$emit("oppositeaccount", this.oppositeBankAccount);
    },
    // checkInn() {
    //   this.isValid = this.companyInn && /^\d{10,12}$/.test(this.companyInn);
    // },
  },
};
</script>
<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  width: 332px;
  padding-left: 32px;
  height: 500px;
  justify-content: space-between;
  &-header {
    &-switcher {
      display: flex;
      justify-content: space-between;
    }
  }
  &-field {
    display: flex;
    flex-direction: column;
    width: 300px;
    &-value {
      width: 300px;
      height: 28px;
      border: 1px solid #666;
      color: #666;
      border-radius: 5px;
      &:focus {
        border: 1px solid #0a81ff;
      }
    }
    &-label {
      height: 28px;
      font-size: 14px;
      font-size: 600;
    }
  }
  &-comment {
    width: 100%;
    margin-top: 32px;
    padding-top: 24px;
    text-align: left;
    font-weight: 300;
    border-top: 1px solid #666;
  }
}
@media (max-width: 770px) {
  .settings {
    width: 300px;
    padding-left: 0;
    border-top: 1px solid #000;
    &-comment {
      margin-bottom: 12px;
    }
  }
}
</style>
