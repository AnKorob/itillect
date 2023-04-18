<template>
  <div class="settings">
    <h3 class="settings-header">Настройки</h3>
    <div class="settings-sides">
      <div class="settings-sides-one">
        <div class="settings-sides-one-header">
          {{ this.searchCompany.info[1].value }}
        </div>
        <el-radio-group v-model="isCustomer" @change="reverse">
          <el-radio-button :label="true">Исполнитель</el-radio-button>
          <el-radio-button :label="false">Заказчик</el-radio-button>
        </el-radio-group>
      </div>
      <div class="settings-sides-one">
        <div class="settings-sides-one-header">Контрагент</div>
        <el-radio-group v-model="isCompany" @change="findAgent">
          <el-radio-button :label="true">Юр. лицо</el-radio-button>
          <el-radio-button :label="false">Физ. лицо</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="settings-form">
      <el-form class="settings-form-entity" v-if="isCompany">
        <el-form-item class="settings-form-field" label="ИНН">
          <el-input
            placeholder="Пример: 7723615168"
            v-model="oppositeInn"
            type="number"
            @focus="oppositeInn = ''"
            minlength="10"
            maxlength="12"
            @change="getOppositeCompany"
          />
        </el-form-item>
        <el-form-item class="settings-form-field" label="БИК">
          <el-input
            placeholder="Пример: 044525593"
            v-model="oppositeBik"
            type="number"
            minlength="9"
            maxlength="9"
            @focus="oppositeBik = ''"
            @input="getOppositeBank"
          />
        </el-form-item>
        <el-form-item class="settings-form-field" label="Р/с">
          <el-input
            placeholder="Пример: 40702810000000152259"
            v-model="oppositeBankAccount"
            type="number"
            minlength="20"
            maxlength="20"
            @input="getOppositeAccount"
            @focus="oppositeBankAccount = ''"
          />
        </el-form-item>
      </el-form>
      <el-form class="settings-form-individual" v-else>
        <el-form-item class="settings-form-field" label="ФИО">
          <el-input
            placeholder="Пример: Иванов Иван Иванович"
            v-model="passport.name"
          ></el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Серия и номер">
          <el-input
            placeholder="Пример: 6666 000001"
            v-model="passport.number"
          ></el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Дата выдачи">
          <el-input placeholder="10.11.2012" v-model="passport.date"></el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Кем выдан">
          <el-input
            placeholder="Пример: Отделом ОУФМС России по гор.Москве"
            v-model="passport.authority"
          ></el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Код подразделения">
          <el-input
            placeholder="Пример: 100-500"
            v-model="passport.subdivision"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="settings-comment">
      * Мы не сохраняем данные контрагентов. После перезагрузки страниц, данные
      о контрагентах обнуляться.
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
    isCompany: true,
    isCustomer: true,
    oppositeBik: "",
    oppositeInn: "",
    oppositeBankAccount: "",
    passport: {
      name: "",
      number: "",
      authority: "",
      date: "",
      subdivision: "",
    },
  }),
  mounted() {
    this.isCustomer = this.value;
  },
  computed: {
    ...mapState(["oppositeCompany", "oppositeBank", "searchCompany"]),
  },
  updated() {
    this.$emit("passport", this.passport);
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
    findAgent() {
      this.$emit("find-agent", this.isCompany);
    },
    getOppositeAccount() {
      this.$emit("opposite-account", this.oppositeBankAccount);
    },
    // checkInn() {
    //   this.isValid = this.companyInn && /^\d{10,12}$/.test(this.companyInn);
    // },
  },
};
</script>
<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  width: 332px;
  padding-left: 32px;
  flex-shrink: 0;

  & > * {
    margin-top: 30px;
  }

  &-header {
    font-weight: 400;
  }

  &-sides {
    &-one {
      &-header {
        font-weight: 600;
        margin-bottom: 4px;
      }

      & + & {
        margin-top: 12px;
      }
    }
  }

  &-comment {
    text-align: left;
    font-weight: 300;
    border-top: 1px solid #e8e8e8;
    font-size: 0.875em;
    color: #666;
    padding-top: 24px;
  }
}

.settings::v-deep {
  .el-radio-group {
    width: 100%;
    & > .el-radio-button {
      width: 50%;

      & > .el-radio-button__inner {
        width: 100%;
      }
    }
  }

  .el-form-item {
    margin-bottom: 0;

    &__label {
      font-weight: 600;
      line-height: 30px;
    }
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
