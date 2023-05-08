<template>
  <div class="settings">
    <h3 class="settings-header">Настройки</h3>
    <div class="settings-sides">
      <div class="settings-sides-one">
        <div class="settings-sides-one-header">
          {{ this.clientCompany.short_name }}
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
          <el-autocomplete
            v-model="oppositeInn"
            type="number"
            :fetch-suggestions="searchInn"
            :trigger-on-focus="false"
            placeholder="Пример: 7723615168"
            @select="onSelectInn"
          />
          <el-tag v-if="innTag" closable @close="onCloseInnTag">
            {{ innTag }}
          </el-tag>
        </el-form-item>
        <el-form-item class="settings-form-field" label="БИК">
          <el-autocomplete
            v-model="oppositeBik"
            type="number"
            :fetch-suggestions="searchBik"
            :trigger-on-focus="false"
            placeholder="Пример: 044525593"
            @select="onSelectBik"
          />
          <el-tag v-if="bikTag" closable @close="onCloseBikTag">
            {{ bikTag }}
          </el-tag>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Р/с">
          <el-input
            placeholder="Пример: 40702810000000152259"
            v-model="oppositeBankAccount"
            type="number"
            @input="setOppositeAccount"
          />
        </el-form-item>
      </el-form>
      <el-form class="settings-form-individual" v-else>
        <el-form-item class="settings-form-field" label="ФИО">
          <el-input
            placeholder="Пример: Иванов Иван Иванович"
            v-model="passport.name"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Серия и номер">
          <el-input
            v-model="passport.number"
            placeholder="Пример: 6666 000001"
            type="number"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Дата выдачи">
          <el-date-picker
            v-model="passport.date"
            type="date"
            format="dd.MM.yyyy"
            value-format="dd.MM.yyyy"
            placeholder="Выберите дату"
            :pickerOptions="{
              firstDayOfWeek: 1,
            }"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Кем выдан">
          <el-input
            placeholder="Пример: Отделом ОУФМС России по гор.Москве"
            v-model="passport.authority"
          >
          </el-input>
        </el-form-item>
        <el-form-item class="settings-form-field" label="Код подразделения">
          <el-input
            placeholder="Пример: 100-500"
            v-model="passport.subdivision"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="settings-comment">
      * Мы не сохраняем данные контрагентов. После перезагрузки страницы, данные
      о контрагентах обнулятся.
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "RequisitesSettings",
  components: {},
  data: () => ({
    isCompany: true,
    isCustomer: true,
    oppositeBik: "",
    oppositeInn: "",
    oppositeBankAccount: "",
    innTag: "",
    bikTag: "",
    passport: {
      name: "",
      number: "",
      authority: "",
      date: "",
      subdivision: "",
      type: "PERSON",
    },
  }),
  computed: {
    ...mapState(["oppositeCompany", "oppositeBank", "clientCompany"]),
  },
  watch: {
    passport: {
      handler: function (p) {
        this.$emit("update-passport", p);
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions({
      getOppositeCompanyByInn: "getOppositeCompanyByInn",
      getOppositeBankByBik: "getOppositeBankByBik",
    }),
    ...mapMutations({
      setOppositeBankAccount: "SET_OPPOSITE_BANK_ACCOUNT",
      setOppositeCompany: "SET_OPPOSITE_COMPANY",
      clearOpposite: "CLEAR_OPPOSITE_COMPANY",
      clearOppositeBank: "CLEAR_OPPOSITE_BANK",
      setOppositeBank: "SET_OPPOSITE_BANK",
    }),
    reverse() {
      this.$emit("reverse", this.isCustomer);
    },
    findAgent() {
      this.$emit("find-agent", this.isCompany);
    },
    setOppositeAccount() {
      this.setOppositeBankAccount(this.oppositeBankAccount);
    },
    onSelectInn(company) {
      this.setOppositeCompany(company.data);
      this.innTag = company.value;
    },
    searchInn(inn, cb) {
      if (!/^\d{10,12}$/.test(inn)) return cb([]);
      this.getOppositeCompanyByInn(inn).then((response) => {
        cb([{ value: response.value, data: response }]);
      });
    },
    onCloseInnTag() {
      this.innTag = "";
      this.clearOpposite();
    },
    onSelectBik(company) {
      this.setOppositeBank(company.data);
      this.bikTag = company.value;
    },
    searchBik(bik, cb) {
      if (!/^\d{9}$/.test(bik)) return cb([]);
      this.getOppositeBankByBik(bik).then((response) => {
        cb([{ value: response.value, data: response }]);
      });
    },
    onCloseBikTag() {
      this.bikTag = "";
      this.clearOppositeBank();
    },
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

  & > div {
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

  .el-input,
  .el-autocomplete,
  .el-tag {
    width: 100%;
  }

  .el-tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
}
</style>
