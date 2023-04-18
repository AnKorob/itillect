<template>
  <div class="order">
    <div class="order-pattern">
      <div class="order-pattern-header">
        <div class="content-header">Шаблон шапки договора</div>
        <el-button
          type="primary"
          class="copy--visible"
          @click="copyText(message)"
          >Копировать</el-button
        >
      </div>
      <div class="order-pattern-content">{{ message }}</div>
      <div class="order-pattern-block">
        <div class="order-pattern-block-header">
          <div class="content-header">Реквизиты</div>
          <el-button
            type="primary"
            class="copy--visible"
            @click="copyText(agent)"
            >Копировать</el-button
          >
        </div>
        <div class="order-pattern-block-card" :class="{ reverse: isCustomer }">
          <div class="order-pattern-block-card-agent">
            <div class="block-header" v-if="isCompany">
              {{ oppositeCompany[1].value }}
            </div>
            <div v-if="isCompany">
              <br />
              <el-row>
                <el-col>{{ oppositeCompany[6].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>ИНН:{{ oppositeCompany[3].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>КПП:{{ oppositeCompany[4].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>ОГРН:{{ oppositeCompany[5].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col
                  >р/с {{ oppositeBankAccount }} в {{ oppositeBank[0].value }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>к/с{{ oppositeBank[1].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>БИК: {{ oppositeBank[2].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>Генеральный Директор</el-col>
              </el-row>
              <el-row>
                <el-col>{{ oppositeCompany[1].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                {{
                  oppositeCompany[2].value
                    .split(/\s+/)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
            </div>
            <div v-else>
              <div class="block-header">
                {{ passport.name }}
              </div>
              <br />
              <el-row>
                <el-col>Паспорт:{{ passport.number }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>Выдан:{{ passport.authority }}</el-col>
              </el-row>
              <el-row>
                <el-col>Дата выдачи:{{ passport.date }}</el-col>
              </el-row>
              <el-row>
                <el-col>Код подразделения:{{ passport.subdivision }}</el-col>
              </el-row>
              <br /><br /><br /><br /><br />
              <el-row>
                <el-col>Частное лицо</el-col>
              </el-row>
              <br /><br />
              <el-row>
                {{
                  passport.name
                    .split(/\s+/)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
            </div>
          </div>
          <div class="order-pattern-block-card-agent">
            <div class="block-header">{{ searchCompany.info[1].value }}</div>
            <div>
              <br />
              <el-row>
                <el-col>{{ searchCompany.info[6].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>ИНН:{{ searchCompany.info[3].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>КПП:{{ searchCompany.info[4].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>ОГРН:{{ searchCompany.info[5].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col
                  >р/с {{ this.bankAccount }} в {{ companyBank[0].value }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>к/с {{ companyBank[1].value }}</el-col>
              </el-row>
              <el-row>
                <el-col>БИК:{{ companyBank[2].value }}</el-col>
              </el-row>
              <br />
              <el-row><el-col>Генеральный Директор</el-col></el-row>
              <el-row>
                <el-col>{{ searchCompany.info[1].value }}</el-col>
              </el-row>
              <br />
              <el-row>
                {{
                  searchCompany.info[2].value
                    .split(/\s+/)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RequisitesSettings
      v-model="isCustomer"
      v-bind:oppositeAccount="oppositeBankAccount"
      @reverse="(e) => (this.isCustomer = e)"
      @find-agent="(e) => (this.isCompany = e)"
      @passport="(e) => (this.passport = e)"
      @opposite-account="(e) => (this.oppositeBankAccount = e)"
    />
  </div>
</template>
<script>
import RequisitesSettings from "./RequisitesSettings.vue";
import { mapState } from "vuex";

export default {
  name: "OrderPage",
  components: {
    RequisitesSettings,
  },
  data: () => ({
    isCustomer: true,
    isCompany: true,
    passport: "",
    oppositeBankAccount: "",
    oppositeBik: "",
    message: "",
  }),
  props: {
    value: String,
    bankAccount: String,
  },
  computed: {
    ...mapState([
      "searchCompany",
      "oppositeCompany",
      "oppositeBank",
      "companyBank",
    ]),

    // agent() {
    //   return document.getElementsByClassName("order-pattern-block-card")[0];
    // },
  },
  updated() {
    if (!this.isCustomer) {
      if (!this.isCompany) {
        this.message = `${
          this.searchCompany.info[1].value
        }, именуемое в дальнейшем "Заказчик", ${
          "в лице генерального директора " + this.searchCompany.info[2].value
        } с одной
      стороны,и ${
        "частное лицо" +
        " " +
        this.passport.name +
        " " +
        this.passport.number +
        " " +
        "выдан" +
        " " +
        this.passport.authority +
        " " +
        this.passport.date +
        " " +
        "код подразделения:" +
        " " +
        this.passport.subdivision
      }, именуемое в дальнейшем "Исполнитель", с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      } else {
        this.message = `${
          this.searchCompany.info[1].value
        }, именуемое в дальнейшем "Заказчик",${
          "в лице генерального директора " +
          this.searchCompany.info[2].value +
          ","
        } с одной
      стороны,и ${
        this.oppositeCompany[1].value
      }, именуемое в дальнейшем "Исполнитель",
       ${
         "в лице генерального директора " + this.oppositeCompany[2].value
       }, с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      }
    } else {
      if (!this.isCompany) {
        this.message = `${
          "Частное лицо" +
          " " +
          this.passport.name +
          " " +
          this.passport.number +
          " " +
          "выдан" +
          " " +
          this.passport.authority +
          " " +
          this.passport.date +
          " " +
          "код подразделения:" +
          " " +
          this.passport.subdivision
        }, именуемое в дальнейшем "Заказчик", с одной
      стороны,и ${
        this.searchCompany.info[1].value
      }, именуемое в дальнейшем "Исполнитель",
      ${
        this.searchCompany.info[2].value
      }, с другой стороны, совместно именуемые «Стороны», а по
      отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      } else {
        this.message = `${
          this.oppositeCompany[1].value
        }, именуемое в дальнейшем "Заказчик",${
          "в лице генерального директора " + this.oppositeCompany[2].value + ","
        } с одной
      стороны,и ${
        this.searchCompany.info[1].value
      }, именуемое в дальнейшем "Исполнитель",
       ${
         "в лице генерального директора " + this.searchCompany.info[2].value
       }, с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      }
    }
  },
  mounted() {
    if (!this.isCustomer) {
      if (!this.isCompany) {
        this.message = `${
          this.searchCompany.info[1].value
        }, именуемое в дальнейшем "Заказчик", ${
          "в лице генерального директора " + this.searchCompany.info[2].value
        } с одной
      стороны,и ${
        "частное лицо" +
        " " +
        this.passport.name +
        " " +
        this.passport.number +
        " " +
        "выдан" +
        " " +
        this.passport.authority +
        " " +
        this.passport.date +
        " " +
        "код подразделения:" +
        " " +
        this.passport.subdivision
      }, именуемое в дальнейшем "Исполнитель", с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      } else {
        this.message = `${
          this.searchCompany.info[1].value
        }, именуемое в дальнейшем "Заказчик",${
          "в лице генерального директора " +
          this.searchCompany.info[2].value +
          ","
        } с одной
      стороны,и ${
        this.oppositeCompany[1].value
      }, именуемое в дальнейшем "Исполнитель",
       ${
         "в лице генерального директора " + this.oppositeCompany[2].value
       }, с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      }
    } else {
      if (!this.isCompany) {
        this.message = `${
          "Частное лицо" +
          " " +
          this.passport.name +
          " " +
          this.passport.number +
          " " +
          "выдан" +
          " " +
          this.passport.authority +
          " " +
          this.passport.date +
          " " +
          "код подразделения:" +
          " " +
          this.passport.subdivision
        }, именуемое в дальнейшем "Заказчик", с одной
      стороны,и ${
        this.searchCompany.info[1].value
      }, именуемое в дальнейшем "Исполнитель",
      ${
        this.searchCompany.info[2].value
      }, с другой стороны, совместно именуемые «Стороны», а по
      отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      } else {
        this.message = `${
          this.oppositeCompany[1].value
        }, именуемое в дальнейшем "Заказчик",${
          "в лице генерального директора " + this.oppositeCompany[2].value + ","
        } с одной
      стороны,и ${
        this.searchCompany.info[1].value
      }, именуемое в дальнейшем "Исполнитель",
       ${
         "в лице генерального директора " + this.searchCompany.info[2].value
       }, с другой стороны, совместно именуемые «Стороны», а по
       отдельности «Сторона», заключили настоящий Договор о нижеследующем:`;
      }
    }
  },

  methods: {
    copyText(text) {
      this.$message("Скопировано");
      navigator.clipboard.writeText(text);
    },
  },
};
</script>
<style lang="scss">
.order {
  height: 800px;
  display: flex;
  flex-direction: row;
  &-pattern {
    display: flex;
    flex-direction: column;
    &-header {
      display: flex;
      width: 100%;
      flex-direction: row;
      margin-bottom: 24px;
      justify-content: space-between;
    }
    &-content {
      display: flex;
      font-weight: 300;
      font-size: 15px;
      margin-bottom: 48px;
      text-align: justify;
    }
    &-block {
      display: flex;
      flex-direction: column;
      &-header {
        display: flex;

        flex-direction: row;
        margin-bottom: 24px;
        justify-content: space-between;
      }
      &-card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &-agent {
          text-align: justify;
          display: flex;
          flex-direction: column;
          width: calc(50% - 20px);
          font-weight: 300;
          font-size: 14px;
          border-bottom: 1px solid #000;
        }
      }
    }
  }
}
.content-header {
  font-weight: 300;
  font-size: 24px;
}
.block-header {
  font-weight: 600;
  font-size: 15px;
}
.copy--visible {
  padding: 0 24px !important;
  height: 24px;

  &:hover {
    background-color: #03274e !important;
    border: 1px solid #03274e !important;
  }
}
.reverse {
  display: flex;
  flex-direction: row-reverse;
}
.order-pattern-block-card-agent > div:nth-child(2n) > .el-row:last-of-type {
  float: right;
}
@media (max-width: 770px) {
  .order {
    display: flex;
    flex-direction: column-reverse;
    &-pattern {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      &-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        justify-content: space-between;
        align-items: center;
      }
      &-content {
        display: flex;
        font-weight: 300;
        font-size: 14px;
        margin-bottom: 48px;
      }
      &-block {
        display: flex;
        flex-direction: column;
        &-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
          justify-content: space-between;
          align-items: center;
        }
        &-card--toggle {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: flex-start;
          & > .order-pattern-block-card-agent {
            display: flex;
            flex-direction: column;
            font-weight: 300;
            font-size: 14px;
            border-bottom: 1px solid #000;
          }
        }
        &-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;

          &-agent {
            display: flex;
            flex-direction: column;
            font-weight: 300;
            font-size: 14px;
            border-bottom: 1px solid #000;
          }
        }
      }
    }
  }
  .content-header {
    font-weight: 300;
    font-size: 24px;
  }
  .block-header {
    font-weight: 600;
    font-size: 15px;
  }
  .copy--visible {
    width: 300px;
  }
}
</style>
