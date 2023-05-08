<template>
  <div class="order">
    <div class="order-pattern">
      <div class="order-pattern-header">
        <div class="content-header">Шаблон шапки договора</div>
        <el-button
          type="primary"
          class="copy--visible"
          @click="copyText(generatedTemplate)"
          >Копировать</el-button
        >
      </div>
      <div class="order-pattern-content">
        <span v-html="generatedTemplate"></span>
      </div>
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
              {{ oppositeCompany.short_name }}
            </div>
            <div v-if="isCompany">
              <br />
              <el-row>
                <el-col>{{ oppositeCompany.address }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>ИНН:{{ oppositeCompany.inn }}</el-col>
              </el-row>
              <el-row>
                <el-col v-if="oppositeCompany.type === 'LEGAL'">
                  КПП:{{ oppositeCompany.kpp }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>ОГРН:{{ oppositeCompany.ogrn }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>
                  р/с {{ oppositeBankAccount }} в {{ oppositeBank.name }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>к/с{{ oppositeBank.correspondent_account }}</el-col>
              </el-row>
              <el-row>
                <el-col>БИК: {{ oppositeBank.bik }}</el-col>
              </el-row>
              <br />
              <el-row v-if="oppositeCompany.type === 'LEGAL'">
                <el-col>Генеральный Директор</el-col>
              </el-row>
              <el-row>
                <el-col>{{ oppositeCompany.short_name }}</el-col>
              </el-row>
              <br />
              <el-row v-if="oppositeCompany.type === 'LEGAL'">
                {{
                  oppositeCompany.ceo
                    .split(/\s+/)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
              <el-row v-else>
                {{
                  oppositeCompany.short_name
                    .split(/\s+/)
                    .splice(1, 3)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
            </div>
            <div v-else>
              <div class="block-header">
                {{ passport.name || "Иванов Иван Иванович" }}
              </div>
              <br />
              <el-row>
                <el-col>Паспорт:{{ passport.number || "6666 000001" }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>
                  Выдан:
                  {{ passport.authority || "отделом ОУФМС России по г.Москва" }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>Дата выдачи:{{ passport.date || "10.11.2012" }}</el-col>
              </el-row>
              <el-row>
                <el-col>
                  Код подразделения:{{ passport.subdivision || "100-500" }}
                </el-col>
              </el-row>
              <br /><br /><br /><br /><br />
              <el-row>
                <el-col>Частное лицо</el-col>
              </el-row>
              <br /><br />
              <el-row>
                {{ passport.name || "Иванов Иван Иванович" }}
              </el-row>
            </div>
          </div>
          <div class="order-pattern-block-card-agent">
            <div class="block-header">{{ clientCompany.short_name }}</div>
            <div>
              <br />
              <el-row>
                <el-col>{{ clientCompany.address }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>ИНН:{{ clientCompany.inn }}</el-col>
              </el-row>
              <el-row>
                <el-col v-if="clientCompany.type === 'LEGAL'">
                  КПП:{{ clientCompany.kpp }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>ОГРН:{{ clientCompany.ogrn }}</el-col>
              </el-row>
              <br />
              <el-row>
                <el-col>
                  р/с {{ this.bankAccount }} в {{ clientBank.name }}
                </el-col>
              </el-row>
              <el-row>
                <el-col>к/с {{ clientBank.correspondent_account }}</el-col>
              </el-row>
              <el-row>
                <el-col>БИК:{{ clientBank.bik }}</el-col>
              </el-row>
              <br />
              <el-row v-if="clientCompany.type === 'LEGAL'">
                <el-col>Генеральный Директор</el-col>
              </el-row>
              <el-row>
                <el-col>{{ clientCompany.short_name }}</el-col>
              </el-row>
              <br />
              <el-row v-if="clientCompany.type === 'LEGAL'">
                {{
                  clientCompany.ceo
                    .split(/\s+/)
                    .map((w, i) =>
                      i ? w.substring(0, 1).toUpperCase() + "." : w
                    )
                    .join(" ")
                }}
              </el-row>
              <el-row v-else>
                {{
                  clientCompany.short_name
                    .split(/\s+/)
                    .splice(1, 3)
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
import generateTemplate from "@/utils/generateTemplate";

export default {
  name: "ContractTemplate",
  components: {
    RequisitesSettings,
  },
  data: () => ({
    isCustomer: true,
    isCompany: true,
    passport: "",
    oppositeBankAccount: "",
  }),
  props: {
    value: String,
    bankAccount: String,
  },
  computed: {
    ...mapState([
      "clientCompany",
      "oppositeCompany",
      "oppositeBank",
      "clientBank",
    ]),
    generatedTemplate() {
      return generateTemplate(
        this.clientCompany,
        this.isCompany ? this.oppositeCompany : this.passport,
        this.isCustomer
      );
    },
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
